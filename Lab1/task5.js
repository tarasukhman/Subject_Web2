var GetDaysInMonth = function(month, year) {
    return new Date(year, month, 0).getDate();
}

console.log(GetDaysInMonth(2, 2020));