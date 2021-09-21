const socket = io();

const online = document.querySelector('#online');
const offline = document.querySelector('#offline');
const txt = document.querySelector('#txt-message');
const btn = document.querySelector('#btn-send');

socket.on('connect', () => {
    console.log('conectado')
    offline.style.display = 'none';
    online.style.display = '';    
})

socket.on('disconnect', () => {
    console.log('desconectado')
    offline.style.display = '';
    online.style.display = 'none';
});

// Escucha mensaje desde server
socket.on('message-from-server', (payload) => {
    console.log('message-from-server:', payload)
});

// Envía mensaje desde cliente
btn.addEventListener('click', () => {
    const message = txt.value;
    socket.emit('message-from-client', message, (id) => {
        console.log('id desde el server:', id)
    });
})