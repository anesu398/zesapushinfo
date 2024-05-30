// controllers/areasNearbyController.js
const Suburb = require('../models/Suburb');

exports.getAreasNearby = async (req, res) => {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
        return res.status(400).json({ message: 'Latitude and longitude are required' });
    }

    try {
        const nearbySuburbs = await Suburb.find({
            location: {
                $geoWithin: {
                    $centerSphere: [[parseFloat(lon), parseFloat(lat)], 10 / 3963.2] // 10 miles radius, adjust as needed
                }
            }
        }).select('suburb');

        if (nearbySuburbs.length === 0) {
            return res.status(404).json({ message: 'No nearby suburbs found' });
        }

        const nearbyAreas = nearbySuburbs.map(suburb => suburb.suburb);

        res.status(200).json({ nearbyAreas });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
