import React from "react";
import { useState } from "react";
import { LineChart } from "./LineChart";

function App() {
  const [chartData, setChartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Example Data",
        data: [12, 19, 3, 5, 2],
        fill: false,
        borderColor: "blue",
      },
    ],
  });

  return (
    <div className="App">
      <LineChart chartData={chartData} />
    </div>
  );
}

export default App;