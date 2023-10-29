// import React from 'react'
// import { Link } from 'react-router-dom';


// export default Growth;

// GrowthChart.jsimport React from 'react';
// import { Line } from 'react-chartjs-2';

// function Growth() {

//   const data = {
//     labels: ['Month 1', 'Month 2', 'Month 3'], 
//     datasets: [
//       {
//         label: 'Baby Weight (kg)',
//         data: [3.5, 4.0, 4.5], 
//         borderColor: 'blue',
//       },
//       {
//         label: 'Baby Height (cm)',
//         data: [50, 55, 60], 
//         borderColor: 'green',
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return <Line data={data} options={options} />;
// }

// export default Growth;

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
      text: "Weight/Hight Graph",
    },
  },
};

const labels = ["0", "01", "02", "03", "04", "05", "06", "07"];

// Sample data for age graph
const weightData = [0, 3, 4, 4.2, 4.1, 4.5, 5, 4.9];

//Sample data for height graph
const heightData = [90, 92, 94, 96, 98, 100, 102, 104];



export const data = {
  labels,
  datasets: [
    {
      label: "Weight",
      data: weightData,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
    label: "Height",
      data: heightData,
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  ],
};

function Growth() {
    return (
        <div>
            <Line options={options} data={data} />
            Sathya
        </div>
      )
}

export default Growth;