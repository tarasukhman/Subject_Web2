const mongoose = require('mongoose');
const Log = mongoose.Schema(
    {
        pier: Number,
        timeArrival: Date,
        timeDeparture: Date 
    });

const shipSchema = mongoose.Schema({
    name: String,
    number: Number,
    country: String,
    tonnage: Number,
    log: [Log],
    osanka: Number
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

const Ship = mongoose.model('ships', shipSchema);

module.exports = { Ship };
