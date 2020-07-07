const { io } = require('../server');

//Para comprobar que la configuración del socket está bien en la dirección http://localhost:3000 si ponemos http://localhost:3000/socket.io/socket.io.js y se ve
//el archivo de la librería está bien configurado
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', { //enviamos información al front, en el front (index.html) hay que escucharlo
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado'); //al cerrar la ventana del navegador aparece el mensaje en consola
    });

    //Escuchar el cliente 
    //Escuchamos el mensaje enviado por el frontend
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data); //envia el mensaje a todo el mundo que este conectado a la aplicación, si hay varios usuarios, aparece en todos el mensaje
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIÓ BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIÓ MAL'
        //     });
        // }
    });
});