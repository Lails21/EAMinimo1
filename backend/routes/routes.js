const express = require ('express');
const router = express.Router();
const StationCtrl = require('../controllers/station.controller')
const BikeCtrl = require('../controllers/bike.controller')

router.get('/stations', StationCtrl.getStations);
router.post('/stations', StationCtrl.postStation);
router.get('/stations/:id', StationCtrl.getStationDetail);
router.put('/stations', StationCtrl.putBikeStation);
router.delete('/stations/:stationId/:bikeId', StationCtrl.deleteBikeStation);


router.get('/bikes', BikeCtrl.getBikes);
router.post('/bikes', BikeCtrl.postBike);

module.exports = router;