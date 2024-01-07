import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./vacc_detail.css";

function Vacc_Detail() {
    
  const Navigate = useNavigate();

  return (
    <div className="card-container">
      <div className="card01">
        <h6 className="card-title"> Vaccination 1</h6>
        <div className="card_body">
          Details Details Details Details 
        </div>
        <button className="btn01" onClick={() => Navigate("/Midwife/Vaccination1")}>
         More
        </button>
        
      </div>

      <div className="card01">
        <h6 className="card-title"> Vaccination 2</h6>
        <div className="card_body">
          Details Details Details Details 
        </div>
        <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
         More
        </button>
      </div>

      <div className="card01">
        <h6 className="card-title"> Vaccination 3</h6>
        <div className="card_body">
          Details Details Details Details  
        </div>
        <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
         More
        </button>
      </div>

      <div className="card01">
        <h6 className="card-title"> Vaccination 4</h6>
        <div className="card_body">
          Details Details Details Details 
        </div>
        <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
         More
        </button>
      </div>

      <div className="card01">
        <h6 className="card-title"> Vaccination 5</h6>
        <div className="card_body">
          Details Details Details Details 
        </div>
        <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
         More
        </button>
      </div>

      <div className="card01">
        <h6 className="card-title"> Vaccination 5</h6>
        <div className="card_body">
          Details Details Details Details Details Details 
        </div>
        <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
         More
        </button>
      </div>
    </div>
  );
}

export default Vacc_Detail;
