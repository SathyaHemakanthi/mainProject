import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Write() {
  const [userName, setUsername] = useState('');
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleForm(event) {
    event.preventDefault();
    let userData = {
      userName: userName,
      email: userEmail,
      password: password,
    };

    console.log('Clicked');
    fetch("/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
  }

  return (
    <div>
      <h2>Sign-Up</h2>
      <form onSubmit={handleForm}>
        <label>
          <strong>Name</strong>
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label>
          <strong>Email</strong>
        </label>
        <input
          type="email"
          placeholder ="Enter Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>
          <strong>Password</strong>
        </label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input type="submit" value={'Login Form'} />
      </form>
    </div>
  );
}

export default Write;
