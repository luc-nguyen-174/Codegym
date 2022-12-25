class Phone{
    name
    battery
    inbox
    sent
    draft

    constructor(name) {
        this.name = name;
        this.battery = 100;
        this.inbox = [];
        this.sent = [];
        this.draft = "";
    }



    checkStatus(){
        return this.battery>0;
    }

    getBattery(){
        return this.battery;
    }

    charge(){
        this.battery=100;
    }

    //nhan dl o 1 chuoi
    //gan lai vao thu nhap
    writeMessage(message){
        this.draft = message;
    }

//    gui tin nhan
//    dt khac
    sendMessage(dtKhac){
        let thunhap = this.draft;
        //lay thu nhap cua dien thoai nay
        //day vao hop thu den cua dt khac
        dtKhac.inbox.push(thunhap);
        //lay thu nhap cua dt nay
        //day vao hop thu da gui cua dt nay
        this.sent.push(thunhap);
        //xoa thu nhap
        this.draft = "";

    }
}

let dtDoan = new Phone("Doan");
let dtTuan = new Phone("Tuan");