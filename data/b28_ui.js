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

  function init () {
    applyTerms(document);
    if (!B28.storageOK) showStorageWarning();
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
