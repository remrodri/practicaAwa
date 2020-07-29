 // utilidades para grabar pouchDb/indexDB
 //solo para interacciones con el pouchDB

const db = new PouchDB('mensajes');

function guardarMensaje( mensaje ) {

    mensaje._id = new Date().toISOString();
    db.put( mensaje ).then(()=>{

        console.log('Mensaje guardado para posterior posteo');

    });

}