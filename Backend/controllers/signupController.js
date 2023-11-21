// signupController.js
const signupModel = require('../models/signupModel');

const insertSignup = (req, res) => {
  const { name, email, password } = req.body;
  const values = [name, email, password];

  signupModel.insertSignup(values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

module.exports = {
  insertSignup,
};
