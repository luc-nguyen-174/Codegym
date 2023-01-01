function checkYearOld() {
    let tuoi= document.getElementById("y-old").value;
        if (tuoi>14) {
            document.getElementById("results").innerHTML="Du tuoi hoc lop 10";
        }else
            document.getElementById("results").innerHTML=tuoi+" "+"thi chua du tuoi hoc lop 10.";

}