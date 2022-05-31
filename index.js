const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

io.on('connection', (socket) => {
    socket.on('message', (msg) => {
        io.emit('message', `${socket.id.substring(0,2)} says: ${msg}`);
    });

    socket.on('vote', (vote) => {
        io.emit('vote', vote);

        // io.emit('vote', voteData);
    });
});

server.listen(8088, () => {
    console.log('listening on port 8088');
});