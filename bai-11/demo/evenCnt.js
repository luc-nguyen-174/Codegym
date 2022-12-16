let evenCount=prompt("Nhập vào số lượng số chẵn cần in ra.");
let n=(evenCount*2)
for (let i=1; i<=n;i++) {
    if (i%2===0) {
        document.write(i+" ");
    }
}