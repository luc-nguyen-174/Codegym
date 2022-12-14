let num=prompt("Nhap vao n:")
if (num<=0) {
    alert("So khong hop le, nhap lai:")
}
let total=0;
let i=0;
for(;i<=num;i+=1)
{
    total+=i;
}
alert(total)