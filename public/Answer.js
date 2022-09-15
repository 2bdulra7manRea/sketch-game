


class Answer{




static show(){
const showAnswer= document.querySelector(".show-answer")
showAnswer.style.display="block";
const textAnswer=document.getElementById("text-answer");
textAnswer.textContent=currentState.name;
setTimeout(() => {
    this.disappear(showAnswer);
}, 1000*10);
};


static disappear(showAnswer){
    showAnswer.style.display="none"
};




}