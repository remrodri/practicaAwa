self.addEventListener('install', e => {

    const cacheProm = caches.open('cache-1')
        .then(cache => {
            cache.addAll([
                //'/',
                'index.html',
                'css/style.css',
                'img/main.jpg',
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
                'js/app.js'
            ]); 
        });
    e.waitUntil(cacheProm); 
});

self.addEventListener('fetch', e =>{
    //1- cache only
    e.respondWith(caches.match(e.request));
});