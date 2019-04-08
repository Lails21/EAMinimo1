const Bike = require ('../models/bike');
const Station = require ('../models/station');

const BikeCtrl = {};

BikeCtrl.getBikes = async (req, res) => {
    const allbikes = await Bike.find();
    res.json(allbikes);
}


BikeCtrl.postBike = async (req, res) => {
    const bike = new Bike(req.body)
    

    console.log('Bike of the body', bike);

    try {
        await bike.save();
        res.status(200).send({message: "Bike created successfully"})
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
}


module.exports = BikeCtrl;