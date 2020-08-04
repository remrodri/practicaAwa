# Practica PWA

_trabajando aun en la PWA Educativa._

## Comenzando 🚀

para las primeras versiones
_descargar el proyecto e ir a la direccion del proyecto con el CMD y escribir el comando "http-server tambien ya puede revisar el proyecto mediante git_pages"._

para la actual version
_descargar el proyecto y dirigirse a la ubicacion mendiante el uso del CMD y escribir los comandos

* npm install
* npm run deb
._



### Pre-requisitos 📋

_tener instalado Node.js_

## Construido con 🛠️

_herramientas que estoy utilizando_

* [Visual Studio Code](https://code.visualstudio.com/) - como edito de codigo.
* [Node.js](https://nodejs.org/es/) - package manager.
* [Git](https://git-scm.com/) - para manejo de versiones del codigo del proyecto.
* [POSTMAN](https://www.postman.com/) - para testeo de las peticiones get, post.
* [Google Chrome](https://www.google.com/intl/es-419/chrome/) - por las herrmaientas de desarrollo
* [pouchdb](https://pouchdb.com/) - para el manejo de indexDB ya que facilita mucho la codificacion al permitir el uso de callbacks pero especialmente promesas en lugar de codear a fuerza bruta.

* tambien se estan utilizando dependencias que facilitan mucho varias tareas.

## Versionado 📌

Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/remrodri/practicaAwa).

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

la grafica anterior nos dice que deberiamos considerar mantenernos tanto en los mobile como los desktop.
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
se debe servir sobre un protocolo HTTPS porque el service worker(sw) tendra mucho poder sobre nuestras aplicaciones web




