const express = require('express');
const pug = require('pug');
const path = require('path');
const mongoose = require("mongoose");
const {Port} = require("./models/port");
const {Ship} = require("./models/ship");
const {Pier} = require("./models/pier");

const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded());
const url = "mongodb://localhost:27017/seaport";


const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.use(express.json());
app.use(express.urlencoded());


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'static', 'views'));

// class Port {
//     constructor(name, country, EDP, address, pier) {
//         this.name = name;
//         this.country = country;
//         this.EDP = EDP;
//         this.address = address;
//         this.pier = pier;
//     }
// }
//
// class Ship {
//     constructor(name, number, country, tonnage, log) {
//         this.name = name;
//         this.number = number;
//         this.country = country;
//         this.tonnage = tonnage;
//         this.log = log;
//     }
// }
//
// class Pier {
//     constructor(name, number, Capacity) {
//         this.name = name;
//         this.number = number;
//         this.Capacity = Capacity;
//     }
// }
//
// class Log {
//     constructor(pier, timeArrival, timeDeparture) {
//         this.pier = pier;
//         this.timeArrival = timeArrival;
//         this.timeDeparture = timeDeparture;
//     }
// }
//
// class ShipOnPier {
//     constructor(ship, pier) {
//         this.ship = ship;
//         this.pier = pier;
//     }
// }


// let ShipOnPiers = [new ShipOnPier([69 ,22], 22), new ShipOnPier([999], 2)]
//
// let ports = [new Port('Maria', 'Germany', 2234, 'Molodizna 2', [22]),
//     new Port('San Via', 'USA', 1124, 'San Francisco 2', []),
//     new Port('Diego', 'Italy', 5647, 'bi polar 2', [])]
//
// let ships = [
//     new Ship('69', 69, 'Germany', 45, [
//             new Log(14, new Date(2019, 12, 30), new Date(2020, 3, 17)),
//                 new Log(22, new Date(2020, 4, 30), new Date(2020, 8, 17))
//             ]),
//
//     new Ship('Biar', 22, 'Urugvai', 12,
//         [
//             new Log(14, new Date(2019, 12, 30), new Date(2020, 3, 17)),
//                 new Log(2, new Date(2020, 4, 30), new Date(2020, 8, 17))
//             ]),
//     new Ship('Hope', 999, "China", 2,
//         [
//             new Log(22, new Date(2017, 12, 30), new Date(2028, 3, 17)),
//                 new Log(2, new Date(2018, 4, 30), new Date(2019, 8, 17))])]
//
// let piers = [new Pier('Morgen', 22, 3), new Pier('Peep', 14, 5),
//     new Pier('Juis', 2, 1)]
// let AllMatherPiers = JSON.stringify(piers)
// AllMatherPiers = JSON.parse(AllMatherPiers)
//
// let allPiers = [];

app.get('/', (req, res) => {

    const myFn = async () => {
        res.render('pages/index')
    };
    myFn()


    // res.render('pages/index', {
    //
    // })
});

app.get('/ships', (req, res) => {
    (async () => {

        // Ship.create({
        //     name: '666',
        //     number: 1,
        //     country: 'Ukraine',
        //     tonnage: 30,
        //     log: [],
        //     osanka: 8
        // })
        //
        // Ship.create({
        //     name: '777',
        //     number: 2,
        //     country: 'USA',
        //     tonnage: 100,
        //     log: [],
        //     osanka: 7
        // })
        //
        // Ship.create({
        //     name: '69',
        //     number: 3,
        //     country: 'Russia',
        //     tonnage: 69,
        //     log: [],
        //     osanka: 9
        // })

        // let arr = ['Бучацький', 'Волошин', 'Дацко', 'Івасів', 'Кіх', 'Комаріда', 'Костецький', 'Лесик', 'Підківка', 'Хімяк', 'Якимець'];
        //
        // let sort = arr.sort(((a, b) => a - b));
        // console.log(sort);

        let rest = await Ship.find({})
        res.send(rest)
        // res.render('pages/ships', {dataShip: rest})
    })();
})

