const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flavorSchema = new Schema({
    name: {type: String, required: true}
});

module.exports = mongoose.model('Flavor', flavorSchema);