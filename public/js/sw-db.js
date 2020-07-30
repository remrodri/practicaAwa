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