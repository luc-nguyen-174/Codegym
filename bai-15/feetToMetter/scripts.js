function feetToMeter(feet) {
    document.getElementById("change").innerHTML = (feet + " feet = " + feet * 0.3048 + "meters");
}


function meterToFeet(meter) {
    document.getElementById("change").innerHTML = meter + " meters = " + meter * 3.2808399 + "feet"
}
