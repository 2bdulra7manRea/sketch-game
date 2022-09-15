
/*

--------------------------------------

checking for player by the name in current players array

--------------------------------------

*/

const checkForPlayer = (players, player) => {
    const index = players.findIndex((pl) => {
        return pl.name === player.name
    })
    return index >= 0 ? true : false
}

/*
---------------------------------------

start to connect to client side

send and recieve chat messages

send and recieve drawing actions

---------------------------------------
*/


const startSocketConnecting = (socket, players) => {


    socket.on("connection", (client) => {
        console.log('connected ! socket')

        client.on('player-join', (playerData) => {
            if (!checkForPlayer(players, playerData)) {
                players.push(playerData);
            }
            socket.emit('player-join', players)
        })


        client.on('msg-send', (data) => {

            socket.emit('msg-get', data)

        })



        client.on('finish-turn', (data) => {

            socket.emit('finish-turn', data)

        })



        client.on('current-player-name', (data) => {

            socket.emit('current-player-name', data)

        })


        client.on('stop-line', (data) => {

            socket.emit('stop-line', data)

        })



        client.on('start-draw', (data) => {

            socket.emit('drawing', data)

        })


    })


}



module.exports = { startSocketConnecting }