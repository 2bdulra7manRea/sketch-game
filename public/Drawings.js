


class Drawings{

#drawingsNames=["pen",'car','sky','spoon','theater','film','clown','phone','hand','flower','glasses','cake','salat'];
#selected=[];
#numOfNames=3;
constructor(){};


getDrawings(){
    const names = this.#generateNames();
    return names;
}

#generateNames(){
    console.log('get_names_random')
    let names=[];
    if(this.#selected.length >= this.#drawingsNames.length){
        this.#selected=[];
    console.log(this.#selected ,"this.#selected is empty:>>>>>>")
    }

    for (let index = 0; index < this.#numOfNames; index++) {
        let randIndex=Math.floor(Math.random()*this.#drawingsNames.length);  
        while (this.#selected.includes(randIndex) && this.#selected.length < this.#drawingsNames.length) {
            console.log(randIndex,'inside while')
            randIndex=Math.floor(Math.random()*this.#drawingsNames.length);
        }
        this.#selected.push(randIndex);
        names.push(this.#drawingsNames[randIndex])      
        console.log(this.#selected);  
    }

    return names;
}


choose(name){
    console.log(name);
    // name => name;
    closeBoxOfNames()
    setTimeout(() => {
    socket.emit("current-player-name",{player:localStorage.getItem("drawer-name"), name:name})
    console.log('[Debug] should close')
    }, 2000);
    // ! closeView()
}



}