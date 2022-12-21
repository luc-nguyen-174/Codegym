let starName=["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe","Regulus"]
let constellationName=["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major","Leo"]

function indexOf(key){
    for (let i = 0; i <starName.length; i++) {
        if (key == starName[i]) return i;
    }
    return -1;
}

function scanArrs(name){
    let index=indexOf(name)
    if (index == -1){
        document.getElementById("result").innerText="Khong hop le, moi nhap lai"
    }
    else {
        document.getElementById("result").innerHTML="ngoi sao " +starName[index]+" thuoc chom sao" +constellationName[index]
    }
}
