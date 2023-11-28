// newsRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const newsController = require('../controllers/newsController');
const path = require('path');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, callback) {
    callback(null, file.fieldname  + file.originalname);
  },
});



const upload = multer({storage: storage,
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
});
router.post('/news', upload.single('image'), newsController.insertNews);
router.get('/news', newsController.getNews);

module.exports = router;
