// import React from 'react'
// import './measure.css';
// import SearchBar from './SearchBar';

// function Measure() {
  
//   return (
//     <>
    
//     <div className='search-container'>
//       {/* <h1>User Search</h1> */}
//       <SearchBar />
      
//     </div>

//     </>
//   )
// }

// export default Measure;

// Measure.js

// import React, { useState } from 'react';
// import './measure.css';
// import SearchBar from './SearchBar';

// function Measure() {
//   const [formData, setFormData] = useState({
//     childId: '',
//     childName: '',
//     month: '',
//     weight: '',
//     height: '',
//     headCircumference: '',
//   });

//   const [measurements, setMeasurements] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleAdd = () => {
//     setMeasurements([...measurements, formData]);
//     setFormData({
//       childId: '',
//       childName: '',
//       month: '',
//       weight: '',
//       height: '',
//       headCircumference: '',
//     });
//   };

//   return (
//     <>
//     <div className='search-bar-container'>
//         <SearchBar />
//       </div>
//       <div className='measure-container'>
//         <div className='form-container'>
//           <h2>Child Measurement Form</h2>
//           <form>
//             <div className='form-group'>
//               <label>Child ID:</label>
//               <input
//                 type='text'
//                 name='childId'
//                 value={formData.childId}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className='form-group'>
//               <label>Child Name:</label>
//               <input
//                 type='text'
//                 name='childName'
//                 value={formData.childName}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className='form-group'>
//               <label>Month:</label>
//               <input
//                 type='text'
//                 name='month'
//                 value={formData.month}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className='form-group'>
//               <label>Weight:</label>
//               <input
//                 type='text'
//                 name='weight'
//                 value={formData.weight}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className='form-group'>
//               <label>Height:</label>
//               <input
//                 type='text'
//                 name='height'
//                 value={formData.height}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className='form-group'>
//               <label>Head Circumference:</label>
//               <input
//                 type='text'
//                 name='headCircumference'
//                 value={formData.headCircumference}
//                 onChange={handleChange}
//               />
//             </div>
//             <button type='button' onClick={handleAdd}>
//               Add Measurement
//             </button>
//           </form>
//         </div>

//         <div className='table-container'>
//           <h2>Measurement Table</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th rowspan="2">Month</th>
//                 <th >-1SD</th>
//                 <th>+1SD</th>
//                 <th>-2SD</th>
//                 <th>+2SD</th>
//                 <th>-3SD</th>
//                 <th>+3SD</th>
//                 <th>-4SD</th>
//                 <th>+4SD</th>
//               </tr>
//               <tr className='gender'>
//                 <td>female</td>
//                 <td>male</td>
//                 <td>female</td>
//                 <td>male</td>
//                 <td>female</td>
//                 <td>male</td>
//                 <td>female</td>
//                 <td>male</td>
//               </tr>
              
//               <tr className='table_data'>
//                 <td>2</td>
//                 <td>5</td>
//                 <td>7</td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//                 <td></td>
//               </tr>
              
//             </thead>
//             <tbody>
//               {measurements.map((measurement, index) => (
//                 <tr key={index}>
//                   <td>{measurement.childId}</td>
//                   <td>{measurement.childName}</td>
//                   <td>{measurement.month}</td>
//                   <td>{measurement.weight}</td>
//                   <td>{measurement.height}</td>
//                   <td>{measurement.headCircumference}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Measure;


// Measure.js

import React, { useState } from 'react';
import './measure.css';
import SearchBar from './SearchBar';

function Measure() {
  const [formData, setFormData] = useState({
    childId: '',
    childName: '',
    month: '',
    weight: '',
    height: '',
    headCircumference: '',
  });

  const [measurements, setMeasurements] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAdd = () => {
    setMeasurements([...measurements, formData]);
    setFormData({
      childId: '',
      childName: '',
      month: '',
      weight: '',
      height: '',
      headCircumference: '',
    });
  };

  return (
    <div className='measure-page'>
      <div className='search-bar-container'>
        <SearchBar />
      </div>

      <div className='measure-container'>
        <div className='tab'>
          <h2>Measurement Table</h2>
          <table>
            <thead>
              <tr>
                <th rowspan="2">Month</th>
                <th colspan="2">-1SD</th>
                <th colspan="2">+1SD</th>
                <th colspan="2">-2SD</th>
                <th colspan="2">+2SD</th>
              </tr>
              <tr className='gender'>
                <td>female</td>
                <td>male</td>
                <td>female</td>
                <td>male</td>
                <td>female</td>
                <td>male</td>
                <td>female</td>
                <td>male</td>
                </tr>
              
              <tr className='table_data'>
                <td>2</td>
                <td>5</td>
                <td>7</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              
            </thead>
            {/* <tbody>
              {measurements.map((measurement, index) => (
                <tr key={index}>
                  <td>{measurement.childId}</td>
                  <td>{measurement.childName}</td>
                  <td>{measurement.month}</td>
                  <td>{measurement.weight}</td>
                  <td>{measurement.height}</td>
                  <td>{measurement.headCircumference}</td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </div>

        <div className='form-container'>
          <h2>Child Measurement Form</h2>
          
          <form>
            <div className='form-group'>
              <label>Child ID:</label>
              <input
                type='text'
                name='childId'
                value={formData.childId}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label>Child Name:</label>
              <input
                type='text'
                name='childName'
                value={formData.childName}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label>Month:</label>
              <input
                type='text'
                name='month'
                value={formData.month}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label>Weight:</label>
              <input
                type='text'
                name='weight'
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label>Height:</label>
              <input
                type='text'
                name='height'
                value={formData.height}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label>Head Circumference:</label>
              <input
                type='text'
                name='headCircumference'
                value={formData.headCircumference}
                onChange={handleChange}
              />
            </div>
            <button type='button' onClick={handleAdd}>
              Add
            </button>
          </form>

          {/* <div className='measurement-list'>
            <h2>Measurement List</h2>
            <ul>
              {measurements.map((measurement, index) => (
                <li key={index}>
                  {measurement.childId} - {measurement.childName} - {measurement.month}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Measure;

