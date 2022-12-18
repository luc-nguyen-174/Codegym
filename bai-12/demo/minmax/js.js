//

let array= new Array();
function addItem() {
    let i=document.getElementById("txtValue").value;
    let a=array.push(i);
    document.getElementById("alert1").innerHTML="Gia tri " +i+ " da duoc gan vao o thu " + a;
    i++;
    console.log(array);
}

//tim min
function minFind() {
    let max=array[0];
    let index=0;
    for (let x=1; x<array.length; x++) {
        if (array[x]<max) {
            max=array[i];
            index=x;
        }
    }
    document.getElementById("minAlert").innerHTML=max;
}


//tim max
function maxFind() {



}