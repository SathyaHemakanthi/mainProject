const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

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

app.get('/consultation', (req, res) => {
    const sql = 'SELECT * FROM development_activities';
    db.query(sql,(err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
  });

  app.post("/update_development_activity_status", (req, res) => {
    const { activityStatus } = req.body;
    const sql = `UPDATE development_activities SET activity_status = ?`;
    db.query(sql[activityStatus],(err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
      })
    });
    app.get('/news', (req, res) => {
        const sql = 'SELECT * FROM news';
        db.query(sql,(err, data)=>{
            if(err) return res.json(err);
            return res.json(data);
        });
      });
    


app.listen(8081,()=>{
    console.log("listning");
})