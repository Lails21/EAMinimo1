const mongoose = require('mongoose');
const { Schema } = mongoose;

const BikeSchema = new Schema({
    bike: {type: String, required: true},
    kms: {type: String, required: true},
    description: {type: String, required: true}
});

module.exports = mongoose.model('Bike', BikeSchema);
