import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [values, setValues] = useState({
    name:'',
    email:'',
    password:'',
  })
  console.log(values)
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('htttp//localhost:8081/login', values)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }

  return (
    <div>
      <h2>Sign-Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <strong>Name</strong>
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          onChange={e => setValues({...values, name: e.target.value})}
        ></input>
        <label>
          <strong>Email</strong>
        </label>
        <input
          type="email"
          placeholder ="Enter Email"
          name="email"
          onChange={e => setValues({...values, email: e.target.value})}
        ></input>
        <label>
          <strong>Password</strong>
        </label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={e => setValues({...values, password: e.target.value})}
        ></input>
        <input type="submit" value={'Sign up'} />
      </form>
    </div>
  );
}

export default Login;
