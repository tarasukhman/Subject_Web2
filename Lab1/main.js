var shipClass = require('./Ship.js')
var pierClass = require('./Pier.js')
var portClass = require('./Port.js')
var task1 = require('./task1.js')
var task2 = require("./task2.js")
var task3 = require('./task3.js')
var task4 = require('./task4.js')
var task5 = require('./task5.js')
var task6 = require('./task6.js')


console.log('Task1:\n' + task1.string_separate("This is some text") + '\n');
console.log('Task2:\n' + task2.StringSort("programmig") + '\n');
console.log('Task3:\n' + task3.MaxDivisor(28, 28) + '\n');
console.log('Task4:\n' + task4.RandomArrayShuffle([1, 5, 3, 4, 8, 7]) + '\n')
console.log('Task5:\n' + task5.GetDaysInMonth(2, 2020) + '\n');
console.log('Task6:\n')
console.log(task6.User.sort(task6.compare))
console.log('\n');
console.log('Task7:\n')

var ship1 = new shipClass.Ship('ship1', 10, 10)
ship1.AddShip()
var ship2 = new shipClass.Ship('ship2', 20, 10)
ship2.AddShip()

shipClass.Ship.ShowAllShips()
