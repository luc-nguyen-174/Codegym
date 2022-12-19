let numberArr = Array();
let limit = 10;
let i = 0;

function makeRandomArray() {
    for (let i = 0; i < limit; i++) {
        numberArr[i] = Math.floor(Math.random() * ((i + 1) * 100)); //khoi tao mang chua 10 so nguyen khac nhau
    }
    console.log(numberArr);
    document.getElementById("randomArray").innerHTML = "Mang da tao bao gom: " + numberArr;
}

function findMax() {
    let max = 0;
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] > max) {
            max = numberArr[i];
            index = i;
        }
    }
    document.getElementById("dislay").innerHTML = "So lon nhat trong mang la: " + max + " tia vi tri " + index;
    console.log(max);
}

function averageCount() {
    let averageCount=0;

}