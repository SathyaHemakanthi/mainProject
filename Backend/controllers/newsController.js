
// newsController.js
const multer = require('multer');
const path = require('path');
const newsModel = require('../models/newsModel');

const getNews = (req, res) => {
  newsModel.getNews((err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};


const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, callback) {
    callback(null, file.fieldname +  file.originalname);
  },
});

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "../igrowth/src/Pages/Parent/images");
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   },
// });

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5000000 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.png', '.jpg', '.jpeg'];
    const ext = path.extname(file.originalname);
    if (allowedTypes.includes(ext.toLowerCase())) {
      cb(null, true);
    } else {
      cb(new Error('Invalid Images'));
    }
  } 
}).single('image');

const insertNews = (req, res) => {
  const { title, content } = req.body;
  const image = req.file ? "uploads/" + req.file.filename : null;
  const url = req.file ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}` : null;

  const values = [title, content, image, url];

  newsModel.insertNews(values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

module.exports = {
  insertNews,
  getNews
};
