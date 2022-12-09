let i=10
let f=20.5
let b =true
let s="Hà Nội"

document.write("i=" +i);
document.write("<br/>");
document.write("f=" +f);
document.write("<br/>");
document.write("b=" +b);
document.write("<br/>");
document.write("s=" +s);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");

let dai=prompt("Tính diện tích hình chữ nhật.\n Nhập vào độ dài")
let rong=prompt ("Nhập vào độ rộng")
let dientich=dai*rong
document.write("Diện tích là" +dientich)
alert   ("Diện tích là:" +dientich)

let biena = prompt("Tính số a có phải là bội của b hay không.\nNhập vào số a:")
let bienb = prompt("Nhập vào số b:")
while ((biena == 0 || bienb == 0) || (biena > bienb))
{
    alert(" Số đã nhập không hợp lệ, mời nhập lại.")
    biena = prompt("Nhập vào số a:")
    bienb=prompt("Nhập vào số b:")
}
if (biena % bienb == 0)
{
    alert("A là bội của B")
}
