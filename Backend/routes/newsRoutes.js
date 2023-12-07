// // newsRoutes.js
// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const newsController = require('../controllers/newsController');
// const path = require('path');

// const storage = multer.diskStorage({
//   destination: 'uploads/',
//   filename: function (req, file, callback) {
//     callback(null, file.fieldname  + file.originalname);
//   },
// });



// const upload = multer({storage: storage,
//   limits: { fileSize: 5000000 },
//   fileFilter: (req, file, cb) => {
//     const allowedTypes = ['.png', '.jpg', '.jpeg'];
//     const ext = path.extname(file.originalname);
//     if (allowedTypes.includes(ext.toLowerCase())) {
//       cb(null, true);
//     } else {
//       cb(new Error('Invalid Images'));
//     }
//   } 
// });
// router.post('/news', upload.single('image'), newsController.insertNews);
// router.get('/news', newsController.getNews);

// module.exports = router;
const router = require('express').Router();
let News = require('../models/newsModel');

router.route('/').get((req,res)=>{
  News.find().then((news)=>{
      res.json(news)
  }).catch((err)=>{
      console.log(err)
  })
})

router.route('/addnews').post((req,res)=>{

  const title = req.body.title;
  const content = Number(req.body.content);
  const image = (req.body.image);

  const newNews= new News({
      title:title,
      content:content,
      image:image,
     
  
  })
  const data = newNews.save();
  if(data){
      res.json("News Added")
  }
  else{
      res.json("Error while add News")
  }
     
  
})

module.exports = router;