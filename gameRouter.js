const gameRouter = require('express').Router();
const {v1 :uuidV4 , validate} = require("uuid");



gameRouter.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/game.html")
})


gameRouter.get("/room", (req, res) => {
    res.sendFile(__dirname + '/public/main.html')
})

gameRouter.get('/game-room/:id/room', (req, res) => {
    const id = req.params.id;
    res.sendFile(__dirname + "/public/main.html")
    console.log('display--page')
})


gameRouter.post('/create/room', (req, res) => {
    console.log(req.body);
    res.send(uuidV4())
    // res.sendFile(__dirname+"/public/game.html")
})



module.exports = gameRouter