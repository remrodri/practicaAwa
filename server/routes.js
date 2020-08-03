// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();

const mensajes = [
  {
    _id: 'XX',
    user: 'spiderman',
    mensaje:'hola mundo'
  }
];

// Get mensajes
router.get('/', function (req, res) {
  //res.json('Obteniendo mensajes');
  res.json( mensajes );
});

// Post de un mensaje
router.post('/', function (req, res) {
  
  const mensaje = {
    mensaje: req.body.mensaje,
    user: req.body.user
  };

mensajes.push( mensaje );

console.log( mensajes );

  res.json({
    ok: true,
    mensaje
  });
});

//almacenar la suscripcion almacena subscripciones de los clientes
router.post('/subscribe',(req, res) => {

  res.json('subscribe');

});

//obtener el key publico /mandarle la key publica
router.get('/key',(req, res) => {

res.json('key publico');

});

//enviar una notificacion push a las personas 
//que nosotros querramos
router.get('/push', (req, res) => {

  res.json('key publico');

});


module.exports = router;