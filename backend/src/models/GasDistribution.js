const mongoose = require('mongoose');

const gasDistributionSchema = new mongoose.Schema({
  region: String,
  status: String,
  disruptionStartTime: Date,
  disruptionEndTime: Date,
  impactedAreas: [String],
});

const GasDistribution = mongoose.model('GasDistribution', gasDistributionSchema);

module.exports = GasDistribution;
