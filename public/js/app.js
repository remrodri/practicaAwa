
var url = window.location.href;
var swLocation = '/educativa/sw.js';
var swReg;


if ( navigator.serviceWorker ) {


    if ( url.includes('localhost') ) {
        swLocation = '/sw.js';
    }

    window.addEventListener('load', function() {
        
        navigator.serviceWorker.register( swLocation )
            .then( function(reg) {

            swReg = reg;
            swReg.pushManager.getSubscription()
                .then( verificaSuscripcion );

            })

    })

}





// Referencias de jQuery

var titulo      = $('#titulo');
var nuevoBtn    = $('#nuevo-btn');
var salirBtn    = $('#salir-btn');
var cancelarBtn = $('#cancel-btn');
var postBtn     = $('#post-btn');
var avatarSel   = $('#seleccion');
var timeline    = $('#timeline');

var modal       = $('#modal');
var modalAvatar = $('#modal-avatar');
var avatarBtns  = $('.seleccion-avatar');
var txtMensaje  = $('#txtMensaje');

var btnActivadas    =$('.btn-noti-activadas');
var btnDesactivadas =$('.btn-noti-desactivadas');

// El usuario, contiene el ID del usuario seleccionado
var usuario;




// ===== Codigo de la aplicacion

function crearMensajeHTML(mensaje, usuario) {

    var content =`
    <li class="animated fadeIn fast">
        <div class="avatar">
            <img src="img/avatars/${ usuario }.jpg">
        </div>
        <div class="bubble-container">
            <div class="bubble">
                <h3>@${ usuario }</h3>
                <br/>
                ${ mensaje }
            </div>
            
            <div class="arrow"></div>
        </div>
    </li>
    `;

    timeline.prepend(content);
    cancelarBtn.click();

}



// Globals
function logIn( ingreso ) {

    if ( ingreso ) {
        nuevoBtn.removeClass('oculto');
        salirBtn.removeClass('oculto');
        timeline.removeClass('oculto');
        avatarSel.addClass('oculto');
        modalAvatar.attr('src', 'img/avatars/' + usuario + '.jpg');
    } else {
        nuevoBtn.addClass('oculto');
        salirBtn.addClass('oculto');
        timeline.addClass('oculto');
        avatarSel.removeClass('oculto');

        titulo.text('Seleccione Personaje');
    
    }

}


// Seleccion de usuario
avatarBtns.on('click', function() {

    usuario = $(this).data('user');

    titulo.text('@' + usuario);

    logIn(true);

});

// Boton de salir
salirBtn.on('click', function() {

    logIn(false);

});

// Boton de nuevo mensaje
nuevoBtn.on('click', function() {

    modal.removeClass('oculto');
    modal.animate({ 
        marginTop: '-=1000px',
        opacity: 1
    }, 200 );

});

// Boton de cancelar mensaje
cancelarBtn.on('click', function() {
    if ( !modal.hasClass('oculto') ) {
        modal.animate({ 
            marginTop: '+=1000px',
            opacity: 0
         }, 200, function() {
             modal.addClass('oculto');
             txtMensaje.val('');
         });
    }
});

// Boton de enviar mensaje
postBtn.on('click', function() {

    var mensaje = txtMensaje.val();
    if ( mensaje.length === 0 ) {
        cancelarBtn.click();
        return;
    }

    var data = {
        mensaje: mensaje,
        user: usuario
    }

    fetch( 'api',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify( data )
    })
    .then( res => res.json() )
    .then( res =>console.log( 'app.js',res ))
    .catch( err => console.log( 'app.js error:', err ) );

    crearMensajeHTML( mensaje, usuario );

});

//obtener mensajes del servidor, consumir mi servicio rest
function getMensajes(){

    fetch('api') //porq corre en el mismo hosting
        .then( res => res.json() )
        .then( posts => {
            console.log(posts);
            posts.forEach( post => 
                crearMensajeHTML(post.mensaje, post.user));

        } );

}

getMensajes();

// Detectar cambios de conexión
function isOnline() {

    if ( navigator.onLine ) {
        // tenemos conexión
        // console.log('online');
        mdtoast('Online', {
            interaction: true,
            interactionTimeout: 1000,
            actionText: 'OK!'
        });


    } else{
        // No tenemos conexión
        mdtoast('Offline', {
            interaction: true,
            actionText: 'OK',
            type: 'warning'
        });
    }

}

window.addEventListener('online', isOnline );
window.addEventListener('offline', isOnline );

isOnline();



// todo sobre las notificaciones para pedir al ususario que me de permiso para enviar notificaciones

function verificaSuscripcion( activadas ) {

    console.log( activadas );

    if( activadas  ) {

        btnActivadas.removeClass('oculto');
        btnDesactivadas.addClass('oculto');

    } else {

        btnActivadas.addClass('oculto');
        btnDesactivadas.removeClass('oculto');

    }
}

//verificaSuscripcion();

function enviarNotificaciones() {

const notificationOptions = {
    
    body: 'Este es el cuerpo de la notificacion',
    icon: 'img/icons/icon-72x72.png'

}
    const n = new Notification('Hola Mundo', notificationOptions);

    n.onclick = () =>{

        console.log('Click');

    }

}

function notificarme() {

    //verifico si el navegador lo soporta
    if (!window.Notification) {

        console.log('Este navegador no soporta notificaciones');
        return;
        
    }
    if (Notification.permission === 'granted') {

        // new Notification('Hola mundo! - granted')        
        enviarNotificaciones()

    } else if (Notification.permission !== 'denied' || Notification.permission==='default' ) {

        Notification.requestPermission(function( permiso ){
            
            console.log(permiso);

            if(permiso === 'granted') {

                // new Notification('Hola Mundo - pregunta');
                enviarNotificaciones();

            }
        });        
    }
}

// notificarme();

//get key

function getPublicKey() {
    // fetch('api/key')
    //     .then(res => res.text())
    //     .then( console.log );

    return fetch('api/key')
        .then(res => res.arrayBuffer())
        //retornar arreglo, pero como un Uint8array
        .then( key => new Uint8Array(key) );
};


//getPublicKey().then( console.log );

btnDesactivadas.on( 'click' , function() {
    if ( !swReg ) return console.log('no hay registro del SW');

    getPublicKey().then( function( key ){

        swReg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: key
        })
        .then( res => res.toJSON())
        .then( suscripcion => {
            
            //console.log(suscripcion);
            //posteo de la suscripcion
            fetch('api/subscribe',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify( suscripcion )
            })
            .then( verificaSuscripcion )
            .catch( console.log );


            //verificaSuscripcion(suscripcion);

        });
    });
}); 