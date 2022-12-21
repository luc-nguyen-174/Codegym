let arrs = []

function makeRandomArray() {
    for (let i = 0; i < 3; i++) {
        arrs[i] = Math.floor(Math.random() * ((i + 1) * 100)); //khoi tao mang chua 10 so nguyen khac nhau
    }
    console.log(arrs);
    document.getElementById("dislay").innerHTML = "Mang da khoi tao la: " + arrs.join();
}

function findMin() {
    let min = arrs[0];
    for (let i = 0; i < arrs.length; i++) {
        if (arrs[i] < min) {
            min = arrs[i];
        }
    }
    document.getElementById("result").innerHTML = "Gia tri thap nhat trong chuoi la: " + min
}