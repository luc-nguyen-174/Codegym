//class Ten lop {ds thuoc tinh va pt}
//khai bao lop
class Temperature{
    //ds thuoc tinh
    // doC;
    constructor(doC) {
        this.doC = doC;
    }
    //ds phuong thuc
    convertCtoF(){
        let doF = this.doC * 9/5 + 32;
        return doF;
    }

    convertCtoK(){
        let doK = this.doC + 273.15;
        return doK;
    }

}
//khoi tao doi tuong
let d1 = new Temperature(25);
// truy xuat phuong thuc cua doi tuong
console.log(d1.convertCtoK())
console.log(d1.convertCtoF())
