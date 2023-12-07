// // newsModel.js
// const db = require('../db');

// const getNews = (callback) => {
//   const sql = 'SELECT * FROM news';
//   db.query(sql, callback);
// };


// const insertNews = (values, callback) => {
//   const sql = 'INSERT INTO news (title, content, image,url) VALUES (?, ?, ?,?)' ;
//   db.query(sql, values, callback);
// };

// module.exports = {
//   getNews,
//   insertNews,
// };
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title : { 
      type: String,
      required: true
  },
  content:{
      type:String,
      required:true,
  },
  image:{
    type:String,
    required:true,
  },
  date:{
    type:Date,
    
},
  
})
const news = mongoose.model('News',newsSchema);
module.exports = news;