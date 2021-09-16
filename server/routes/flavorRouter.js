const express = require('express');
const flavorController = require('../controllers/flavorController');
const router = express.Router();

router.get('/',
  flavorController.getFlavors,
  (req, res) => {
    res.status(200).send(res.locals.flavors);
  }
);

router.post('/', flavorController.createFlavor);

module.exports = router;