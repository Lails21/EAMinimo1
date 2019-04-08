const Station = require('../models/station');
const StationCtrl = {};

StationCtrl.getStations = async (req, res) => {
    const allstations = await Station.find();
    res.json(allstations);
}

StationCtrl.getStationDetail = async (req, res) => {
    const stationdetail = await Station.findById(req.params.id);
    res.json(stationdetail);
}

module.exports = StationCtrl;