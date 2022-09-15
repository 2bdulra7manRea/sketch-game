
const drawings = new Drawings();
const players = new Players();



socket.on("player-join",(data)=>{
players.assign(data);
})



socket.on("finish-turn",()=>{
    Turn.finish();
})

    
function chooseName(name){
    console.log(name);
// name => name;
socket.emit("current-player-name",{player:localStorage.getItem("drawer-name"), name:name})
    // ! closeView()
    // SelectionDrawing.close()
}

function startRound(){
    Turn.start(drawings);
}


function startTurn(){
// get players  1 2 3 4 5 

// start turn
// get first player ; appears the names of pictures to draw
// then once he cllicks on it 
// the counter will count 
// after one min
// the name will appears on the public socket
// it takes 30 sec and disappears
// turn finish

}