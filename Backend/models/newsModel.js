// newsModel.js
const db = require('../db');

const getNews = (callback) => {
  const sql = 'SELECT * FROM news';
  db.query(sql, callback);
};


const insertNews = (values, callback) => {
  const sql = 'INSERT INTO news (title, content, image,url) VALUES (?, ?, ?,?)' ;
  db.query(sql, values, callback);
};

module.exports = {
  getNews,
  insertNews,
};
