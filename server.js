const express = require('express');
const app = express()
const http = require('http');
const serverHttp = http.createServer(app)
const {Server} = require("socket.io");
const socket = new Server(serverHttp,{cors:{origin:"*"},transports:["websocket"]})
const gameRouter = require('./gameRouter');
const { startSocketConnecting } = require('./socketConnection');
const players=[];

/*

open the game page
login with new name to create page

*/


const port = process.env.PORT || 3000

serverHttp.listen(port);


// socket connection

startSocketConnecting(socket,players)



// statics 

app.use(express.static('public'))



// API routes

app.use(gameRouter);