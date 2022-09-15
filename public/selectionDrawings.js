
class SelectionDrawing{


static open(drawings){
    const view_turn=document.querySelector(".view-turn") 
        view_turn.style.display='block'
    SelectionButtons.diplay(drawings);
};


static close(){
    const view_turn=document.querySelector(".view-turn") 
    SelectionButtons.disappear();
    view_turn.style.display='none'
}







}