app.post('/addShip', (req, res) => {
    let body = req.body;



    (async () => {
        let rest1 = await Ship.find({})

        let chek = rest1.some(value => value.number === +body.number);
        console.log(chek);

        if (chek) {
            let rest = await Ship.find({})
            res.send(rest)
            // res.render('pages/ships', {dataShip: rest, err: 'Перевірте номер'})
        } else {
             Ship.create({
                name: body.name,
                number: body.number,
                country: body.country,
                tonnage: body.tonnage,
                osanka: body.osanka
            })
            let rest = await Ship.find({})
            res.send(rest)
            // res.render('pages/ships', {dataShip: rest})
        }


        rest1 = await Ship.find({})
        res.send(rest1)
        // res.render('pages/ships', {dataShip: rest})
    })();


})

app.post('/editShip/:number', (req, res) => {
    let body = req.body;


    (async () => {

        console.log(body, 33);
        console.log(req.params, 123);
        let rest1 = await Ship.find({})

        let chek = rest1.some(value => value.number === +body.number);
        console.log(chek);

        if (chek) {
            let rest22 = await Ship.findOne({number: req.params.number})
            console.log(rest22);
            let rest = await Ship.find({})
            await Ship.findOneAndUpdate({number: req.params.number}, {$set:{
                    name: body.name,
                    number: rest22.number,
                    country: body.address,
                    tonnage: body.tonnage,
                }
            })
            rest = await Ship.find({})
            res.send(rest)
            // res.render('pages/ships', {dataShip: rest})
        } else {
            await Ship.findOneAndUpdate({number: req.params.number}, {$set:{
                    name: body.name,
                    number: body.number,
                    country: body.address,
                    tonnage: body.tonnage,
                }
            })
            let rest = await Ship.find({})
            res.send(rest)
            // res.render('pages/ships', {dataShip: rest})
        }




        // res.render('pages/ships', {dataShip: rest})
    })();


})

app.delete('/delete/:number', (req, res) => {

    (async () => {

        console.log(req.params);
        await Ship.deleteOne({number: req.params.number});
        let rest = await Ship.find({})
        // res.send(rest)
        // res.render('pages/ships', {dataShip: rest})
    })();

})

app.get('/piers', (req, res) => {

    (async () => {

        // Pier.create({
        //     name: 'Сан марія',
        //     number: 1,
        //     Capacity: 10,
        //     minOsanka: 5,
        //     ships: []
        // })
        // Pier.create({
        //     name: 'Курва',
        //     number: 2,
        //     Capacity: 5,
        //     minOsanka: 30,
        //     ships: []
        // })
        // Pier.create({
        //     name: 'Сан Дієго',
        //     number: 3,
        //     Capacity: 6,
        //     minOsanka: 8,
        //     ships: []
        // })
        let ships = await Ship.find({})
        let rest = await Pier.find({})
        res.send(rest)
        // res.render('pages/piers', {data: rest, ships: ships})
    })();


})

app.post('/addShipToPiers/:edp', (req, res) => {
    let body = req.body;
    (async () => {
        // let index = body.index.split(': ').join().split('.').join().split(',')[1]
        let index = body.number;
        console.log(index);
        let ship = await Ship.findOne({number: index})
        let pier = await Pier.findOne({number: req.params.edp})

        let some = pier.ships.some(value => {
            let one =  `${value._id}`;
            let two = `${ship._id}`;
            return one === two
        })
        console.log(some);
        if(pier.ships.length >= pier.Capacity){
            console.log(22);
            let ships = await Ship.find({})
            let rest = await Pier.find({})
            res.send(rest)
            // res.render('pages/piers', {data: rest, ships: ships})
        }
        else if(ship.osanka > pier.minOsanka && !some) {
            pier.ships.push(ship)
            await Pier.update({number: req.params.edp}, { $push: { ships: ship } })
            await Ship.update({number: index}, { $push: { log: { pier: pier.number, timeArrival: new Date() } } })
            let ships = await Ship.find({})
            let rest = await Pier.find({})
            res.send(rest)
            // res.render('pages/piers', {data: rest, ships: ships})
        } else {
            let ships = await Ship.find({})
            let rest = await Pier.find({})
            res.send(rest)
            // res.render('pages/piers', {data: rest, ships: ships})
        }




    })();
})

