import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import "./develop.css";

const Develop = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/development_activities")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.activity_id}</td>
              <td>{d.activity_name}</td>
              <td><input type='checkbox'/>Yes <input type='checkbox'/>No</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>Submit</button>
    </div>
  );
};

export default Develop;
