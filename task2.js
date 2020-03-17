var StringSort = function(str) {
    str = str.split('');
    str.sort();
    res = "";
    for (var i = 0; i < str.length; i++) {
        res += str[i];
    }
    return res;

}

module.exports={StringSort}
