const express = require('express');
const router = express.Router();
const consultationController = require('../controllers/consultationController');

router.get('/', (req, res) => {
  return res.json('From consultation route');
});

router.get('/consultation', consultationController.getConsultation);

module.exports = router;
