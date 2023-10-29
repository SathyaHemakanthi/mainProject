import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [activityStatus, setActivityStatus] = useState({});

  useEffect(() => {
    fetch("http://localhost:8081/development_activities")
      .then((res) => res.json())
      .then((data) => {
        // Initialize the activityStatus state with the fetched data
        const initialStatus = {};
        data.forEach((activity) => {
          initialStatus[activity.activity_id] = "No"; // Initialize all activities as "No"
        });
        setActivityStatus(initialStatus);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleStatusChange = (activityId, status) => {
    setActivityStatus((prevState) => ({
      ...prevState,
      [activityId]: status,
    }));
  };

  const handleSubmit = () => {
    // You can now access the selected status for each activity in the activityStatus state.
    console.log("Activity Status:", activityStatus);
  };

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
          {data.map((d) => (
            <tr key={d.activity_id}>
              <td>{d.activity_id}</td>
              <td>{d.activity_name}</td>
              <td>
                <input
                  type="radio"
                  name={`status-${d.activity_id}`}
                  value="Yes"
                  checked={activityStatus[d.activity_id] === "Yes"}
                  onChange={() => handleStatusChange(d.activity_id, "Yes")}
                />
                Yes
                <input
                  type="radio"
                  name={`status-${d.activity_id}`}
                  value="No"
                  checked={activityStatus[d.activity_id] === "No"}
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
}

export default App;
