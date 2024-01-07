// signupModel.js
const db = require('../db');

const insertSignup = (values, callback) => {
  const sql = 'INSERT INTO signup (name, email, password) VALUES (?)';
  db.query(sql, [values], callback);
};

module.exports = {
  insertSignup,
};
