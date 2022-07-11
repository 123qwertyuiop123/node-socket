const express = require('express')
const app = express()
const port = 3000
const http = require('http');
const server = http.createServer(app);
// const cors = require('cors')

// 解决跨域问题
// app.use(cors())

const { Server } = require("socket.io");
// 引入socket并监听端口
const io = new Server(server, {
    cors: {
        origin: '*'
    }
});
io.listen(3002)

// 使用
io.on('connection', (socket) => {
    socket.on('message', (msg) => {
        io.emit('message', msg);
    });
    socket.on('image', (msg) => {
        io.emit('image', msg);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})