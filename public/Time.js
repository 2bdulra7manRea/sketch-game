


class Time{

static count(){
const timeClock = document.getElementById("time-clock");
    let time=0;
    let key = setInterval(()=>{
        time++;
        timeClock.textContent=time;
        if(time===60){
            clearInterval(key)
            // in case this is host == admin
            // socket.emit("finish-turn")
        }
    }, 1000);

}


static reset(){
    const timeClock = document.getElementById("time-clock");
    timeClock.textContent="0:00"
}

}