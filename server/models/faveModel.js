const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favSchema = new Schema({
    name: {type: String, required: true}
});

module.exports = mongoose.model('Favorite', favSchema);