const CACHE = 'dadagain-v3';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './favicon.png',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

// React, ReactDOM, Babel and Tailwind load from CDNs. Without these cached the
// app cannot render at all offline, so they are precached with the shell.
// Versions are pinned in index.html; change both places together.
const CDN = [
  'https://unpkg.com/react@18.3.1/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone@7.29.9/babel.min.js',
  'https://cdn.tailwindcss.com/3.4.17'
];

// Hosts whose responses are cached as they are fetched. Fonts come through
// here: the stylesheet names the font files, so they cannot be listed ahead.
const CDN_HOSTS = ['unpkg.com', 'cdn.tailwindcss.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

const cacheable = (req, res) => {
  if (!res) return false;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) return res.status === 200;
  // Tailwind's CDN sends no CORS headers, so its response is opaque. Opaque
  // responses still run fine as a plain <script>, so keep them.
  return CDN_HOSTS.indexOf(url.hostname) !== -1 && (res.status === 200 || res.type === 'opaque');
};

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => Promise.all([
    c.addAll(ASSETS).catch(() => {}),
    // Each fetched on its own so one failing CDN does not sink the others.
    // Tailwind has no CORS headers, so it is fetched no-cors.
    ...CDN.map(u => {
      const req = u.indexOf('tailwindcss') !== -1 ? new Request(u, { mode: 'no-cors' }) : new Request(u);
      return fetch(req).then(res => { if (cacheable(req, res)) return c.put(u, res); }).catch(() => {});
    })
  ])));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Cache-first, refreshed in the background. Keeps it working at 3am on bad wifi.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => {
      const net = fetch(e.request).then(res => {
        if (cacheable(e.request, res)) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
      if (hit) { net.catch(() => {}); return hit; }
      return net.catch(() => e.request.mode === 'navigate' ? caches.match('./index.html') : Response.error());
    })
  );
});
