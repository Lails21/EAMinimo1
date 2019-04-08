const Station = require('../models/station');
const StationCtrl = {};

StationCtrl.getStations() = async (req, res) => {
    const allstations = await Station.find();
    res.json(allstations);
}