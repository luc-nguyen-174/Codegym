let inputWeight=prompt("Nhập vào chiều rộng")
let inputHeight=prompt("Nhập vào chiều cao")
let weight= parseInt(inputWeight)
let height= parseInt(inputHeight)
while (height<0||weight<0)
{
alert("Số không hợp lệ, nhập lại!!!")
    inputWeight=prompt("Nhập vào chiều rộng")
    inputHeight=prompt("Nhập vào chiều cao")
}
let dientich=weight*height;
document.write("Diện tích là:"+dientich)