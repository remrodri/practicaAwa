//importScripts('js/sw-db.js');

// Guardar  en el cache dinamico
function actualizaCacheDinamico( dynamicCache, req, res ) {
    

    if ( res.ok ) {

        return caches.open( dynamicCache ).then( cache => {

            cache.put( req, res.clone() );
            
            return res.clone();

        });

    } else {
        return res;
    }

}

// Cache with network update
function actualizaCacheStatico( staticCache, req, APP_SHELL_INMUTABLE ) {


    if ( APP_SHELL_INMUTABLE.includes(req.url) ) {
        // No hace falta actualizar el inmutable
        // console.log('existe en inmutable', req.url );

    } else {
        // console.log('actualizando', req.url );
        return fetch( req )
                .then( res => {
                    return actualizaCacheDinamico( staticCache, req, res );
                });
    }

}

//estrategia network with cache fallback / update
function manejoApiMensajes( cacheName, req ) {

    if ( (req.url.indexOf('/api/key') >= 0) || req.url.indexOf('/api/subscribe') >= 0) {

        return fectch( req );
        
    } else if ( req.clone().method === 'POST' ) {
        //POSTEO de un nuevo mensaje
        //si el navegador soporta tareas asyncronas
        if( self.registration.sync ) {

            return req.clone().text().then(body =>{
    
                //console.log(body);
                const bodyObj = JSON.parse( body );
                return guardarMensaje( bodyObj ); 
    
            });

        } else {

            // tengo q guardar en el indexDB
            return fetch (req);

        }

    }else{

        return fetch( req ).then(res => {
    
            if ( res.ok ) {
                actualizaCacheDinamico( cacheName, req, res.clone() );
                return res.clone();
            } else {
                return caches.match( req );
            }
        }).catch( err => {
            return caches.match(req);
        });

    }


}

