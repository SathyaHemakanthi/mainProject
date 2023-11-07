import React, { useState, useEffect } from "react";
import "./develop.css";

const Develop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API and update the state
    fetch("http://localhost:8081/development_activities")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const handleRadioChange = (event, index) => {
    const newData = [...data];
    newData[index].activity_status = event.target.value;
    setData(newData);
  };

  const handleSubmit = () => {
    // Send the updated data to the server
    fetch("http://localhost:8081/update_development_activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  const renderTables = () => {
    // Group data by month
    const groupedData = {};
    data.forEach((d) => {
      if (!groupedData[d.activity_month]) {
        groupedData[d.activity_month] = [];
      }
      groupedData[d.activity_month].push(d);
    });

    return Object.keys(groupedData).map((activity_month, index) => (
      <div className="table-card" key={index}>
        <h2>Month {activity_month}</h2>
        <table className="table-top">
          <thead>
            <tr>
              <th className="id-width">ID</th>
              <th className="name-width">Name</th>
              <th className="status-width">Status</th>
            </tr>
          </thead>
          <tbody>
            {groupedData[activity_month].map((d, i) => (
              <tr key={i}>
                <td>{d.activity_id}</td>
                <td>{d.activity_name}</td>
                <td className="table-input">
                  <input
                    type="radio"
                    value="Yes"
                    checked={d.activity_status === "Yes"}
                    onChange={(e) => handleRadioChange(e, i)}
                    name={`radio_${activity_month}_${d.activity_id}`} // Unique name for each radio button group
                  />
                  Yes
                  <input
                    type="radio"
                    value="No"
                    checked={d.activity_status === "No"}
                    onChange={(e) => handleRadioChange(e, i)}
                    name={`radio_${activity_month}_${d.activity_id}`} // Unique name for each radio button group
                  />
                  No
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ));
  };

  return (
    <div>
      {data.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        <div>
          {renderTables()}
          <button className="submit_btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Develop;





