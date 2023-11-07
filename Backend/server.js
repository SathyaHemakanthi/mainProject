const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"igrowth"
})

app.get('/',(re,res)=>{
    return res.json("From backend side");
})

app.get("/distinct_months", (req, res) => {
  const sql = "SELECT DISTINCT activity_month FROM development_activities";
  db.query(sql, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    const months = data.map((row) => row.month);
    return res.json(months);
  });
});

app.get("/development_activities", (req, res) => {
  const sql = "SELECT * FROM development_activities";
  db.query(sql, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.json(data);
  });
});

app.post("/insert_development_activities", (req, res) => {
  const data = req.body;

  data.forEach((record) => {
    record.child_id = 1;
  });

  for (const record of data) {
    const sql = "INSERT INTO development_activities_for_babies (activity_id, child_id, status) VALUES (?, ?, ?)";
    db.query(sql, [record.activity_id, record.child_id, record.status], (err) => {
      if (err) {
        return res.status(500).json(err);
      }
    });
  }

  res.json({ message: "Data inserted successfully" });
});

app.get('/consultation', (req, res) => {
    const sql = 'SELECT * FROM consultation';
    db.query(sql,(err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
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