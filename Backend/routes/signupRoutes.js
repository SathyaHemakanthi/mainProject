const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signupController');

router.get('/', (req, res) => {
  return res.json('From signup route');
});

router.post('/igrowth/signup', signupController.insertSignup);

module.exports = router;
