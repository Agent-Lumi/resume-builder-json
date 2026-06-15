self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('resume-builder-v2').then(c => c.addAll([
            './',
            './index.html',
            './manifest.json',
            'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
        ]))
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(r => r || fetch(e.request).catch(() => {
            // Return offline page or error for failed fetches
            return new Response('Offline - some features may be limited');
        }))
    );
});
