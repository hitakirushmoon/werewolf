const http = require('http')
const express = require('express')
const socketio = require('socket.io')


const app = express()

app.use(express.static(`${__dirname}/../client`))

const server = http.createServer(app)
const io = socketio(server);

server.on('error', (err) => {
    console.error(err)
})
server.listen(process.env.PORT, () => {
    console.log("yay server is ready \\o/")
})

