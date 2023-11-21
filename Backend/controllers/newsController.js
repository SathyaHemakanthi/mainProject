// newsController.js
const newsModel = require('../models/newsModel');

const getNews = (req, res) => {
  newsModel.getNews((err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

const insertNews = (req, res) => {
  const { title, content } = req.body;
  const image = req.file ? 'uploads/' + req.file.filename : null;
  const values = [title, content, image];

  newsModel.insertNews(values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

module.exports = {
  getNews,
  insertNews,
};
