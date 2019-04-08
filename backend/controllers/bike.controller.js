const Bike = require ('../models/bike');

const BikeCtrl = {};

BikeCtrl.getBikes = async (req, res) => {
    const allbikes = await Bike.find();
    res.json(allbikes);
}


BikeCtrl.postBike = async (req, res) => {
    const bike = new Bike();
    bike.bike = req.body.bike;
    bike.kms = req.body.kms;
    bike.description = req.body.description;

    console.log(bike);

    try {
        await bike.save();
        res.status(200).send({message: "Bike created successfully"})
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
}

BikeCtrl.deleteBike = async (req, res) => {
    await Bike.findByIdAndRemove(req.params.id);
    res.json({ status: 'Bike deleted'});
};

module.exports = BikeCtrl;