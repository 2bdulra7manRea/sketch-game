


class SelectionButtons{



static createButton(content,btnBox,callback){
const btn = document.createElement("button");
btn.textContent=content;
btn.addEventListener("click",()=>callback(content))
btnBox.appendChild(btn);
}


static diplay(drawingsNames){
    const btnView=document.querySelector(".view-btn"); 
    const namesArray=drawingsNames.getDrawings();   
    namesArray.forEach((nameDraw)=>{
        this.createButton(nameDraw,btnView,drawingsNames.choose);
    })
};




static disappear(){
    const btnView=document.querySelector(".view-btn");   
    while (btnView.hasChildNodes()) {
        btnView.removeChild(btnView.firstChild)
}


}













}