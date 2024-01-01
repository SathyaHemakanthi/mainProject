// consultationModel.js
const db = require('../db');

const getConsultation = (callback) => {
  const sql = 'SELECT * FROM consultation';
  db.query(sql, callback);
};

module.exports = {
  getConsultation,
};
