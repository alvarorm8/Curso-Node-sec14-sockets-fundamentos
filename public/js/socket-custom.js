var socket = io(); //funcion dentro de la librería importada, trabaja casi igual al objeto io del backend
socket.on('connect', function() { //esto hace que se conecte entre el frontend y el backend, en caso de que no se pueda conectar pq el backend esté caído (quitamos el nodemon), 
    //se intenta conectar un cierto número de veces hasta que lo logra o hasta que ya no lo intenta más
    console.log('Conectado al servidor');
});
// Escuchar: on
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor'); //si la conexión falla o se interrumpe, aparece el mensaje en la consola del navegador
});
// Enviar información: emit
// Enviamos información al servidor, en el backend (server.js) se debe escuchar el mensaje. El tercer argumento es un callback para trabajar en server.js
socket.emit('enviarMensaje', {
    usuario: 'Alvaro',
    mensaje: 'Hola mundo'
}, function(resp) {
    //console.log('Se disparó el callback');
    console.log('Respuesta server: ', resp);
});
// Escuchar información emitida desde el servidor (backend)
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
})