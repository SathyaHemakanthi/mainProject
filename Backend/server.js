const express = require('express');
const mysql = require('mysql')
const cors = require('cors')
const multer  = require('multer')


const app = express()
app.use(cors())


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"igrowth"
})

app.get('/',(req,res)=>{
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




app.listen(8081,()=>{
    console.log("listning");
})