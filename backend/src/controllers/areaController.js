// controllers/areaController.js
const Area = require('../models/Area');

exports.addArea = async (req, res) => {
    try {
        const { name, description } = req.body;

        // Validate input
        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }

        // Create a new area document
        const newArea = new Area({
            name,
            description
        });

        // Save to database
        await newArea.save();

        res.json({ message: 'Area added successfully', area: newArea });
    } catch (error) {
        console.error('Error adding area:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
