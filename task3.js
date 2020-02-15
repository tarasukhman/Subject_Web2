var Factorial = function(n) {
    if (n == 0) {
        return 1;
    } else if (n == 1) {
        return 1;
    } else {
        return n * Factorial(n - 1);
    }
}
for (var i = 0; i < 6; i++) {
    console.log(i + "!=" + Factorial(i));
}