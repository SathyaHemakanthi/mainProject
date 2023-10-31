// import React from "react";
// //import { Link } from 'react-router-dom';
// import "./form.css";

// function Form() {
//     return (
//       <div>

//         </div>
//     )
//   }
  
//   export default Form;

// BabyForm.js
import React, { useState } from 'react';
import './BabyForm.css';

function BabyForm() {
  const [baby, setBaby] = useState({
    name: '',
    age: '',
    birthday: '',
    parentName: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBaby({ ...baby, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(baby);
    // You can perform further actions like sending the data to a server here
  };

  return (
    <div className="baby-form">
      <h2>Enter Baby Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Baby's Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={baby.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={baby.age}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthday">Birthday:</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={baby.birthday}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="parentName">Parent's Name:</label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={baby.parentName}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BabyForm;
