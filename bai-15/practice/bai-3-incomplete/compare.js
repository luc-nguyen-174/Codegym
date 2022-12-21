function compare(a, b) {
    if (a > b){
        alert("So "+a+" nho hon so "+b);
    }
    else {
        let sum=a+b;
        console.log(sum);
    }
}
let a=document.getElementById("num1").value;
let b=document.getElementById("num2").value;
compare(a,b);

