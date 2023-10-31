import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./develop.css";

const Develop = () => {
  const [data, setData] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8081/development_activities")
      .then((res) => res.json())
      .then((data) => {
        // Initialize the updatedData state with the fetched data
        setUpdatedData(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleStatusChange = (activityId, status) => {
    // Update the selected activity's status in the updatedData state
    const updated = updatedData.map((d) =>
      d.activity_id === activityId ? { ...d, activity_status: status } : d
    );
    setUpdatedData(updated);
  };

  const handleActivityClick = (activityId) => {
    // Highlight the selected activity and set it as the selected activity
    setSelectedActivity(activityId);
  };

  const handleSubmit = () => {
    // Send the updated data to your server
    fetch("http://localhost:8081/update_development_activity_status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Development activity status updated successfully", data);
      })
      .catch((err) => {
        console.error("Error updating development activity status:", err);
      });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>I</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i} onClick={() => handleActivityClick(d.activity_id)}>
              <td>{d.activity_id}</td>
              <td>{d.activity_name}</td>
              <td>
                <input
                  type="radio"
                  name={`status-${d.activity_id}`}
                  value="Yes"
                  checked={
                    d.activity_id === selectedActivity &&
                    d.activity_status === "Yes"
                  }
                  onChange={() => handleStatusChange(d.activity_id, "Yes")}
                />
                Yes
                <input
                  type="radio"
                  name={`status-${ d.activity_id}`}
                  value="No"
                  checked={
                    d.activity_id === selectedActivity &&
                    d.activity_status === "No"
                  }
                  onChange={() => handleStatusChange(d.activity_id, "No")}
                />
                No
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Develop;