// developmentActivitiesController.js
const developmentActivitiesModel = require('../models/developmentActivitiesModel');

const getDevelopmentActivities = (req, res) => {
  developmentActivitiesModel.getDevelopmentActivities((err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

const updateDevelopmentActivities = async (req, res) => {
  const data = req.body;
  developmentActivitiesModel.updateDevelopmentActivities(data, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

module.exports = {
  getDevelopmentActivities,
  updateDevelopmentActivities,
};
