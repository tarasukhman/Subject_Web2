const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portSchema = mongoose.Schema({
    name: {
        type: String,
    },
    country: {
        type: String
    },
    edp: {
        type: Number
    },
    address: {
        type: String
    },
    piers: [{
        type: Schema.Types.ObjectId , ref: 'piers'
    }]
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

const Port = mongoose.model('ports', portSchema);

module.exports = { Port };
