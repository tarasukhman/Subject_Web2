var string_separate = function(str) {
    var array = [];
    var word = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            word += str[i];
        }
        if (str[i] == ' ') {
            array.push(word);
            word = '';
        }
    }
    return array;
}

console.log(string_separate("hello i am taras"));