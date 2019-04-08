const express = require ('express');
const router = express.Router();
const StationCtrl = require('../controllers/station.controller')
const BikeCtrl = require('../controllers/bike.controller')

router.get('/stations', StationCtrl.getStations);
router.get('/bikes/:id', StationCtrl.getStationDetail);

router.get('/bikes', BikeCtrl.getBikes);
router.add('/bikes', BikeCtrl.postBike);
router.delete('/bikes', BikeCtrl.deleteBike);

module.exports = router;