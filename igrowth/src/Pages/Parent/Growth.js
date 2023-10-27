// import React from 'react'
// import { Link } from 'react-router-dom';


// export default Growth;

// GrowthChart.jsimport React from 'react';
import { Line } from 'react-chartjs-2';

function Growth() {

  const data = {
    labels: ['Month 1', 'Month 2', 'Month 3'], 
    datasets: [
      {
        label: 'Baby Weight (kg)',
        data: [3.5, 4.0, 4.5], 
        borderColor: 'blue',
      },
      {
        label: 'Baby Height (cm)',
        data: [50, 55, 60], 
        borderColor: 'green',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default Growth;
