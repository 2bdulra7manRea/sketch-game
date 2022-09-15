

const inputMessage=document.getElementById("msg-input");
const chatBox = document.querySelector(".chat");
const CLASS_NAME_CHAT_MESSAGE="msg-box";
let currentState={name:'' , player:""}
class Chat {
  static eventName='msg';
  static actions={send:'send' , get:'get'}
  
  
  static async send(socket,message){
  
  socket.emit(this.eventName+'-'+this.actions.send, message)
  }
  
  static async getMessage(socket){

  let promise = new Promise((resolve,reject)=>{
  
    socket.on(this.eventName+'-'+this.actions.get,(data)=>{
      resolve(data)
  })
  });
  
  
  return promise
  }  
  }



socket.on("current-player-name",(data)=>{

const {name , player}=data;
currentState.name=name;
currentState.player=player
})



socket.on(Chat.eventName+'-'+Chat.actions.get,(data)=>{
  createMessageBox(data.message,data.profile)
})


function getUserProfile(){

    return localStorage.getItem("drawer-name");
}



function createMessageBox(text,profile){
const div = document.createElement("div");
div.classList.add(CLASS_NAME_CHAT_MESSAGE);
const p = document.createElement("p");
if(!!currentState.name && currentState.name===text){
  // this message win ;
  p.textContent="Guessed Word ! ";
  p.style.color="greenyellow";
  p.style.fontWeight="bold"

}else{
  p.textContent=text;
}
const divProfile= document.createElement("div");
divProfile.textContent=profile

if(profile===localStorage.getItem('drawer-name')){
const span = document.createElement("span");
span.textContent="You";
divProfile.appendChild(span);
}



div.appendChild(divProfile);
div.appendChild(p);
chatBox.appendChild(div);
}


function sendMessageBtn(){
if(!!inputMessage.value && inputMessage.value!==""){
    const msg ={message:inputMessage.value , profile:getUserProfile()}
socket.emit(Chat.eventName+'-'+Chat.actions.send,msg)
inputMessage.value="";
}

}