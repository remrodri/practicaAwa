# Practica PWA

_trabajando aun en la PWA Educativa._


### Pre-requisitos 📋

_tener instalado Node.js_

## Comenzando 🚀

PARA LA ULTIMA VERSION
_descargar el proyecto y dirigirse a la ubicacion mendiante el uso del CMD y escribir los comandos: ._

* npm install
* npm run dev
_en el buscador entrar escribiendo._

* http://localhost:3000/

para las primeras versiones
_descargar el proyecto e ir a la direccion del proyecto con el CMD y escribir el comando "http-server" escribiendo en el navegador localhost:8080._

## Construido con 🛠️

_herramientas que estoy utilizando_

* [Visual Studio Code](https://code.visualstudio.com/) - como edito de codigo.
* [Node.js](https://nodejs.org/es/) - package manager.
* [Git](https://git-scm.com/) - para manejo de versiones del codigo del proyecto.
* [POSTMAN](https://www.postman.com/) - para testeo de las peticiones get, post.
* [Google Chrome](https://www.google.com/intl/es-419/chrome/) - por las herrmaientas de desarrollador
* [pouchdb](https://pouchdb.com/) - para el manejo de indexDB ya que facilita mucho la codificacion al permitir el uso de callbacks pero especialmente promesas en lugar de codear a fuerza bruta.
* tambien se estan utilizando dependencias que facilitan mucho varias tareas.
* [body-parser](https://www.npmjs.com/package/body-parser) - es lo que permite a Express leer el cuerpo y luego analizarlo en un objeto Json que podamos entender.
* [express.js](https://expressjs.com/es/) - Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.
* [web-push](https://www.npmjs.com/package/web-push) - generador de VAPID keys es un juego de llaves que nos a servir para poder enviar notificaciones push.
* [urlsafe-base64](https://www.npmjs.com/package/urlsafe-base64) - se utlizo para mara mantener seguras las llaves publicas utilizadas para las notificaciones push.
* [nodemon](https://www.npmjs.com/package/nodemon) - nodemon es una herramienta que ayuda a desarrollar aplicaciones basadas en node.js reiniciando automáticamente la aplicación de node cuando se detectan cambios de archivo en el directorio.
## Versionado 📌

Para todas las versiones disponibles, los [tags en este repositorio](https://github.com/remrodri/practicaAwa).

## Integrantes del grupo ✒️

_Rembert Rodrigo Tucuman alarcon_

* **Rembert Rodrigo Tucuman Alarcon** - *Proyecto* - 
[remrodri](https://github.com/remrodri) 

## Problemas y Soluciones planteadas durante el desarrollo del proyecto 📄

### Antes un poco sobre las PWA
### Que es una pwa
Es una aplicacion web tambien una pagina web que progresivamente va implementando caracteristicas como push notifications. 
una ubicacion en el homescreen del celular que seria indiferenciable con plicaciones nativas.
funciona sin conexion a internet
usa caracteristicas nativas del dispositivo
se actualiza constantemente
es atractivas para los usarios es confiable
pesa muy poco
y es rapida a la hora de cargar
una PWA bien hecha puede llegar a ser indiferenciable de una aplicacion movil nativa

### De todas las demas caracteristicas sobresalen 3
* Puede cargar mas rapido
* Es confiable
* Esta actualizada

se menciona lo anterior por que una aplicacion movil 
necesita un gestor para mantener la aplicacion actualizada normalmente y ademas puede el usuario puede o no elegir recibir actualizacion lo cual estara sujeto a las caracteristicas del celular (RAM, ROM, Procesador,etc) por esa razon una cantidad de los usuarios eligen no actualizar sus aplicaciones cuando se pide permiso para mantener actualizada un App movil. 
para ese caso las PWA no necesitan pedir permiso al usario para realizar actualizaciones o no porque las equivalentes del las App moviles en PWA seran por lo general MAS LIVIANAS

### Por que construir una PWA?

[cada vez mas suben los porcentajes de uso de moviles para la navegacion web, aunque los desktop siguen manteniendose a un bien porcentaje](https://gs.statcounter.com/platform-market-share/desktop-mobile/worldwide/#monthly-201907-202007-bar)

la grafica del link anterior nos dice que deberiamos considerar mantenernos tanto en los mobile como los desktop.
si bien ayuda el concepto de responsive una PWA no es solo eso(hay que tener muy en cuanta).

### Las PWA son la evolucion de los sitios o aplicaciones web.

### Cual es la estructura de una PWA

* Service Worker 
* Manifest
* IndexDB
* Push Server

- service worker y manifest son los principales elementos para convertirse a una PWA
- indexDB nos permitira hacer posteos o grabar informacion en base de datos aunque el usario no tenga conexion a internet 
- Push Server nos permitira enviar notificaciones push a nuestro usuarios

### Consideraciones sobre el sw
se debe servir sobre un protocolo HTTPS porque el Service Worker(sw) tendra mucho poder sobre nuestras aplicaciones web o en localhost
corre en el background en un hilo independiente a la Web App

## registro de problemas y soluciones en el desarrollo del proyecto

### promesas en lugar de callbacks por el problema de callbacksHell es decir evitar escribir demasiado codigo para tareas simples tambien usar caracteristicas ECMA script 6
practica de promesas el uso de PWA's usa todo el tiempo promesas mediante el uso de funciones lambda o funciones anonimas

### fetch API en lugar XMLHttpRequest para hacer peticiones por su simplicidad
fetch API son la mejor opcion para trabajar con peticiones por su simplicidad en la implementacion
se utilizo por las funcion 'response.clone' para clonar peticiones
y tambien mayor simplicidad en el manejo de errores
se hizo varias pruebas cambiando la estructura del index.html y agregando caracteristicas css

### se debe revisar en la pagina de 'Can I use' la compatibilidad del SW(service worker) con los navegadores, es soportado en casi todos
[para consultar click aqui](https://caniuse.com/#search=service%20worker)

### listeners mas utilizados en el SW (SW en un gran conjunto de listeners)
* install
* activate
* event.waitUntil();
* Fetch
* Sync
* Push

### estrategias del cache que pueden utilizarse segun la necesidad
[prueba de compatibilidad con los navegadores](https://caniuse.com/#search=cache) - aceptado al 92.97%

no hay una sola esttrategia para todas las paginas web / aplicacion web
* estrategia Cache Only - trabaja con solo los recursos alamacenados en la cache y nunca regresa a la web.

* estrategia Cache with network fallback - intenta buscar el recurso en el cache y sino busca en la web y lo guarda en la cache por si es requerido en el futuro

* estrategia Cache Dinamico - para evitar las mezcla de tipos de cache se divide la cache segun la necesidad, en el proyecto se utiliza la:
 _cache Static que contiene la App sehll para contener los recursos de la pagina web/aplicacion._
 _cache Dinamica que contiene recursos que variaran con el tiempo._
 _cache Inmutable que contiene recursos de terceros como librerias y demas que no cambiaran._

 * estrategia network with cache fallback - primero ir a la web intentar obtener el recurso y si lo obtiene que lo muestre y en caso de que no se encuentre que busque recien en la cache

 * estrategia cache with Network Update  - muy util cuando el rendimiento es critico, cuando necesitas que nuestra aplicacion aparezca lo mas anter posible para que el usuario sienta que esta trabajando en una aplicacion nativa pero la actualizacion estara una version atras de la version que esta en la web hasta q el usuario actualize la pagina

 * estrategia cache and network Race - una competencia para ver cual de los dos responde primero si el cache o la red, aplicado a casos en los que el usuario tiene un telefono lento pero con una velocidad de internet lenta de esta manera se brindara al usuario la velocidad mas rapida de respuesta en las peticiones

### manejo del despliegue a otros dispositivos
se utilizo la caracteristica de github pages para visualizar en la web la aplicacion y realizar pruebas pero se encontro un problema en el despliegue en dispositivos IOS que tienen NOTCH en la pantalla en las versiones de IPHONE X en adelante
[aqui se encontro la posible solucion a aplicar](https://medium.com/appscope/designing-native-like-progressive-web-apps-for-ios-1b3cdda1d0e8)

### para saber si la PWA que se esta desarrollando esta correcta es decir cumple con las caracteristicas de una PWA puede utilizarse la herramienta LIGHTHOUSE en las herramientas de desaarrollador.

### IndexDB tiene mucho codigo para codear en  el caso de usar javaScript puro ademas q las llamadas de algunas funciones no concuerdan con las convenciones de mantener la primera letra de la  primera palabra en minuscula y las demas que comiencen con Mayusculas y eso me causaron problemas al buscar los errores que me aparecian luego de revisar la documentacion encontre la solucion. debido a esto se cambia al uso de pouchDB para la gestion del indexDB por su uso basado en promesas  como muestra en su documentacion en callbacks tendremos la posibildad de cambiarlo a solo uso mediante promesas 










