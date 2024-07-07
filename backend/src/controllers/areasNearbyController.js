// controllers/areasNearbyController.js
const mongoose = require('mongoose');
const Suburb = require('../models/Suburb');

// Helper function to validate latitude and longitude
const isValidLatitude = (lat) => lat >= -90 && lat <= 90;
const isValidLongitude = (lon) => lon >= -180 && lon <= 180;

exports.getAreasNearby = async (req, res) => {
    const { lat, lon, radius = 10 } = req.query;

    if (!lat || !lon) {
        return res.status(400).json({ message: 'Latitude and longitude are required' });
    }

    if (!isValidLatitude(parseFloat(lat)) || !isValidLongitude(parseFloat(lon))) {
        return res.status(400).json({ message: 'Invalid latitude or longitude values' });
    }

    try {
        const radiusInMiles = parseFloat(radius);
        const radiusInRadians = radiusInMiles / 3963.2; // Convert miles to radians

        const nearbySuburbs = await Suburb.find({
            location: {
                $geoWithin: {
                    $centerSphere: [[parseFloat(lon), parseFloat(lat)], radiusInRadians]
                }
            }
        }).select('suburb location');

        if (nearbySuburbs.length === 0) {
            return res.status(404).json({ message: 'No nearby suburbs found' });
        }

        const nearbyAreas = nearbySuburbs.map(suburb => ({
            suburb: suburb.suburb,
            distance: haversineDistance(
                { lat: parseFloat(lat), lon: parseFloat(lon) },
                { lat: suburb.location.coordinates[1], lon: suburb.location.coordinates[0] }
            )
        }));

        res.status(200).json({ nearbyAreas });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//we shall be using a helper function to calculate distance using the Haversine formula
const haversineDistance = (coord1, coord2) => {
    const R = 3963.2; // Radius of the Earth in miles
    const dLat = degreesToRadians(coord2.lat - coord1.lat);
    const dLon = degreesToRadians(coord2.lon - coord1.lon);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(degreesToRadians(coord1.lat)) * Math.cos(degreesToRadians(coord2.lat)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

// Helper function to convert degrees to radians
const degreesToRadians = (degrees) => degrees * Math.PI / 180;
