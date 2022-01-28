const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

//Definindo view
app.set("view engine","ejs")

//Rotas
app.get("/",(req,res)=>{
    res.render("index")
})

//Socket.io
io.on("connection",socket=>{
    socket.on("disconnect",()=>{
        console.log(socket.id + " desconectou")
    })
})

//Listando servidor no ar
http.listen(3000,()=>{
    console.log("App no ar")
})