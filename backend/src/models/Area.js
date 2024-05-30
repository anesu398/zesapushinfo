// models/Area.js
const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

const Area = mongoose.model('Area', areaSchema);

module.exports = Area;
