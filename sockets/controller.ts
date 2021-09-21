import * as socketIO from 'socket.io';

export const socketController = (socket: socketIO.Socket) => {

    console.log('client connected', socket.id);

    socket.on('disconnect', () => {
        console.log('client disconnected', socket.id);
    });

    // Escucha mensajes desde el cliente
    socket.on('message-from-client', (payload, callback) => {
        //console.log('mensaje recibido desde el cliente:', payload);

        const id = 123;
        // Con el callback se devuelve su argumento solo al cliente de origen
        callback(id);


        // Envía el mensaje a TODOS los clientes
        socket.broadcast.emit('message-from-server', payload);
    });

};