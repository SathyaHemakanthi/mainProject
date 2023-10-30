import React, { useState ,useEffect} from "react";
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
      
          {data.map((d,i)=>(
            <div class="card" key={i}>
            <div class="card-body" >
               <img className="doctor" src={prof} alt="doctor" />
          <h4 class="card-title">{d.activity_name}</h4>
          <p class="card-text">{d.activity_id}</p>
          <p class="card-contact">{d.activity_name}</p>
              </div>

          
        </div>
        ))}
    </div>
  );
}

export default Consultation;
