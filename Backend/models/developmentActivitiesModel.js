// developmentActivitiesModel.js
const db = require('../db');

const getDevelopmentActivities = (callback) => {
  const sql = 'SELECT * FROM development_activities';
  db.query(sql, callback);
};

const updateDevelopmentActivities = async (data, callback) => {
  try {
    for (const record of data) {
      const sql = 'UPDATE development_activities SET activity_status = ? WHERE activity_id = ?';
      await db.query(sql, [record.activity_status, record.activity_id]);
    }
    callback(null, { message: 'Data updated successfully' });
  } catch (error) {
    console.error(error);
    callback({ error: 'An error occurred while updating data' });
  }
};

module.exports = {
  getDevelopmentActivities,
  updateDevelopmentActivities,
};
