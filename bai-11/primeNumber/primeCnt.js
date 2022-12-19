let number = +prompt("Nhập số lượng số nguyên tố: ");
let count = 0;
let n = 2;
let array = [];
while (count < number) {
    let flag = true;
    for (let j = 2; j < n; j ++) {
        if(n % j == 0) {
            flag = false;
            break;
        }
    }
    if(flag) {
        count ++;
        array.push(n)
    }
    n++
}
document.getElementById("result").innerHTML = array;