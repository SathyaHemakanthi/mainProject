const express = require('express');
const router =express.Router();
const con =require("../components/connection");

router.post("/",(req,res)=>{
    const data = req.body;
    //res.send(data.child_name)
    //SELECT * from child_details WHERE child_id=123 or child_name="kalani"
    const sql = `SELECT * FROM child_details WHERE child_id="${data.child_id}" OR child_name="${data.child_name}"`;
    //res.send("running ok");
    con.query(sql, (err, result) => {
        if (err) {
          console.log(err);
          res.send({
            status: 500,
            data: { type: "error", msg: err, color: "red" },
          });
        } else {
          res.send({ result: "found item", return: result });
        }
      });
})


module.exports = router