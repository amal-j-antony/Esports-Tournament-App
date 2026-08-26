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

        socket.on("sendMessage", (data) => {
        console.log(data);
        io.emit('receiveMessage', {
            message: data.message,
            sender: data.sender
        })
    })
    })    

}

module.exports = setupSocket