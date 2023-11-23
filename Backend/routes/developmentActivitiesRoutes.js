const express = require('express');
const router = express.Router();
const developmentActivitiesController = require('../controllers/developmentActivitiesController');

router.get('/', (req, res) => {
  return res.json('From development activities route');
});

router.get('/development_activities', developmentActivitiesController.getDevelopmentActivities);
router.post('/update_development_activities', developmentActivitiesController.updateDevelopmentActivities);

module.exports = router;
