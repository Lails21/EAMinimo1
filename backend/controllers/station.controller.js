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

StationCtrl.putBikeStation= async (req, res) => {
    const stationId = req.body.stationId;
    const bikeId = req.body.bikeId;
    let stationUpdated = await Station.findOneAndUpdate({_id: stationId}, {$addToSet: {bike: bikeId}});
    res.status(200).send({message: "Bike added successfully to the station"})
};

module.exports = StationCtrl;