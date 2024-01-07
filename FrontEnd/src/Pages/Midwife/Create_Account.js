// import React, { useState } from 'react';
// import './create_account.css';

// function Create_Account() {
//   const [baby, setBaby] = useState({
//     name: '',
//     age: '',
//     birthday: '',
//     parentName: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBaby({ ...baby, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(baby);
//     // You can perform further actions like sending the data to a server here
//   };

//   return (
//     <div className="baby-form">
//       <h2>Enter Baby Details</h2>
      
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Baby's Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={baby.name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="age">Age:</label>
//           <input
//             type="number"
//             id="age"
//             name="age"
//             value={baby.age}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="birthday">Birthday:</label>
//           <input
//             type="date"
//             id="birthday"
//             name="birthday"
//             value={baby.birthday}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender">Gender:</label>
//           <input
//             type="text"
//             id="gender"
//             name="gender"
//             value={baby.gender}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="parentName">Parent's Name:</label>
//           <input
//             type="text"
//             id="parentName"
//             name="parentName"
//             value={baby.parentName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Create_Account;






import React, { useState } from 'react';
import './create_account.css';

function Create_Account() {
  const [baby, setBaby] = useState({
    id: '',
    name: '',
    age: '',
    birthday: '',
    gender: '',
    birthCerNo: '',
    parentName: '',
    parentAddress: '',
    parentNic: '',
    regNo: '',
    regDate: '',
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
      
      <form className="form" onSubmit={handleSubmit}>

      <div className="form-group">
        <div className='baby_detail'>
        <h4>Baby Details</h4>
          <label htmlFor="child-id">Child ID:</label>
          <input
            type="number"
            id="child-id"
            name="child-id"
            value={baby.id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Child's Full Name:</label>
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
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={baby.gender}
            onChange={handleInputChange}
          />
        </div>

        

       
        <div className="form-group">
          <label htmlFor="birthCerNo">Birth Certificate Number:</label>
          <input
            type="number"
            id="birthCerNo"
            name="birthCerNo"
            value={baby.birthCerNo}
            onChange={handleInputChange}
          />
        </div>

        </div>

        <div className='parent_detail'>
          
          <h4>Parent Details</h4>

          
        <div className="form-group">
          <label htmlFor="motherName">Mother's Name:</label>
          <input
            type="text"
            id="motherName"
            name="motherName"
            value={baby.motherName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="fatherName">Father's Name:</label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={baby.fatherName}
            onChange={handleInputChange}
          />
        </div>


        
        <div className="form-group">
          <label htmlFor="gardianName">Gardian's Name:</label>
          <input
            type="text"
            id="gardianName"
            name="gardianName"
            value={baby.gardianName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="parentAddress">Parent's Address:</label>
          <input
            type="text"
            id="parentAddress"
            name="parentAddress"
            value={baby.parentAddress}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="parentNic">Parent's NIC:</label>
          <input
            type="text"
            id="parentNic"
            name="parentNic"
            value={baby.parentNic}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="regNo">Registration Number:</label>
          <input
            type="number"
            id="regNo"
            name="regNo"
            value={baby.regNo}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="regDate">Registration Date:</label>
          <input
            type="date"
            id="regDate"
            name="regDate"
            value={baby.regDate}
            onChange={handleInputChange}
          />
        </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default Create_Account;

