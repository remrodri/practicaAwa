// Routes.js - Módulo de rutas
const express = require('express');
const router = express.Router();
const push = require('./push');

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

  const suscripcion = req.body;
  console.log( suscripcion );
  
  res.json('subscribe');

});

//obtener el key publico /mandarle la key publica
router.get('/key',(req, res) => {

  const key = push.getKey();
  res.send(key);
  
  

});

//enviar una notificacion push a las personas 
//que nosotros queramos
router.get('/push', (req, res) => {

  res.json('key publico');

});


module.exports = router;