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
  function openFullPage () {
    var u = new URL(location.href);
    u.searchParams.set("game", B28.gameKey);
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
  function addFullPageButton () {
    if (!inIframe) return;
    var chooser = document.querySelector(".b28-chooser");
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
  }

  function init () {
    applyTerms(document);
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
