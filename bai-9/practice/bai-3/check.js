let x=parseInt(prompt("Nhập vào số nguyên bất kì"))
let x1=Math.sign(x);
switch (x1) {
    case -1:
        document.getElementById("results").innerHTML=("Nho hon 0");
        break;
        case 1:
            document.getElementById("results").innerHTML=("Lon hon 1");
            break;
}

