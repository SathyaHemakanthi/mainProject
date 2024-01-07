import React, { useState } from 'react';
import './searchbar.css';

function SearchBar() {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = () => {
    // Implement the search logic here using the 'id' and 'username' state variables
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="Search by ID"
        value={id}
        onChange={handleIdChange}
      />
      <input
        className="input"
        type="text"
        placeholder="Search by Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
