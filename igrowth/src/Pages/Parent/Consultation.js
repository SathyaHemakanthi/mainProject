import React, { useState, useEffect } from "react";
import "./consultation.css";
import prof from "./images/doctor.jpg";

function Consultation() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/consultation")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
        
      {data.map((d, i) => (
        <div class="card" key={i}>
          <div class="card-body">
            <img className="doctor" src={prof} alt="doctor" />
            <div className="right_side">
              <h4 class="card-title">{d.name}</h4>
              <h6 class="card-title">{d.position}</h6>
              <p class="card-contact">{d.phone_number}</p>
              <p class="card-text">{d.address}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Consultation;