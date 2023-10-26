import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <div>
      <Line data={chartData} options={{ maintainAspectRatio: false }} />
    </div>
  );
}

export default LineChart;