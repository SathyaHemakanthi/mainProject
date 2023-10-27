import React from "react";
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
      text: "Age/ Weight Graph",
    },
  },
};

const labels = ["0", "01", "02", "03", "04", "05", "06", "07"];

// Sample data (replace this with your own data)
const dataset1Data = [0, 3, 4, 4.2, 4.1, 4.5, 5, 4.9];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: dataset1Data,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function graph() {
    return (
        <div>
            <Line options={options} data={data} />
            Sathya
        </div>
      )
}

export default graph;