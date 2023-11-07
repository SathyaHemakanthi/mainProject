import React, { useState } from "react";
import "./growth.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

const labels = ["0", "01", "02", "03", "04", "05", "06", "07", "08", "09","10","11","12","13","14","15","16","17","18","19","20"];

const weightData = [0, 3, 4, 4.2, 4.1, 4.5, 5, 4.9];
const heightData = [0, 60, 62, 69, 74, 79, 88, 90];
const headCircumferenceData = [0, 28, 30, 35.5, 37, 39.8, 42, 44];

export const weightChartData = {
  labels,
  datasets: [
    {
      label: "Weight",
      data: weightData,
      borderColor: "rgba(255, 99, 132, 0.5)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const heightChartData = {
  labels,
  datasets: [
    {
      label: "Height",
      data: heightData,
      borderColor: "rgba(75, 192, 192, 0.5)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  ],
};

export const headCircumferenceChartData = {
  labels,
  datasets: [
    {
      label: "Head Circumference",
      data: headCircumferenceData,
      borderColor: "rgba(255, 206, 86, 0.5)",
      backgroundColor: "rgba(255, 206, 86, 0.5)",
    },
  ],
};

function Growth() {
  const [showWeightGraph, setShowWeightGraph] = useState(true);
  const [showHeightGraph, setShowHeightGraph] = useState(false);
  const [showHeadCircumferenceGraph, setShowHeadCircumferenceGraph] = useState(false);

  const showWeight = () => {
    setShowWeightGraph(true);
    setShowHeightGraph(false);
    setShowHeadCircumferenceGraph(false);
  };

  const showHeight = () => {
    setShowWeightGraph(false);
    setShowHeightGraph(true);
    setShowHeadCircumferenceGraph(false);
  };

  const showHeadCircumference = () => {
    setShowWeightGraph(false);
    setShowHeightGraph(false);
    setShowHeadCircumferenceGraph(true);
  };

  return (
    <div>
      <div>
        <button className="weight" onClick={showWeight}>View Weight Graph</button>
        <button className="height" onClick={showHeight}>View Height Graph</button>
        <button className="head" onClick={showHeadCircumference}>View Head Circumference Graph</button>
      </div>

      {showWeightGraph && (
        <div>
          <Line className="chart"  options={options} data={weightChartData} />
        </div>
      )}

      {showHeightGraph && (
        <div>
          <Line className="chart" options={options} data={heightChartData} />
        </div>
      )}

      {showHeadCircumferenceGraph && (
        <div>
          <Line className="chart" options={options} data={headCircumferenceChartData} />
        </div>
      )}
    </div>
  );
}

export default Growth;