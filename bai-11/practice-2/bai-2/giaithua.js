function factorial() {
    var num = prompt("Nhập vào 1 số bất kì để tính ra giai thừa của số đó");
    var factorialResult = 1;
    for (var i = 1; i <= num; i++) {
        factorialResult *= i;
    }
    document.getElementById("result-2").innerHTML = factorialResult;
}