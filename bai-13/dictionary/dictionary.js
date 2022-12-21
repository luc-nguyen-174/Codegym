let engList =["banana","apple","mango"];
let vietList = ["chuoi","tao","xoai"];

function translateToVn(){
    let input=document.getElementById("txtValue").value;
    for (let i=0;i<engList.length;i++){
        if(input===engList[i]){
            let vi=vietList[i];
            console.log(vi)
            document.getElementById("translation").innerHTML=vi;
        }
    }
}