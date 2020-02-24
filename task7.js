class Port {
    constructor(name, size) {
        this.name = name;
        this.size = size;
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
    EditPort(name, size) {
        this.name = name;
        this.size = size;
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
    constructor(name) {
        this.name = name;
    }

    static Collection = [];

    static AddShip(ship) {
        this.Collection.push(ship);
    }
    EditShip(name) {
        this.name = name;
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
    constructor(name, size) {
        this.name = name;
        this.size = size;

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
    EditPier(name, size) {
        this.name = name;
        this.size = size;
    }

    AddPierToPort(port) {
        port.PierCollection.push(this);
    }
}