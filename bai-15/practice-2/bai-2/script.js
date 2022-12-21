const pi=Math.PI;

function dientich(){
    let r=document.getElementById("num").value;
    document.getElementById("result1").innerHTML=r * r * pi;
}

function chuvi(){
    let r=document.getElementById("num").value;
    document.getElementById("result2").innerHTML=(r * 2) * pi;
}