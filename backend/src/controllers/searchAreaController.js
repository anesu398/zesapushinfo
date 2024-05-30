// controllers/searchAreaController.js
const Area = require('../models/Area');

exports.searchArea = async (req, res) => {
    try {
        const searchText = req.query.text;

        // Validate input
        if (!searchText) {
            return res.status(400).json({ message: 'Search text is required' });
        }

        // Search for areas
        const searchResults = await Area.find({ 
            name: { $regex: searchText, $options: 'i' }  // Case-insensitive search
        });

        res.json({ results: searchResults });
    } catch (error) {
        console.error('Error searching for areas:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
