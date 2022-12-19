let num = Array();
let limit = 10;
let i = 0;
let count=0;
for (i = 0; i < limit; i++) {
    num[i] = Math.floor(Math.random() * 100);
    if (num[i]>=10){
        count++;
    }
}
console.log(num);
alert("Mang da tao bao gom: "+num+"va co "+count+"so lon hon 10");