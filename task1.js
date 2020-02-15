var string_separate = function(str) {
    var array = [];
    var word = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            word += str[i];
        }
        if (str[i] == ' ' || i == str.length - 1) {
            array.push(word);
            word = '';
        }
    }
    return array;
}

console.log(string_separate("This is some text"));