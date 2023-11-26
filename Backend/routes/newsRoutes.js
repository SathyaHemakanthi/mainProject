// newsRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const newsController = require('../controllers/newsController');
const path = require('path');

// const storage = multer.diskStorage({
//   destination: 'uploads/',
//   filename: function (req, file, callback) {
//     callback(null, file.fieldname + '-' + Date.now() + file.originalname);
//   },
// });

const storage = multer.diskStorage({
  destination:(req, file, callback) =>{
    callback(null, "../igrowth/src/Pages/Parent/images")
  } ,

  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post('/igrowth/news', upload.single('image'), newsController.insertNews);

router.get('/', (req, res) => { return res.json('From news route'); });
router.get('/news', newsController.getNews);

module.exports = router;
