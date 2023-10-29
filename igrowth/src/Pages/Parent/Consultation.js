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
      <div class="card">
          {data.map((d,i)=>(
            <div class="card-body" key={i}>
               <img className="doctor" src={prof} alt="doctor" />
          <h4 class="card-title">{d.activity_name}</h4>
          <p class="card-text">Lady Ridway Hospital,Borella.</p>
          <p class="card-contact">Contact Number:071-2034867</p>
              </div>

          ))}
        </div>
    </div>
  );
}

export default Consultation;
