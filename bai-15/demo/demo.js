let ta= ["one", "two", "three"];
let tv= ["mot", "hai", "ba"];
function indexOf(key){
    for (let i = 0; i < ta.length; i++) {
        if (key == ta[i]) return i;
    }
    return -1;
}

function translate1(word) {
    let index = indexOf(word);
    if (index==-1){
        document.getElementById("result").innerText
            = "Moi ban nhap lai tu nay khong co trong tu dien cua chung toi";
    }
    else {
        document.getElementById("result").innerText
            = tv[index];
    }
}