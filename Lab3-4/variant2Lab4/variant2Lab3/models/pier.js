const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const pierSchema = mongoose.Schema({
    name: String,
    number: Number,
    Capacity: Number,
    minOsanka: Number,
    ships: [{
        type: Schema.Types.ObjectId , ref: 'ships'
    }]
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

const Pier = mongoose.model('piers', pierSchema);

module.exports = { Pier };
