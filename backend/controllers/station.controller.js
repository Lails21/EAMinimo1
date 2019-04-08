const mongoose = require ('mongoose');
const Station = require('../models/station');
const StationCtrl = {};

StationCtrl.getStations = async (req, res) => {
    const allstations = await Station.find();
    res.json(allstations);
}

StationCtrl.postStation = async (req, res) => {
    const station = new Station({
        station: req.body.station,
        state: req.body.state,
        description: req.body.description
    })
    console.log(station);
    try {
        await station.save();
        res.status(200).send({message: "Station created successfully"})
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
};

StationCtrl.getStationDetail = async (req, res) => {
    const _id = req.params.id;
    try {
        let station = await Station.findById(_id).populate('bike');
        if(!station){
            return res.status(404).send({message: 'Station not found'})
        }else{
            res.status(200).send(station)
        }
    } catch(err) {
        res.status(500).send(err)
    }
}

StationCtrl.putBikeStation= async (req, res) => {
    const stationId = req.body.stationId;
    const bikeId = req.body.bikeId;
    console.log(req.body);
    let stationUpdated = await Station.findByIdAndUpdate({_id: stationId}, {$addToSet: {bike: bikeId}})
    res.status(200).send({message: "Bike added successfully to the station"})
};

StationCtrl.deleteBikeStation = async (req, res) => {
    try{
        const stationId = req.params.stationId;
        const bikeId = req.params.bikeId;
 
        console.log(`StationID: ${stationId}, BikeID: ${bikeId}`);
 
        let station = await Station.findById(stationId);
        if(!station){
          
            return res.status(404).send({message: 'Station not found'})
        }else{
            console.log(bikeId);
            mongoose.Types.ObjectId(bikeId);
            console.log(bikeId);
            let stationUpdated = await Station.update({_id: stationId}, {$pull: {bike: bikeId}});
            console.log(stationUpdated);
            console.log("Station" +stationId);
            console.log("Bike" +bikeId);
 
            if (stationUpdated.nModified === 0) {
                return res.status(404).send({message: 'Bike not found'})
            }
 
            let bikeUpdated = await Bike.findByIdAndUpdate({_id: bikeId}, {assigned: "false"});
            console.log(bikeUpdated);
        }
        res.status(200).send({message:'Bike deleted successfully'});
    }catch(err){
        res.status(500).send(err)
    }
 }
 
    

module.exports = StationCtrl;