const express = require ('express');
const router = express.Router();
const StationCtrl = require('../controllers/station.controller')
const BikeCtrl = require('../controllers/bike.controller')

router.get('/stations', StationCtrl.getStations);
router.get('/stations/:id', StationCtrl.getStationDetail);

router.get('/bikes', BikeCtrl.getBikes);
router.post('/bikes', BikeCtrl.postBike);
router.delete('/bikes/:id', BikeCtrl.deleteBike);

module.exports = router;