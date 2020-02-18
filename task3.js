var MaxDivisor = function(num1, num2) {
    let max = 0;
    if (num1 <= 0 || num2 <= 0) {
        return;
    } else {
        let div = 1;
        while (div <= num1 && div <= num2) {
            if (num1 % div == 0 && num2 % div == 0) max = div;
            div++;
        }
    }
    return max;
}

console.log(MaxDivisor(28, 64));