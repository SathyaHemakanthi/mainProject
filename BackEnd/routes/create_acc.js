const express = require('express');
const router =express.Router();
const con =require("../components/connection");

router.post("/",(req,res)=>{
    const data = req.body;
    //res.send(data.gender)

    const sql = `INSERT INTO child_details(child_id,child_name,gender,birthdate,registration_no,registration_date,NIC,month,birth_certificate_no) 
    VALUES ('${data.child_id}','${data.child_name}','${data.gender}','${data.birthdate}','${(data.registration_no)}','${data.registration_date}','${data.NIC}','${data.month}','${data.birth_certificate_no}')`;
    res.send("running ok");
    con.query(sql, (err, result) => {
        if (err) {
          console.log(err);
          res.send({
            status: 500,
            data: { type: "error", msg: err, color: "red" },
          });
        } else {
          res.send({ result: "add item successfully", return: result });
        }
      });
})


module.exports = router