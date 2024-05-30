const LoadsheddingStatus = require('../models/loadsheddingStatus');

/**
 * Controller function to get the load shedding status of a specific area.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
exports.getAreaStatus = async (req, res) => {
  const { suburb } = req.params;

  if (!suburb) {
    return res.status(400).json({ message: 'Suburb parameter is required' });
  }

  try {
    // Log the suburb being queried
    console.log(`Querying load shedding status for suburb: ${suburb}`);

    // Find load shedding status for the given suburb, case insensitive, matching any part of the suburb name
    const status = await LoadsheddingStatus.find({ suburb: { $regex: suburb, $options: 'i' } });

    if (status.length === 0) {
      return res.status(404).json({ message: `No status found for suburb containing '${suburb}'` });
    }

    res.status(200).json({ status });
  } catch (error) {
    console.error(`Error querying load shedding status for suburb containing '${suburb}':`, error);
    res.status(500).json({ message: 'Failed to fetch load shedding status' });
  }
};
