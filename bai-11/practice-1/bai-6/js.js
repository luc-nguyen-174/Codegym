let start=1;
let n=parseInt(prompt("Nhập vào số lượng các số cần tính:"));
let count=0;
let sum=0;
while(count<n){
    if (start%7 ==0){
        count++;
        sum+=start;
    }
    start++;
}
document.write("Tổng các số chia hết cho 7 từ 0 đến "+start+" là "+sum)