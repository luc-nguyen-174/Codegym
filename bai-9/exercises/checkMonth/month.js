
function checkMonth()
{
    let month=document.getElementById("month");
    let month1=month.getMonth();
    console.log(month);
    switch (month1) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 8:
        case 9:
        case 11:
            document.getElementById("days").innerHTML = "Tháng"+ month +"có 31 ngày";
        break;
        case 2:
            document.getElementById("days").innerHTML = "Tháng"+ month +"có 28 hoặc 29 ngày";
            break;
        default:
            document.getElementById("days").innerHTML = "Tháng"+ month +"có 30 ngày";
    }
}


//check năm nhuận

// let year = parseInt(prompt("Nhập vào năm:"));
// let isLeapYear = false;
//
// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             isLeapYear = true;
//         }
//     } else {
//         isLeapYear = true;
//     }
// }
//
// if (isLeapYear) {
//     alert("Năm " +year + " là năm nhuận");
// } else {
//     alert("Năm "+year + " không phải là năm nhuận");
// }