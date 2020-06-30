const CACHE_NAME ='cache-v1';

self.addEventListener('install', e => {

    const cacheProm = caches.open(CACHE_NAME)
        .then(cache => {
            cache.addAll([
                '/', 
                '/index.html',
                '/css/style.css',
                '/img/main.jpg',
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
                '/js/app.js'
            ]);
        });
    e.waitUntil(cacheProm); 
});

 self.addEventListener('fetch', e =>{
    //1- cache only
    //e.respondWith(caches.match(e.request));
    
    //2- cache with network fallback
    //busca first en la cache y sino esta recien
    //busca en internet
     const respuesta = caches.match(e.request)
         .then(res=>{
             if (res) return res;
             // no existe el archivo
             // me voy pa la web
             console.log('No existe  ', e.request.url);
             return fetch(e.request).then(newResp =>{

                    caches.open(CACHE_NAME)
                    .then(cache=>{
                        cache.put(e.request,newResp);
                    });
                     return newResp.clone();
                 });
         });
     e.respondWith(respuesta);
}); 