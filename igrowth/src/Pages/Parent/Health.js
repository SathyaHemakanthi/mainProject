import React from 'react';
import './health.css';

const babyHealthTips = {
  newborn: [
    "Breastfeed your baby exclusively for the first 6 months.",
    "Ensure a safe and comfortable sleep environment for your baby.",
    "Wash your hands before handling your baby.",
    "Vaccinate your baby according to the recommended schedule.",
    "Provide plenty of tummy time for your baby to strengthen their muscles."
  ],
  twoMonths: [
    "Introduce tummy time for your baby to encourage head control.",
    "Start tracking your baby's growth and development with your pediatrician.",
    "Engage in interactive play to promote your baby's sensory development.",
    "Continue to follow the recommended vaccination schedule.",
    "Practice safe sleep habits for your baby."
  ],
  fourMonths: [
    "Introduce your baby to age-appropriate toys and activities.",
    "Begin the process of weaning if you are breastfeeding.",
    "Monitor your baby's milestones and development.",
    "Provide a variety of sensory experiences for your baby.",
    "Maintain a consistent sleep schedule."
  ]
};

function Health() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Health Tips for Newborn Babies</h1>
        <ul className="HealthTips">
          {babyHealthTips.newborn.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>

        <h1>Health Tips for Two-Month-Old Babies</h1>
        <ul className="HealthTips">
          {babyHealthTips.twoMonths.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>

        <h1>Health Tips for Four-Month-Old Babies</h1>
        <ul className="HealthTips">
          {babyHealthTips.fourMonths.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default Health;

