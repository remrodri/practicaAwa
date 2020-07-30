 // utilidades para grabar pouchDb/indexDB
 //solo para interacciones con el pouchDB

const db = new PouchDB('mensajes');

function guardarMensaje( mensaje ) {

    mensaje._id = new Date().toISOString();

    return db.put( mensaje ).then(()=>{
        //hacer esto en cuanto haya conexion
        self.registration.sync.register('nuevo-post');

        const newResp = {ok: true, offline: true };

        //console.log('Mensaje guardado para posterior posteo');
        return new Response( JSON.stringify(newResp) );

    });

}

//postear mensajes a la bd
function postearMensajes(){

    const posteos = [];

    return db.allDocs({ include_docs: true }).then( docs =>{

    docs.rows.forEach( row =>{

        const doc = row.doc;
        
        const fetchProm = fetch( 'api',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify( doc )
            }).then(res => {

                return db.remove( doc );

        });

        posteos.push( fetchProm );

    } ); //fin del foreach

    return Promise.all(posteos);

} );

}