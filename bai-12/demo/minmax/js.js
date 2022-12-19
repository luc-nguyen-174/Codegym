let array = Array();
let i=0;
function addItem() {
    array[i] = parseInt(document.getElementById("txtValue").value);
    document.getElementById("alert1").innerHTML = "Gia tri " + array[i] + " da duoc gan vao vi tri " + i;
    i++;
    console.log(array);
}

//tim min
function minFind() {
    let min = array[0];
    let index = 0;
    for (let x = 1; x < array.length; x++) {
        if (array[x] < min) {
            min = array[i];
            index = x;
        }
    }
    document.getElementById("minAlert").innerHTML = ("gia tri thap nhat trong mang da nhap la:"+min+"tai vi tri"+index);
}


//tim max
function maxFind() {
    let max = array[0];
    let index1 = 0;
    for (let y = 1; y < array.length; y++) {
        if (array[y] > max) {
            max = array[i];
            index1 = y;
        }
    }document.getElementById("maxAlert").innerHTML = ("gia tri cao nhat trong mang da nhap la:"+max+"tai vi tri"+index1);
}

function keyMap(evt) {
    switch (evt.keyCode){
        case 13:
            addItem();
            break;
    }
}
//
// function docReady() {
//     window.addEventListener("keydown", keyMap(event));
// }