

class Players{

list=[];    

constructor(){}

    assign(data){
        const playersBox = document.querySelector(".players-box")
        this.#remove(playersBox);
        data.forEach((newChild,index)=>{
             this.#create(newChild ,index+1,playersBox)
        })
    }
    

     #remove(playersBox){
        while (playersBox.hasChildNodes()) {
            playersBox.removeChild(playersBox.firstChild);
         }
    }
    

    #create(player ,num,playersBox){
        const div = document.createElement("div");
        div.classList.add("player")
        
        const numDiv = document.createElement("div");
        numDiv.textContent=`#${num}`
        
        
        const divInfo = document.createElement("div");
        const p = document.createElement("p");
        p.textContent=player.name; 
        if(player.name ===localStorage.getItem('drawer-name')){
            p.textContent= player.name + "(YOU)"; 
            p.style.color='blue';
            p.style.fontWeight="bold";
        }
            
        
        const points = document.createElement("p");
        points.textContent=`Points : ${player.points}`;
        divInfo.appendChild(p);
        divInfo.appendChild(points);
        
        
        
        const profileDiv = document.createElement("div");
        
        div.appendChild(numDiv);
        div.appendChild(divInfo);
        div.appendChild(profileDiv);
        
        playersBox.appendChild(div)
        }




}