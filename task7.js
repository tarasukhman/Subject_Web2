class Port {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        PierCollection = [];
    }
    static PortCollection = [];


    static AddPort(port) {
        this.PortCollection.push(port);
    }
    static ShowAllPorts() {
        for (let i = 0; i < this.PortCollection.length; i++) {
            console.log(this.PortCollection[i]);
        }
    }
    ShowAllPiersInPort() {
        for (let i = 0; i < this.PierCollection.length; i++) {
            console.log(this.PierCollection[i]);
        }
    }
    static DeletePort(port) {
        this.Collection.filter(function(obj) {
            return obj.name !== port.name;
        })
    }
    EditPort(name, capacity) {
        this.name = name;
        this.capacity = capacity;
    }

    static SearchPort(portName) {
        for (let i = 0; i < this.Collection.length; i++) {
            if (this.Collection[i].name === portName) {
                console.log(this.Collection[i]);
            }
        }
    }

}
class Ship {
    constructor(name, length, width) {
        this.name = name;
        this.size = [length, width];
    }

    static Collection = [];

    static AddShip(ship) {
        this.Collection.push(ship);
    }
    EditShip(name, length, width) {
        this.name = name;
        this.size = [length, width];
    }
    static DeleteShip() {

    }
    static SearchShip(shipName) {
        for (let i = 0; i < this.Collection.length; i++) {
            if (this.Collection[i].name === shipName) {
                console.log(this.Collection[i]);
            }
        }
    }
}

class Pier {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;

    }
    static Collection = [];

    static AddPier(pier) {
        this.Collection.push(pier);
    }
    static DeletePier(shipName) {
        for (let i = 0; i < this.Collection.length; i++) {
            if (this.Collection[i].name === shipName) {
                console.log(this.Collection[i]);
            }
        }
    }
    static SearchShip() {
        for (let i = 0; i < this.Collection.length; i++) {
            if (this.Collection[i].name === portName) {
                console.log(this.Collection[i]);
            }
        }
    }
    EditPier(name, capacity) {
        this.name = name;
        this.capacity = capacity;
    }

    AddPierToPort(port) {
        port.PierCollection.push(this);
    }
}