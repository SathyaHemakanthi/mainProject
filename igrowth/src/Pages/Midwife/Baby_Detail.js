import React from 'react';
import './baby_detail.css';
import SearchBar from './SearchBar';

function Baby_Detail() {
  const data = [
    { name: 'Name 1', id: 'Value 1', description1: 'description1' , description2: 'Isuru Madusanka'},
    { name: 'Name 2', id: 'Value 2', description1: 'description2' },
    { name: 'Name 3', id: 'Value 3', description1: 'description3' },
  ];

  const handleButtonClick1 = (description1) => {
    alert(`Button clicked for: ${description1}`);
  };

  const handleButtonClick2 = (description2) => {
    alert(`Button clicked for: ${description2}`);
  };

  return (
    
    <div >
      <div className='table-search'>
   
     <SearchBar />
     </div>
     <div className="table-container">
     
      <table className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.id}</td>
              <td>
                <button className='baby-search-button01' onClick={() => handleButtonClick1(row.description1)}>Confirm</button>
                <button className='baby-search-button02'onClick={() => handleButtonClick2(row.description2)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Baby_Detail;
