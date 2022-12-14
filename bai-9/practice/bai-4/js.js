let a=parseInt(prompt("Nhap a"));
let b=parseInt(prompt("Nhap b"));
let c=parseInt(prompt("Nhap c"));
let max=a;
if (max<b){
    max=b;
    if (max<c){
        max=c;
    }
}
document.write(max)