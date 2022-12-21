//neu la so duong tra ve 1, nguoc lai tra ve -1

function checkNum(num) {
    let positive = Math.sign(num);
    console.log(positive);
}

function dislay() {
    if (checkNum() === 1) {
        return true;
    } else if (checkNum() === 0) {
        document.write("Số 0 không phải số nguyên âm cũng không phải số nguyên dương.")
    } else {
        return false;
    }
}

console.log(dislay());