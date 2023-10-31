import React from "react";
//import { Link } from 'react-router-dom';
import "./consultation.css";
import prof from "./images/doctor.jpg";

function Consultation() {
  return (
    <div>
      
      <div class="card">
        
        <div class="card-body">
          <img className="doctor" src={prof} alt="doctor" />
          <h4 class="card-title">Dr.Rakhitha Munasinghe</h4>
          <p class="card-text">Lady Ridway Hospital,Borella.</p>
          <p class="card-contact">Contact Number:071-2034867</p>
        
        </div>
      </div>
    </div>
  );
}

export default Consultation;
