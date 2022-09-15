function startDrawRect(element) {
    activateButton(element)
    state.type = 'rect'
}
function startDrawCircle(element) {
    activateButton(element)
    state.type = 'circle'
}

function startDrawLine(element) {
    activateButton(element)
    state.type = 'line'
}

function startDrawRect(element) {
    activateButton(element)
    state.type = 'rect'
}

function drawRect(x, y) {
    ctx.beginPath()
    const w = 40;
    const h = 40;
    ctx.rect(x, y, w, h)
    ctx.stroke()
}

function drawingCircle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.stroke();
    ctx.closePath();
}


function clean() {
    let ms = 'clean socket';
    Chat.send(socket, ms)

}


function inputOnChange() {
    ctx.lineWidth = inputRangeWidth.value
    rangeText.textContent = ctx.lineWidth;
}

function activateButton(element) {
    actionBarBtns();
    element.classList.add('active-btn')
}
