var StringSort = function(str) {
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < str.length - i - 1; j++) {
            if (str[j] > str[j + 1]) {
                var temp = str[j];
                str[j] = str[j + 1];
                str[j + 1] = temp;
            }
        }
    }
    console.log(str);
}


StringSort("programmig");