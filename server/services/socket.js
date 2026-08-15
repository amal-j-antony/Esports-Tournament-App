const setupSocket = (io) => {
    io.on('connection', (socket) => {
        console.log('Listening...');
        socket.on("sendMessage", (message) => {
            console.log(message);

        })
        io.emit('test', {
            message: 'sent from server'
        })
    })
}

module.exports = setupSocket