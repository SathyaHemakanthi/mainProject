import React from "react";
//import { Link } from 'react-router-dom';
import "./consultation.css";
import prof from "./images/doctor.jpg";

function Consultation() {
  return (
    <div>
      {/* <div>
        <h1 className="meet">Meet Your Doctor</h1>
      </div>
      <div className="doctor">
        <img src={prof} alt="doctor" />
      </div> */}
      <div class="card">
        {/* <div className="doctor">
        <img  src={prof} alt="doctor" /></div> */}
        <div class="card-body">
          <img className="doctor" src={prof} alt="doctor" />
          <h4 class="card-title">Dr.Rakhitha Munasinghe</h4>
          <p class="card-text">Lady Ridway Hospital,Borella.</p>
          <p class="card-contact">Contact Number:071-2034867</p>
          {/* <a href="#" class="btn btn-primary">See Profile</a> */}
        </div>
      </div>
    </div>
  );
}

export default Consultation;