app.get('/ports', (req, res) => {

    const myFn = async () => {
        let ports = await Port.find({})
        let rest2 = await Pier.find({})

        // // let freePorts = [];
        // //
        // // ports.filter(value =>{
        // //     for (const value1 of value.piers) {
        // //         for (const pier of rest2) {
        // //             let somePierId = `${pier._id}`
        // //             let secondPier = `${value1._id}`
        // //
        // //             if(secondPier !== somePierId) {
        // //
        // //             }
        // //         }
        // //     }
        // // })
        //
        // console.log(freePorts);
        res.send(ports)
        // res.render('pages/ports', {data: ports, dataPier: rest2})
    };

    myFn()
})

app.post('/addPort', ((req, res) => {
    let body = req.body;
    (async () => {
        console.log(body);
        let rest1 = await Port.find({})

        let chek = rest1.some(value => value.edp === +body.edp);
        console.log(chek);

        if (chek) {
            let rest = await Port.find({})
            let rest2 = await Pier.find({})
            res.send(rest)
            // res.render('pages/ports', {data: rest, err: 'Перевірте номер',dataPier: rest2 })
        } else {
            let edp = +body.edp
            Port.create({
                name: body.name,
                country: body.country,
                edp: edp,
                address: body.address,
                piers: []
            })
            let rest = await Port.find({})
            let rest2 = await Pier.find({})
            res.send(rest)
            // res.render('pages/ports', {data: rest,dataPier: rest2 })
        }

    })();
}))

//Редагування порту в колекції
app.post('/editPort/:edp', (req, res) => {
    let body = req.body;
    (async () => {
        console.log(body);
        let rest1 = await Port.find({})
        console.log(req.params, 123);

        let chek = rest1.some(value => value.edp === +body.edp);
        console.log(chek);

        if (chek) {
            let rest = await Port.find({})
            let rest2 = await Pier.find({})
            res.send(rest)
            // res.render('pages/ports', {data: rest, err: 'Перевірте номер', dataPier: rest2})
        } else {
            let edp = +body.edp
            await Port.findOneAndUpdate({edp: req.params.edp}, {$set:{
                    name: body.name,
                    edp: edp,
                    country: body.country,
                    address: body.address,
                }
            })
            let rest = await Port.find({})
            let rest2 = await Pier.find({})
            res.send(rest)
            // res.render('pages/ports', {data: rest, dataPier: rest2})
        }

    })();

})

//Видалення порту з колекції

app.delete('/deletePort/:edp', (req, res) => {

    (async () => {


        await Port.deleteOne({edp: req.params.edp})
        let rest = await Port.find({})
        let rest2 = await Pier.find({})
        res.send(rest)
        // res.render('pages/ports', {data: rest, err: 'Видалено', dataPier: rest2})
    })();

})

app.post('/addPierToPort/:edp', (req, res) => {

    let body = req.body;
    (async () => {
        // let index = body.indexPier.split(':')[1].split('.')[0]
        let index = body.number;
        console.log(index);
        let pier = await Pier.findOne({number: index})
        let port = await Port.findOne({edp: req.params.edp})

        let some = port.piers.some(value => {
            let one =  `${value._id}`;
            let two = `${pier._id}`;
            return one === two
        })
        console.log(some);
        if(!some) {
            await Port.update({edp: req.params.edp}, { $push: { piers: pier } })
            let ports = await Port.find({})
            let rest2 = await Pier.find({})
            res.render('pages/ports', {data: ports, dataPier: rest2})
        } else {
            let ports = await Port.find({})
            let rest2 = await Pier.find({})
            res.render('pages/ports', {data: ports, dataPier: rest2})
        }


        res.render('pages/ports', {data: ports, dataPier: rest2})

    })();

})


//Додавання корабля в колекцію



//Редагування корабля в колекції



//Видалення корабля з колекції



//Пошук одного корабля в колекції







app.listen(3000, () => {
    console.log(3000)
});
