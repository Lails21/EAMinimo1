const mongoose = require('mongoose');
const { Schema } = mongoose;

const StationSchema = new Schema({
    station: {type: String, required: true},
    state: {type: String, required: true},
    description: {type: String, required: true},
    bikes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Bike', unique: false}]
});



module.exports = mongoose.model('Station', StationSchema);
