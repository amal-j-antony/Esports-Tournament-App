const setupSocket = (io) => {
    io.on('connection', (socket) => {
        console.log('Connected...',socket.id);

        socket.on("sendMessage", (message) => {
        console.log(message);
        io.emit('test1', {
            message: 'sent from server',
            sender: 'server'
        })
    })
    })    

}

module.exports = setupSocket