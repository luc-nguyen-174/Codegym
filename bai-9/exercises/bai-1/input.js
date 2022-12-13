function bmi() {
    let weight = document.getElementById("canNang").value;
    let height = document.getElementById("chieuCao").value;
    let bmi = weight / (height * height);
    if (bmi < 18)
        alert("Thiếu cân")
    else if (bmi < 25)
        alert("Bình thường")
    else if (bmi < 30)
        alert("Thừa cân")
    else
        alert("Béo phì")
}


