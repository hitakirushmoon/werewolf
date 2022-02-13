const http = require('http')
const express = require('express')

const app = express()

app.use(express.static(`${__dirname}/../client`))

const server = http.createServer(app)

server.on('error', (err) => {
    console.error(err)
})
server.listen(process.env.PORT, () => {
    console.log("yay server is ready \\o/")
})
const io = require('socket.io')
