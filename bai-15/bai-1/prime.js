function primeCheck(number) {
    let isPrime = true;

    if ((number == 0) || (number == 1)) {
        isPrime= false;
    } else
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    if (isPrime) {
        document.getElementById("dislay").innerHTML = "Số " + number + " là số nguyên tố"
    } else {
        document.getElementById("dislay").innerHTML = "Số " + number + " không phải là số nguyên tố"
    }
}