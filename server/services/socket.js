const users = []

const setupSocket = (io) => {
    io.on('connection', (socket) => {
        console.log('Connected...',{
            socketID: socket.id,
            userID: socket.handshake.auth.user
        });
        users.push({
            socketID: socket.id,
            userID: socket.handshake.auth.user
        })
        io.emit('users',users)

        socket.on('disconnect',(reason)=>{
            users.filter(item => item.socketID == socket.id)
            io.emit('users',users)
        })

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