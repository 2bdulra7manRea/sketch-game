const userINput = document.getElementById("user-name");


function joinNewUser(){
const name = userINput.value;

localStorage.setItem("drawer-name",name)

console.log('stored');
}


async function createRoom(){
const adminInput = document.getElementById("admin-name");
localStorage.setItem("drawer-name",adminInput.value)
const res= await sendRequest("POST",'create/room',adminInput.value);

console.log(res);
const res1= await sendRequest("GET","/game-room/"+res)
console.log(res1);
let path =`/game-room/${res}/room`
window.location.replace((path));
}


function sendRequest(method,url,adminInput){
let promise = new Promise((resolve,reject)=>{
    const ajex= new XMLHttpRequest();
    ajex.open(method,url)
    ajex.setRequestHeader("Content-type","application/json")
    ajex.send({adminName:adminInput});
    ajex.onload=(ev)=>{
        resolve(ajex.responseText)
    }
})

return promise
}

