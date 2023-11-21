const express = require('express');
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser');
const multer = require('multer')


const app = express()
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());




const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"igrowth"
})

app.get('/',(re,res)=>{
    return res.json("From backend side");
})

app.get('/development_activities',(req,res)=>{
     const sql = "SELECT * from development_activities";
     db.query(sql,(err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
     })
})

  app.post('/update_development_activities', async (req, res) => {
    try {
      const data = req.body;
  
      // Loop through the data and execute update queries for each record
      for (const record of data) {
        const sql = 'UPDATE development_activities SET activity_status = ? WHERE activity_id = ?';
        await db.query(sql, [record.activity_status, record.activity_id]);
      }
  
      res.json({ message: 'Data updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while updating data' });
    }
  });


  // news get method
  app.get('/news', (req, res) => {
    const sql = 'SELECT * FROM news';
    db.query(sql,(err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
  });


  //For post method signup
app.post('/igrowth/signup',(req, res)=>{
 
  const sql = "INSERT INTO signup (name, email, password) VALUES (?)";
  const Values=[ 
    req.body.name, 
    req.body.email, 
    req.body.password,
  ];

  
  db.query(sql,[Values],(err,data)=>{
      if(err) return res.json(err);
      return res.json(data);
    })
})
//For post method news



const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post('/igrowth/news', upload.single('image'), (req, res) => {
  const { title, content } = req.body;
  const image = req.file ? 'uploads/' + req.file.filename : null;

  const sql = 'INSERT INTO news (title, content, image) VALUES (?, ?, ?)';
  const values = [title, content, image];

  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});



//consultation
app.get('/consultation', (req, res) => {
  const sql = 'SELECT * FROM consultation';
  db.query(sql,(err, data)=>{
      if(err) return res.json(err);
      return res.json(data);
    });
  });


app.listen(8081,()=>{
    console.log("listning");
})