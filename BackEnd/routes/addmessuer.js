const express = require('express');
const router =express.Router();
const con =require("../components/connection");

router.post("/",(req,res)=>{
    const data = req.body;

    const sql = `INSERT INTO growth_details(child_id,weight,height,head_cricumference,BMI_value,month) 
    VALUES ('${data.child_id}','${data.weight}','${data.height}','${data.head_cricumference}','${(data.weight/(data.height*data.height))}','${data.month}')`;
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