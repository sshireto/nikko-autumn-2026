'use strict';
const CACHE = 'nikko-guide-v1';
const FILES = ['./', 'index.html', 'styles.css', 'app.js', 'manifest.webmanifest', 'assets/autumn.webp', 'assets/lake.webp', 'assets/fraunces.ttf', 'assets/icon.svg', 'assets/icon-192.png', 'assets/icon-512.png', 'assets/FONT-LICENSE.txt'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(async cache => { await cache.addAll(FILES); await cache.put('offline-ready', new Response('ready')); }).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    await self.clients.claim();
    const clients = await self.clients.matchAll();
    clients.forEach(client => client.postMessage('OFFLINE_READY'));
  })());
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope)) return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).then(response => {
      if (response.ok) { const copy = response.clone(); event.waitUntil(caches.open(CACHE).then(cache => cache.put('index.html', copy))); }
      return response;
    }).catch(() => caches.match('index.html')));
  } else {
    event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
  }
});
