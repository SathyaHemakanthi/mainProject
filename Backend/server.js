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




app.listen(8081,()=>{
    console.log("listning");
})