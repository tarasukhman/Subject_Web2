function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

user1 = {
    name: "Taras",
    surname: "Ukhman"
}
user2 = {
    name: "Sofia",
    surname: "Dron"
}
user3 = {
    name: "Pavlo",
    surname: "Tymoshchuk"
}

User = [user1, user2, user3];

console.log(User.sort(compare));