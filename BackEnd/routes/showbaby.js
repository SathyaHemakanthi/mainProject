const express = require('express');
const router =express.Router();
const con =require("../components/connection");

router.post("/",(req,res)=>{
    
    // // res.send(data.child_name)
    // //SELECT * from child_details WHERE child_id=123 or child_name="kalani"
    // const sql = `SELECT child_name,child_id FROM child_details `;
    // //res.send("running ok");
    // con.query(sql, (err, data) => {
        
    //     if (err) return res.json(err);
    //     return res.json(data);
    //     // {
    //     //   console.log("err");
    //     //   res.send({
    //     //     status: 500,
    //     //     data: { type: "error", msg: err, color: "red" },
    //     //   });
    //     // } 
    //     // else {
    //     //   //res.send({ result: "found item", return: data });
    //     //   return  res.json(data);
    //     // }
    //   }
    //   );

    var data = [];
  const sql = `SELECT child_name,child_id FROM child_details`;
  console.log("work........................")

  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.send("database error");
      return;
    } else {
      console.log(result);
      if (result.length > 0) {
        result.forEach((item) => {
          if (more > 0) {
            console.log(item.mobile);
            data.push({
                child_name: item.child_name,
                child_id: item.child_id,
            });
          }
        });
        res.send(data);
      } else {
        res.send("No data found");
      }
    }
  });
})


module.exports = router