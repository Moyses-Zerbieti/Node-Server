const express = require ('express')
const path = require('path')
const server = express()

server.use (express.static(path.join(__dirname, 'Criptografia')))

server.get ('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'Criptografia', 'cripto.html'))

    })
server.listen(8081, function(){
    console.log('Servidor no ar!')
})//localhost:8081