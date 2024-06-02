// Service Worker File (service-worker.js)

// Define a unique cache name
const cacheName = 'my-pwa-cache-v1';

// List of URLs to cache
const urlsToCache = [
  '/',
  '/index.html',
  '/src/index.css',
  '/src/main.js',
  '/icons/logo.png',
  "logo.png",
  // Add more URLs to cache as needed
];

// Install event: Cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event: Serve cached assets or fetch from network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached response if found, otherwise fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event: Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => {
          // Remove any cache that doesn't match the current cacheName
          return name !== cacheName;
        }).map(name => {
          return caches.delete(name);
        })
      );
    })
  );
});
