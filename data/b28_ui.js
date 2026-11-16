/* Bitzkrieg 28 — shared game switch, wording and storage helpers for every app.
   Load after data/bitzkrieg_data.js. */
(function () {
  var B28 = window.B28;
  if (!B28) return;

  // ---- Keep the two games' saved data apart in the browser ----
  // Before the merge, both Forges wrote to the same "mortalis_*" keys. Anything there that
  // belongs to Wrath & Ruin is moved to the W&R keys (once), so neither game loads the other's data.
  function get (k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function del (k) { try { localStorage.removeItem(k); } catch (e) {} }
  function parse (t) { try { return JSON.parse(t); } catch (e) { return null; } }
  function moveIfWr (legacyKey, wrKey) {
    var raw = get(legacyKey); if (!raw) return;
    var obj = parse(raw); if (!obj) return;
    if (B28.detectGame(obj) !== "wr") return;
    if (!get(wrKey)) set(wrKey, raw);
    del(legacyKey);
  }
  try {
    if (!get("b28_storage_migrated_v1")) {
      moveIfWr("mortalis_fighter_autosave_v1", "wr_fighter_autosave_v1");
      moveIfWr("mortalis_roster_team_state_v1", "wr_roster_team_state_v1");
      set("b28_storage_migrated_v1", "1");
    }
  } catch (e) {}

  // ---- Office mode: a quiet, light skin that opens in its own tab ----
  // Turned on with ?skin=office (and off with ?skin=normal); remembered for the rest of the tab
  // via sessionStorage, so moving between the Builder, Forge and Feat Sheet keeps it.
  // Nothing is hand-copied: when the page loads, the Mortalis skin's own CSS rules are read and
  // re-coloured on the fly, so any later layout/style change in the apps carries over by itself.
  var SKIN_KEY = "b28_skin";
  var officeMode = (function () {
    var s = null;
    try { s = new URLSearchParams(location.search).get("skin"); } catch (e) {}
    try {
      if (s === "office") sessionStorage.setItem(SKIN_KEY, "office");
      else if (s === "normal") sessionStorage.removeItem(SKIN_KEY);
      return sessionStorage.getItem(SKIN_KEY) === "office";
    } catch (e) { return s === "office"; }
  })();
  B28.officeMode = officeMode;
  if (officeMode) {
    var rootEl = document.documentElement;
    // One look for both games: reuse the Mortalis layout, keep the chosen game's data and wording
    rootEl.classList.remove("game-wr");
    rootEl.classList.add("game-mortalis", "skin-office");
    var hideStyle = document.createElement("style");
    hideStyle.id = "b28-office-hide";
    hideStyle.textContent = "html.skin-office body{opacity:0}";
    (document.head || rootEl).appendChild(hideStyle);
  }

  var OFFICE_CSS = [
    "html.skin-office, html.skin-office body{background:#f4f3f0!important;color:#2b2f33}",
    "html.skin-office body, html.skin-office body *:not(svg):not(path){font-family:'Segoe UI',Calibri,system-ui,-apple-system,Roboto,Arial,sans-serif!important;letter-spacing:normal!important}",
    "html.skin-office *{text-shadow:none!important}",
    "html.skin-office .headerLogo img, html.skin-office img[src*='logo'], html.skin-office img[src*='fighterforge']{display:none!important}",
    "html.skin-office .headerLogo{min-height:0!important;margin:6px auto 10px!important}",
    "html.skin-office .headerLogo::before{content:attr(data-office-title);display:block;font-size:1.45rem;font-weight:600;color:#2b2f33;padding:4px 0}",
    "html.skin-office [style*='texture']{background-image:none!important}",
    "html.skin-office .cardBgImg{display:none!important}",
    "html.skin-office input:not([type=checkbox]):not([type=radio]):not([type=range]), html.skin-office select, html.skin-office textarea{background-color:#fdfdfc!important;color:#2b2f33!important;border-color:#cfd3d8!important}",
    "html.skin-office button{border-color:#c5cad0}",
    "html.skin-office input::placeholder{color:#8b9096}",
    "html.skin-office button:focus-visible, html.skin-office input:focus, html.skin-office select:focus{outline:2px solid #8fb0d6;outline-offset:1px}",
    "html.skin-office .b28-chooser .b28-game-btn{background:#fbfaf8!important;border:1px solid #cfd3d8!important;color:#3d434a!important}",
    "html.skin-office .b28-chooser .b28-game-btn.active{background:#dfe8f2!important;border-color:#9fb6cf!important;color:#22303f!important}",
    "html.skin-office .b28-storage-warning{background:#fbeeee!important;border-color:#e2b4b4!important;color:#5a2a2a!important}",
    "html.skin-office .b28-welcome{background:rgba(244,243,240,.96)!important}",
    "html.skin-office .b28-welcome-box{color:#2b2f33!important}",
    "html.skin-office .b28-welcome-box p{color:#5d636a!important}",
    "html.skin-office .b28-welcome-choice{background:#fbfaf8!important;border:1px solid #cfd3d8!important;color:#2b2f33!important}"
  ].join("\n");

  // --- colour helpers ---
  function clamp01 (x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function rgbToHsl (r, g, b) {
    r /= 255; g /= 255; b /= 255;
    var mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, h = 0, s = 0;
    if (mx !== mn) {
      var d = mx - mn;
      s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
      if (mx === r) h = (g - b) / d + (g < b ? 6 : 0); else if (mx === g) h = (b - r) / d + 2; else h = (r - g) / d + 4;
      h *= 60;
    }
    return [h, s, l];
  }
  function hsl (h, s, l, a) {
    var str = "hsl(" + Math.round(h) + " " + Math.round(clamp01(s) * 100) + "% " + Math.round(clamp01(l) * 1000) / 10 + "%";
    return str + (a < 1 ? " / " + Math.round(a * 1000) / 1000 : "") + ")";
  }
  var NAMED = { white: [255, 255, 255, 1], black: [0, 0, 0, 1], transparent: null, red: [255, 0, 0, 1], gold: [255, 215, 0, 1], orange: [255, 165, 0, 1] };
  function parseColor (tok) {
    var t = tok.toLowerCase(), m;
    if (t.charAt(0) === "#") {
      var hx = t.slice(1);
      if (hx.length === 3 || hx.length === 4) hx = hx.split("").map(function (c) { return c + c; }).join("");
      var a = hx.length === 8 ? parseInt(hx.slice(6, 8), 16) / 255 : 1;
      return [parseInt(hx.slice(0, 2), 16), parseInt(hx.slice(2, 4), 16), parseInt(hx.slice(4, 6), 16), a];
    }
    if ((m = t.match(/^rgba?\(([^)]*)\)$/))) {
      var p = m[1].split(/[\s,\/]+/).filter(Boolean);
      var n = p.map(function (x, k) { var f = parseFloat(x); return x.indexOf("%") > -1 ? (k < 3 ? f * 2.55 : f / 100) : f; });
      return [n[0], n[1], n[2], n.length > 3 ? n[3] : 1];
    }
    if (NAMED.hasOwnProperty(t)) return NAMED[t];
    return undefined;
  }
  // Office palette: muted steel blue for anything that was orange/teal/gold, soft rose for reds,
  // sage for greens; backgrounds all end up light, text all ends up dark.
  function mapHue (h, s) {
    if (s < 0.15) return null;
    if (h < 15 || h >= 335) return 355;
    if (h >= 85 && h < 170) return 145;
    return 212;
  }
  function mapColor (rgba, role) {
    if (!rgba) return null;
    var hs = rgbToHsl(rgba[0], rgba[1], rgba[2]), h = hs[0], s = hs[1], l = hs[2], a = rgba[3];
    var nh = mapHue(h, s);
    if (role === "bg") {
      if (nh === null) return hsl(40, 0.08, l < 0.5 ? Math.min(0.985, 0.995 - l * 0.35) : 0.85 + (l - 0.5) * 0.27, a);
      return hsl(nh, nh === 212 ? 0.16 : 0.22, 0.84 + l * 0.1, a);
    }
    if (role === "border") {
      if (nh === null) return hsl(210, 0.06, 0.8 + l * 0.06, a);
      return hsl(nh, 0.2, 0.76, a);
    }
    // text / accents
    if (nh === null) return hsl(210, 0.08, l >= 0.5 ? 0.12 + (1 - l) * 0.55 : Math.min(l, 0.3), a);
    return hsl(nh, Math.min(s, 0.32), nh === 355 ? 0.4 : 0.33, a);
  }
  var COLOR_RE = /#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|\b(?:white|black|red|gold|orange)\b/g;
  function mapValue (val, role) {
    // Keep url(...) apart: drop photo textures, recolour little inline SVG icons (e.g. select arrows)
    return val.split(/(url\([^)]*\))/).map(function (part) {
      if (/^url\(/.test(part)) {
        if (/data:image\/svg/.test(part)) return part.replace(/fill=(['"]|%22|%27)(?:white|%23fff(?:fff)?|#fff(?:fff)?)\1/gi, "fill=$1%23555$1");
        return role === "bg" ? "none" : part;
      }
      return part.replace(COLOR_RE, function (tok) {
        var c = parseColor(tok);
        if (c === undefined) return tok;
        if (c === null) return tok;
        return mapColor(c, role) || tok;
      });
    }).join("");
  }
  function roleFor (prop) {
    if (prop.indexOf("--") === 0) {
      var n = prop.toLowerCase();
      if (/grad|panel|bg|surface|card|paper/.test(n)) return "bg";
      if (/line|border|edge/.test(n)) return "border";
      if (/text|muted|ink|bright|fg/.test(n)) return "text";
      if (/accent|danger|ok|orange|teal|red|bronze|gold|hover/.test(n)) return "text";
      return null;
    }
    if (/^(color|-webkit-text-fill-color|caret-color|fill|stroke|text-decoration-color|column-rule-color|text-emphasis-color)$/.test(prop)) return "text";
    if (/^background(-color|-image)?$/.test(prop)) return "bg";
    if (/^(border|outline)(-(top|right|bottom|left|block|inline)(-(start|end))?)?(-color)?$/.test(prop) || prop === "border") return "border";
    if (prop === "box-shadow" || prop === "text-shadow") return "none";
    return null;
  }
  var SHORTHANDS = ["background", "border", "border-top", "border-right", "border-bottom", "border-left", "border-color", "outline"];
  function officeSelector (sel) {
    // split on top-level commas only
    var parts = [], depth = 0, cur = "";
    for (var i = 0; i < sel.length; i++) {
      var ch = sel.charAt(i);
      if (ch === "(") depth++; else if (ch === ")") depth--;
      if (ch === "," && depth === 0) { parts.push(cur); cur = ""; } else cur += ch;
    }
    parts.push(cur);
    var out = [];
    parts.forEach(function (p) {
      p = p.trim();
      if (!p || p.indexOf("game-wr") > -1 || p.indexOf("skin-office") > -1) return;
      if (p.indexOf("html.game-mortalis") > -1) out.push(p.replace("html.game-mortalis", "html.skin-office.game-mortalis"));
      else if (/^html\b/.test(p)) out.push(p.replace(/^html/, "html.skin-office"));
      else if (/^:root\b/.test(p)) out.push(p.replace(/^:root/, "html.skin-office"));
      else out.push("html.skin-office " + p);
    });
    return out.join(", ");
  }
  function convertRule (rule) {
    var st = rule.style, decls = [], seen = {};
    var clipText = /text/.test(st.getPropertyValue("-webkit-background-clip") + st.getPropertyValue("background-clip"));
    function add (prop, val, imp) { if (seen[prop]) return; seen[prop] = 1; decls.push(prop + ":" + val + (imp ? " !important" : "")); }
    SHORTHANDS.forEach(function (sh) {
      var v = st.getPropertyValue(sh);
      if (v && v.indexOf("var(") > -1) add(sh, mapValue(v, roleFor(sh) || "bg"), st.getPropertyPriority(sh));
    });
    for (var i = 0; i < st.length; i++) {
      var prop = st[i], role = roleFor(prop);
      if (!role) continue;
      var v2 = st.getPropertyValue(prop), imp = st.getPropertyPriority(prop);
      if (!v2) continue;
      if (role === "none") { if (v2 !== "none") add(prop, "none", imp); continue; }
      var mv = mapValue(v2, role);
      if (mv !== v2) add(prop, mv, imp);
    }
    if (clipText) { add("-webkit-text-fill-color", "#2b2f33", true); add("background-image", "none", true); }
    if (!decls.length) return "";
    var sel = officeSelector(rule.selectorText || "");
    return sel ? sel + "{" + decls.join(";") + "}" : "";
  }
  function convertRules (rules) {
    var out = [];
    for (var i = 0; i < rules.length; i++) {
      var r = rules[i];
      if (r.type === 1) out.push(convertRule(r));
      else if (r.type === 4) { var inner = convertRules(r.cssRules); if (inner) out.push("@media " + r.media.mediaText + "{" + inner + "}"); }
      else if (r.type === 12) { var inner2 = convertRules(r.cssRules); if (inner2) out.push("@supports " + r.conditionText + "{" + inner2 + "}"); }
    }
    return out.filter(Boolean).join("\n");
  }
  var inlineDone = (typeof WeakMap === "function") ? new WeakMap() : null;
  function convertInlineEl (el) {
    if (!el || !el.style || !el.style.length) return;
    if (inlineDone && inlineDone.get(el) === el.style.cssText) return;
    var st = el.style;
    for (var j = st.length - 1; j >= 0; j--) {
      var prop = st[j], role = roleFor(prop);
      if (!role) continue;
      var v = st.getPropertyValue(prop);
      if (!v) continue;
      if (role === "none") { if (v !== "none") st.setProperty(prop, "none", st.getPropertyPriority(prop)); continue; }
      var mv = mapValue(v, role);
      if (mv !== v) st.setProperty(prop, mv, st.getPropertyPriority(prop));
    }
    if (inlineDone) inlineDone.set(el, el.style.cssText);
  }
  function convertInlineStyles (root) {
    // Elements the apps colour directly (style="...") get the same treatment
    if (root && root.nodeType === 1) convertInlineEl(root);
    var els = (root || document).querySelectorAll("[style]");
    for (var i = 0; i < els.length; i++) convertInlineEl(els[i]);
  }
  function applyOffice () {
    var css = [];
    for (var i = 0; i < document.styleSheets.length; i++) {
      var sh = document.styleSheets[i], rules;
      if (sh.ownerNode && sh.ownerNode.id && sh.ownerNode.id.indexOf("b28-office") === 0) continue;
      try { rules = sh.cssRules; } catch (e) { continue; } // e.g. Google Fonts
      css.push(convertRules(rules));
    }
    var el = document.getElementById("b28-office-css") || document.createElement("style");
    el.id = "b28-office-css";
    el.textContent = css.join("\n") + "\n" + OFFICE_CSS;
    document.body.appendChild(el);
    convertInlineStyles(document);
    var logo = document.querySelector(".headerLogo");
    if (logo) logo.setAttribute("data-office-title", (B28.T.team || "Team") + " Builder");
    document.title = "Planning sheet";
    try {
      new MutationObserver(function (muts) {
        muts.forEach(function (m) {
          if (m.type === "attributes") convertInlineEl(m.target);
          else m.addedNodes.forEach(function (n) { if (n.nodeType === 1) convertInlineStyles(n); });
        });
      }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["style"] });
    } catch (e) {}
    var hide = document.getElementById("b28-office-hide");
    if (hide) hide.parentNode.removeChild(hide);
  }
  B28.applyOffice = applyOffice;

  // ---- Wording in plain HTML: <span data-t="team">Team</span> ----
  function applyTerms (root) {
    var els = (root || document).querySelectorAll("[data-t]");
    for (var i = 0; i < els.length; i++) {
      var k = els[i].getAttribute("data-t");
      if (B28.T[k] != null) els[i].textContent = B28.T[k];
    }
    // Whole-element text: data-tpl="Export {team} (.json)"
    var tpls = (root || document).querySelectorAll("[data-tpl]");
    for (var j = 0; j < tpls.length; j++) {
      tpls[j].textContent = tpls[j].getAttribute("data-tpl").replace(/\{(\w+)\}/g, function (_, key) { return B28.T[key] != null ? B28.T[key] : key; });
    }
  }
  B28.applyTerms = applyTerms;

  function showWelcome () {
    var o = document.createElement("div");
    o.className = "b28-welcome";
    o.innerHTML =
      '<div class="b28-welcome-box">' +
      '<h1>Choose Mortalis or Wrath &amp; Ruin</h1>' +
      '<p>Both games run on the Bitzkrieg 28 rules. You can switch at any time from the top of the page.</p>' +
      '<div class="b28-welcome-choices">' +
      '<button type="button" class="b28-welcome-choice mortalis" data-game="mortalis">Mortalis<small>Grimdark Future</small></button>' +
      '<button type="button" class="b28-welcome-choice wr" data-game="wr">Wrath &amp; Ruin<small>Dark Fantasy</small></button>' +
      '</div></div>';
    o.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest("[data-game]");
      if (b) B28.setGame(b.getAttribute("data-game"));
    });
    document.body.appendChild(o);
  }

  // ---- Can this browser keep data between page loads? ----
  // Some locked-down (e.g. work) computers block saving for local files or all sites.
  // Then every reload - including switching game - starts empty.
  B28.storageOK = (function () {
    try {
      var k = "b28_storage_test";
      localStorage.setItem(k, "1");
      var ok = localStorage.getItem(k) === "1";
      localStorage.removeItem(k);
      return ok;
    } catch (e) { return false; }
  })();

  function showStorageWarning () {
    var bar = document.createElement("div");
    bar.className = "b28-storage-warning";
    bar.setAttribute("role", "alert");
    bar.style.cssText = "margin:0 auto 12px;padding:10px 14px;border-radius:8px;background:#5a1414;border:1px solid #c0392b;color:#fff;font:14px/1.4 system-ui,-apple-system,'Segoe UI',sans-serif;text-align:center;max-width:1100px";
    bar.innerHTML = "<b>This browser isn't letting the page save anything.</b> Your " + B28.T.teamLower +
      " and fighters will be lost when the page reloads or you switch game. Export them to a file to keep them." +
      " (Often caused by work-computer settings, or by opening the files straight from a zip.)";
    var chooser = document.querySelector(".b28-chooser");
    if (chooser && chooser.parentNode) chooser.parentNode.insertBefore(bar, chooser.nextSibling);
    else document.body.insertBefore(bar, document.body.firstChild);
  }


  // ---- "Open full page" (only shown when the app runs inside an iframe, e.g. on Blogger) ----
  // Browsers keep an iframe's saved data apart from the same site opened on its own, so the
  // button hands everything over to the new tab: saved team/warband, settings, portraits and
  // the fighter currently being edited.
  var inIframe = (function () { try { return window.self !== window.top; } catch (e) { return true; } })();
  B28.inIframe = inIframe;
  var PORTRAIT_DB = "warband_portraits_v1", PORTRAIT_STORE = "portraits";

  function idbAll () {
    return new Promise(function (resolve) {
      try {
        var req = indexedDB.open(PORTRAIT_DB, 1);
        req.onupgradeneeded = function () { var db = req.result; if (!db.objectStoreNames.contains(PORTRAIT_STORE)) db.createObjectStore(PORTRAIT_STORE); };
        req.onerror = function () { resolve([]); };
        req.onsuccess = function () {
          var db = req.result, out = [];
          try {
            var cur = db.transaction(PORTRAIT_STORE, "readonly").objectStore(PORTRAIT_STORE).openCursor();
            cur.onsuccess = function () { var c = cur.result; if (c) { out.push([c.key, c.value]); c.continue(); } else resolve(out); };
            cur.onerror = function () { resolve(out); };
          } catch (e) { resolve(out); }
        };
      } catch (e) { resolve([]); }
    });
  }
  function idbPutAll (pairs) {
    return new Promise(function (resolve) {
      if (!pairs || !pairs.length) return resolve();
      try {
        var req = indexedDB.open(PORTRAIT_DB, 1);
        req.onupgradeneeded = function () { var db = req.result; if (!db.objectStoreNames.contains(PORTRAIT_STORE)) db.createObjectStore(PORTRAIT_STORE); };
        req.onerror = function () { resolve(); };
        req.onsuccess = function () {
          try {
            var tx = req.result.transaction(PORTRAIT_STORE, "readwrite"), st = tx.objectStore(PORTRAIT_STORE);
            pairs.forEach(function (kv) { st.put(kv[1], kv[0]); });
            tx.oncomplete = function () { resolve(); }; tx.onerror = function () { resolve(); };
          } catch (e) { resolve(); }
        };
      } catch (e) { resolve(); }
    });
  }
  function collectHandover () {
    var ls = {};
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i), v = localStorage.getItem(k);
        if (v != null && v !== "") ls[k] = v;
      }
    } catch (e) {}
    var fighter = null;
    try { if (typeof window.b28SnapshotFighter === "function") fighter = window.b28SnapshotFighter(); } catch (e) {}
    return idbAll().then(function (idb) { return { type: "b28-handover", ls: ls, idb: idb, fighter: fighter }; });
  }
  function openFullPage (skin) {
    var u = new URL(location.href);
    u.searchParams.set("game", B28.gameKey);
    if (typeof skin === "string") u.searchParams.set("skin", skin); else u.searchParams.delete("skin");
    u.searchParams.set("b28handover", "1");
    var w = window.open(u.toString(), "_blank");
    if (!w) { u.searchParams.delete("b28handover"); location.href = u.toString(); return; }
    var payloadP = collectHandover();
    function onMsg (ev) {
      if (ev.source !== w || ev.origin !== location.origin || !ev.data || ev.data.type !== "b28-ready") return;
      window.removeEventListener("message", onMsg);
      payloadP.then(function (p) { try { w.postMessage(p, location.origin); } catch (e) {} });
    }
    window.addEventListener("message", onMsg);
    setTimeout(function () { window.removeEventListener("message", onMsg); }, 30000);
  }
  // New tab side: ask the iframe for its data, store it, then reload once
  (function receiveHandover () {
    var params;
    try { params = new URLSearchParams(location.search); } catch (e) { return; }
    if (params.get("b28handover") !== "1") return;
    var clean = new URL(location.href); clean.searchParams.delete("b28handover");
    try { history.replaceState(null, "", clean.toString()); } catch (e) {}
    if (inIframe || !window.opener) return;
    function onMsg (ev) {
      if (ev.source !== window.opener || ev.origin !== location.origin || !ev.data || ev.data.type !== "b28-handover") return;
      window.removeEventListener("message", onMsg);
      var d = ev.data;
      try { Object.keys(d.ls || {}).forEach(function (k) { localStorage.setItem(k, d.ls[k]); }); } catch (e) {}
      try { if (d.fighter) sessionStorage.setItem("b28_pending_import", JSON.stringify(d.fighter)); } catch (e) {}
      idbPutAll(d.idb).then(function () { location.replace(clean.toString()); });
    }
    window.addEventListener("message", onMsg);
    try { window.opener.postMessage({ type: "b28-ready" }, location.origin); } catch (e) {}
    setTimeout(function () { window.removeEventListener("message", onMsg); }, 10000);
  })();
  function addOfficeButton (chooser, after) {
    var o = document.createElement("button");
    o.type = "button";
    o.className = "b28-game-btn b28-office-btn";
    o.textContent = "Office mode \u2197";
    o.title = "Open the builder in a new tab with a plain, light look";
    o.style.marginRight = "auto";
    o.addEventListener("click", function () {
      if (inIframe) { openFullPage("office"); return; }
      var w = window.open(location.pathname + "?game=" + B28.gameKey + "&skin=office", "_blank");
      if (!w) location.href = location.pathname + "?game=" + B28.gameKey + "&skin=office";
    });
    if (after) { after.style.marginRight = "0"; after.parentNode.insertBefore(o, after.nextSibling); }
    else if (chooser) chooser.insertBefore(o, chooser.firstChild);
    else document.body.insertBefore(o, document.body.firstChild);
  }
  function addFullPageButton () {
    var chooser = document.querySelector(".b28-chooser");
    if (officeMode) return;
    if (!inIframe) {
      // Already on its own page: just offer Office mode
      if (chooser) { chooser.style.display = "flex"; chooser.style.justifyContent = "flex-end"; }
      addOfficeButton(chooser, null);
      return;
    }
    var b = document.createElement("button");
    b.type = "button";
    b.className = "b28-game-btn b28-fullpage-btn";
    b.textContent = "Open full page ↗";
    b.title = "Open the " + B28.T.gameName + " builder on its own page (better on phones)";
    b.addEventListener("click", openFullPage);
    // Position set here (not only in the page CSS) so it stays top-left even if the
    // browser is still using an older cached copy of the page.
    b.style.marginRight = "auto";
    if (chooser) {
      chooser.style.display = "flex";
      chooser.style.justifyContent = "flex-end";
      if (chooser.classList.contains("b28-chooser-float") && window.innerWidth > 640) {
        chooser.style.left = "14px";
        chooser.style.pointerEvents = "none";
        for (var ci = 0; ci < chooser.children.length; ci++) chooser.children[ci].style.pointerEvents = "auto";
        b.style.pointerEvents = "auto";
      }
      chooser.insertBefore(b, chooser.firstChild);
    } else {
      document.body.insertBefore(b, document.body.firstChild);
    }
    addOfficeButton(chooser, b);
  }

  function init () {
    applyTerms(document);
    if (officeMode) applyOffice();
    if (!B28.storageOK) showStorageWarning();
    addFullPageButton();
    var btns = document.querySelectorAll(".b28-game-btn");
    for (var i = 0; i < btns.length; i++) {
      var g = btns[i].getAttribute("data-game");
      if (g === B28.gameKey) btns[i].classList.add("active");
      btns[i].addEventListener("click", function () {
        var g2 = this.getAttribute("data-game");
        if (g2 === B28.gameKey) return;
        if (!B28.storageOK && !confirm("This browser can't save between page loads, so switching to " +
            B28.GAMES[g2].name + " will clear what's on this page. Export your " + B28.T.teamLower +
            " or fighter first if you want to keep it.\n\nSwitch anyway?")) return;
        B28.setGame(g2);
      });
    }
    if (!B28.chosen) showWelcome();
    else { try { localStorage.setItem("b28_game", B28.gameKey); } catch (e) {} }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
