

function closeBoxOfNames(){
    const view_turn=document.querySelector(".view-turn") 
    const btnView=document.querySelector(".view-btn");   
    while (btnView.hasChildNodes()) {
        btnView.removeChild(btnView.firstChild)
}
    view_turn.style.display='none'
}


// still developing::

/*

1- calculating points
2- finishs the turn and round
3- winners

*/