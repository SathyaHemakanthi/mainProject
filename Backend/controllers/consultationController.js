// consultationController.js
const consultationModel = require('../models/consultationModel');

const getConsultation = (req, res) => {
  consultationModel.getConsultation((err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

module.exports = {
  getConsultation,
};
