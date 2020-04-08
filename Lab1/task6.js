function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
};

var user1 = {
    name: "Taras",
    surname: "Ukhman"
};
var user2 = {
    name: "Sofia",
    surname: "Dron"
};
var user3 = {
    name: "Pavlo",
    surname: "Tymoshchuk"
};

var User = [user1, user2, user3];

module.exports = {
    User: User,
    compare: compare
}
