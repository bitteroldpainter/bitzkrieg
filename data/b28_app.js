/* Bitzkrieg 28 - home-screen app support for every page.
   - registers the offline helper (sw.js)
   - marks the page when it runs as an installed app (html.b28-standalone)
   - shows a small "add to your home screen" tip on phones (roster page only, dismissible) */
(function () {
  // Resolve paths from this script's own location (data/), so it works from any page
  var SCRIPT_SRC = (document.currentScript && document.currentScript.src) || location.href;
  var inIframe = false;
  try { inIframe = window.self !== window.top; } catch (e) { inIframe = true; }

  var standalone = false;
  try {
    standalone = window.navigator.standalone === true ||
      (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches);
  } catch (e) {}
  if (standalone) document.documentElement.classList.add("b28-standalone");

  // ---- Offline helper ----
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register(new URL("../sw.js", SCRIPT_SRC).href).catch(function () {});
    });
  }

  // ---- "Add to Home Screen" tip ----
  var HINT_KEY = "b28_install_hint_dismissed";
  function dismissed () { try { return localStorage.getItem(HINT_KEY) === "1"; } catch (e) { return true; } }
  function dismiss () { try { localStorage.setItem(HINT_KEY, "1"); } catch (e) {} }

  var onRoster = /roster\.html$|\/$/.test(location.pathname);
  if (inIframe || standalone || !onRoster || dismissed()) return;

  var ua = navigator.userAgent || "";
  var isIOS = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);

  function addStyle () {
    if (document.getElementById("b28-install-style")) return;
    var st = document.createElement("style");
    st.id = "b28-install-style";
    st.textContent =
      ".b28-install{position:fixed;left:10px;right:10px;bottom:calc(10px + env(safe-area-inset-bottom,0px));z-index:9999;" +
      "display:flex;align-items:center;gap:10px;max-width:520px;margin:0 auto;padding:10px 12px;border-radius:12px;" +
      "background:#15191f;border:1px solid #3a4250;color:#e6e9ee;box-shadow:0 6px 24px rgba(0,0,0,.5);" +
      "font:14px/1.35 system-ui,-apple-system,Segoe UI,Roboto,sans-serif}" +
      ".b28-install img{width:40px;height:40px;border-radius:9px;flex:0 0 auto}" +
      ".b28-install .b28-install-text{flex:1 1 auto}" +
      ".b28-install b{color:#fff}" +
      ".b28-install button{font:inherit;cursor:pointer;border-radius:8px}" +
      ".b28-install .b28-install-go{background:#e2574c;border:0;color:#fff;font-weight:700;padding:8px 12px}" +
      ".b28-install .b28-install-x{background:none;border:0;color:#9aa3af;font-size:22px;line-height:1;padding:4px 6px}" +
      "html.skin-office .b28-install{background:#fff;border-color:#cfd3d8;color:#2b2f33}" +
      "html.skin-office .b28-install b{color:#2b2f33}";
    document.head.appendChild(st);
  }
  var ICON = new URL("../icons/apple-touch-icon.png", SCRIPT_SRC).href;

  function showBar (html, onGo) {
    addStyle();
    var bar = document.createElement("div");
    bar.className = "b28-install";
    bar.setAttribute("role", "note");
    bar.innerHTML = '<img alt="" src="' + ICON + '"><div class="b28-install-text">' + html + "</div>" +
      (onGo ? '<button type="button" class="b28-install-go">Install</button>' : "") +
      '<button type="button" class="b28-install-x" aria-label="Close">&times;</button>';
    bar.querySelector(".b28-install-x").addEventListener("click", function () { dismiss(); bar.remove(); });
    if (onGo) bar.querySelector(".b28-install-go").addEventListener("click", function () { onGo(bar); });
    document.body.appendChild(bar);
  }

  if (isIOS) {
    // iPhone / iPad: no install button exists, so explain the two taps.
    window.addEventListener("load", function () {
      setTimeout(function () {
        showBar("<b>Get the Fighter Forge app:</b> tap <b>Share</b> " +
          '<svg width="14" height="17" viewBox="0 0 14 17" style="vertical-align:-2px" aria-hidden="true">' +
          '<path d="M7 1v10M3.5 4.5 7 1l3.5 3.5M2 7.5H1v8.5h12V7.5h-1" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>' +
          " then <b>Add to Home Screen</b>. Works offline.");
      }, 1200);
    });
  } else {
    // Android / desktop Chrome and Edge offer a real install prompt.
    window.addEventListener("beforeinstallprompt", function (ev) {
      ev.preventDefault();
      if (!window.matchMedia || !window.matchMedia("(pointer: coarse)").matches) return; // phones and tablets only
      showBar("<b>Get the Fighter Forge app</b> on your home screen. Works offline.", function (bar) {
        bar.remove();
        try { ev.prompt(); } catch (e) {}
      });
    });
  }
})();
