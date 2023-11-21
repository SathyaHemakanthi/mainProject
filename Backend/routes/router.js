// routes/router.js

const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

const db = require('../config/db.js');
const userMiddleware = require('../middleware/users.js');

router.post('/igrowth/signup', (req, res, next) => {});

// router.post('/login', (req, res, next) => {});

// router.get('/secret-route', (req, res, next) => {
//   res.send('This is the secret content. Only logged in users can see that!');
// });

module.exports = router;