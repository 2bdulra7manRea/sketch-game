const circle = document.querySelector('.circle')
const myCanvas = document.getElementById('mycanvas');
const inputRangeWidth = document.getElementById("lineWidth")
const rangeText = document.getElementById("rangeText")
const actionBar = document.querySelector(".action-bar");
const link = document.querySelector("a")
const ctx = myCanvas.getContext("2d")
const inputColor=document.getElementById("inputColor");

let state = { type: "line" }
ctx.lineWidth = 5;
let flag = true

function changeColor(){
  console.log(inputColor.value)
ctx.strokeStyle=inputColor.value;

}


socket.emit("player-join",{name:localStorage.getItem("drawer-name"),points:0})



function mouseDown() {
  myCanvas.addEventListener("mousemove", mousemove, true)
};

function mousemove(ev) {
  const { offsetX, offsetY } = ev
  socket.emit("start-draw",{state:state , offsetX, offsetY });
  return;
}

socket.on("drawing",(data)=>{
state.type=data.state.type;
  const { offsetX, offsetY } = data;
  run(offsetX, offsetY)
})


function mouseUp() {
  myCanvas.removeEventListener("mousemove", mousemove, true)
  stopDrawLine()

}

function actionBarBtns() {

  actionBar.childNodes.forEach((node) => {

    if (node.classList) {

      node.classList.remove('active-btn')

    }




  })


}


function printImage() {
  link.href = myCanvas.toDataURL();
  link.click();
}

window.addEventListener('contextmenu', (event) => {
  event.preventDefault()
})



function handleMouse(ev) {
  const { offsetX, offsetY } = ev;
  run(offsetX, offsetY)
}


function calculateRedius() {
  return 40;
}


function drawing(x, y) {

  switch (state.type) {
    case "line":
      drawLine(x, y)
      break;
    default:
      break;
  }
}


function run(x, y) {
  moveCircleSpan(x, y)
  drawing(x, y)
}



function moveCircleSpan(x, y) {
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
}


function drawLine(x, y) {
  if (flag) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    flag = false
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }


}

function stopDrawLine() {
  socket.emit("stop-line",{flag:true})
  ctx.closePath()
  flag = true
}


socket.on("stop-line",(data)=>{
  if(data.flag){
    ctx.closePath()
    flag = true
  }
})


