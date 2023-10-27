import React from "react";

const activitiesOnMonth = [
  {
    month: "01",
    activities: [
      { activityID: "01", activityName: "smile", activityStatus: "yes" },
      { activityID: "02", activityName: "cry", activityStatus: "no" },
      { activityID: "03", activityName: "move hand", activityStatus: "yes" },
      {
        activityID: "04",
        activityName: "try to catch objects",
        activityStatus: "no",
      },
    ],
  },
  {
    month: "02",
    activities: [
      { activityID: "01", activityName: "smile", activityStatus: "yes" },
      { activityID: "02", activityName: "cry", activityStatus: "no" },
      { activityID: "03", activityName: "move hand", activityStatus: "yes" },
      {
        activityID: "04",
        activityName: "try to catch objects",
        activityStatus: "no",
      },
    ],
  },
];

function BabyGrowthTable() {
  return (
    <div>
      {activitiesOnMonth.map((monthActivity) => (
        <div key={monthActivity.month}>
          <h2>Month {monthActivity.month}</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {monthActivity.activities.map((activity) => (
                <tr key={activity.activityID}>
                  <td>{activity.activityID}</td>
                  <td>{activity.activityName}</td>
                  <td>{activity.activityStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default BabyGrowthTable;
