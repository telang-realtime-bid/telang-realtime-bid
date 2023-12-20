if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes')
const PORT = process.env.PORT || 3000

const { createServer } = require('node:http');
const { Server } = require('socket.io');

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
})

let onlineUsers = []
io.on('connection', (socket) => {
    console.log("email is", socket.handshake.auth.email);
    console.log('user connected', socket.id);
    onlineUsers.push({
        socketId: socket.id,
        email: socket.handshake.auth.email,
    });
    io.emit('users:online', onlineUsers);

    socket.on("message:new", (message) => {
        io.emit("message:update", {
            form: socket.handshake.auth.email,message
        })
    })

    socket.on('disconnect', () => {
        onlineUsers = onlineUsers.filter(u => {
            return u.socketId !== socket.id
        })
    })
});


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})