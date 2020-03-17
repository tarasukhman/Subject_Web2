var shipClass = require('./Ship.js')
var pierClass = require('./Pier.js')
var portClass = require('./Port.js')

var ship1 = new shipClass.Ship('ship1', 10, 10)
ship1.AddShip()
var ship2 = new shipClass.Ship('ship2', 20, 10)
ship2.AddShip()

shipClass.Ship.ShowAllShips()