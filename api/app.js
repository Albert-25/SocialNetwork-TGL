const express = require('express')
const cors = require("cors");
const http = require("http")
const { Server } = require("socket.io")

const router = require("./src/routes/index");
const app = express()
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
    });
app.use(express.json());
app.use(router);

const serverHttp = http.createServer(app)

const io = new Server(serverHttp, {
    cors: {
        origin: "*",// url del frontend 
    }
})

let users = [];

const getUser = (userId) => {
    return users.find(user => user.userId == userId)
}

const addUser = (userId, socketId) => {
    !users.some(user => user.userId == userId) &&
        users.push({ userId, socketId })
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId != socketId)
}

io.on("connection", (socket) => {
    socket.on("addUser", userId => {
        addUser(userId, socket.id)
        io.emit("getUsers", users)
    })
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId)
        user?.socketId && io.to(user.socketId).emit("getMessage", {
            senderId,
            text
        })
    })
    socket.on("disconnect", () => {
        console.log("a user is disconnected ")
        removeUser(socket.id)
        io.emit("getUsers", users)
    })
})

module.exports = serverHttp;