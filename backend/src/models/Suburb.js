// models/Suburb.js
const mongoose = require('mongoose');

const SuburbSchema = new mongoose.Schema({
    suburb: {
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], index: '2dsphere' }
    }
});

module.exports = mongoose.model('Suburb', SuburbSchema);
