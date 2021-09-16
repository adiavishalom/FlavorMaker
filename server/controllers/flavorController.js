const Flavor = require('../models/flavorModel');
const Favorite = require('../models/faveModel');

const FlavorController = {
    //this is just for me to create flavors easy
    async createFlavor(req, res) {
        const {name} = req.body;
        res.locals.flavorObj = {
          'name': name
        }
        await Flavor.create(res.locals.flavorObj)
        return res.status(200).send('Created Flavor');
    },
    //getFlavors will return all the flavors
    async getFlavors(req, res, next) {
        res.locals.flavors = await Flavor.find();
        return next();
    }
};

module.exports = FlavorController;