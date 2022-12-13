function moveUp(){
    let element=document.getElementById("nobita");
    element.style.top=parseInt(element.style.top) -10+"px";
}
function moveDown() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 10 + "px";
}
function moveLeft() {
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 10 + "px";
}
function moveRight() {
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 10 + "px";
}

function selectMovetion(evt){
    switch (evt.keyCode) {
        case 37:
            moveLeft();
            break;
        case 39:
            moveRight();
            break;
        case 38:
            moveUp();
            break;
        case 40:
            moveDown();
            break;
    }
}

function docReady() {
    window.addEventListener('keydown',selectMovetion);
}
