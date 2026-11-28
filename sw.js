/* Bitzkrieg 28 - offline helper for the home-screen app.
   Online: always fetches the newest pages and rules data (so updates go live as before),
   and keeps a copy. Offline (or very slow signal): uses the last saved copy.
   You never need to edit this file when updating the apps. Bump VERSION only if you
   add/rename files in the PRECACHE list below. */
var VERSION = "b28-v1";
var CACHE = "b28-app-" + VERSION;
var FONT_CACHE = "b28-fonts";

// Saved on install, so the whole app works offline right away (prebuilt teams and the
// rulebook are saved the first time they are opened).
var PRECACHE = [
  "./",
  "index.html",
  "roster.html",
  "fighter_forge.html",
  "feat_sheet.html",
  "manifest.webmanifest",
  "data/bitzkrieg_data.js",
  "data/b28_ui.js",
  "data/b28_app.js",
  "data/b28_phone.css",
  "icons/icon-32.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
  "img/mortalis/crosshair.svg",
  "img/mortalis/sword.svg",
  "img/mortalis/feat-card-bg.jpg",
  "img/mortalis/fighterforge.png",
  "img/mortalis/mortalis_logo.png",
  "img/mortalis/mortalistexture.jpg",
  "img/wr/bow.svg",
  "img/wr/sword.svg",
  "img/wr/feat-card-bg.jpg",
  "img/wr/darkrealmstextureparchment.jpg",
  "img/wr/wrath_ruin_logo.png"
];

var SCOPE = new URL("./", self.location.href);
var NETWORK_TIMEOUT_MS = 4000;

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      // One missing file must not break the install
      return Promise.all(PRECACHE.map(function (path) {
        var url = new URL(path, SCOPE).href;
        return fetch(url, { cache: "reload" }).then(function (res) {
          if (res.ok) return cache.put(keyFor(url), res);
        }).catch(function () {});
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k.indexOf("b28-app-") === 0 && k !== CACHE) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

// ?game=wr, ?skin=office etc. all share one saved copy of the page
function keyFor (url) {
  var u = new URL(url);
  u.search = "";
  u.hash = "";
  return u.href;
}

function isFont (url) {
  return url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
}

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET" || req.headers.has("range")) return;
  var url = new URL(req.url);

  if (isFont(url)) { event.respondWith(fontFirst(req)); return; }
  if (url.origin !== SCOPE.origin || url.pathname.indexOf(SCOPE.pathname) !== 0) return;
  if (url.pathname.indexOf(SCOPE.pathname + "home/") === 0) return; // website (Blogger) files

  event.respondWith(networkFirst(req));
});

function networkFirst (req) {
  var key = keyFor(req.url);
  return caches.open(CACHE).then(function (cache) {
    var network = fetch(req).then(function (res) {
      if (res && res.ok && res.status === 200 && res.type === "basic") cache.put(key, res.clone());
      return res;
    });
    var timeout = new Promise(function (resolve) {
      setTimeout(function () {
        cache.match(key).then(function (hit) { if (hit) resolve(hit); });
      }, NETWORK_TIMEOUT_MS);
    });
    return Promise.race([
      network.catch(function () {
        return cache.match(key).then(function (hit) {
          if (hit) return hit;
          if (req.mode === "navigate") return cache.match(keyFor(new URL("roster.html", SCOPE).href));
          return Response.error();
        });
      }),
      timeout
    ]).then(function (res) { return res || Response.error(); });
  });
}

function fontFirst (req) {
  return caches.open(FONT_CACHE).then(function (cache) {
    return cache.match(req).then(function (hit) {
      var network = fetch(req).then(function (res) {
        if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
        return res;
      }).catch(function () { return hit || Response.error(); });
      return hit || network;
    });
  });
}
