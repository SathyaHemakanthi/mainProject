import React, { Component } from 'react';
import './loginpage.css';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    console.log('Username:', username);
    console.log('Password:', password);
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        
        <div className='outerbox' style={{ display: 'flex' }}>
          <div className='pic'>

          </div>
          <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
              <label>
                 { /* Username:  */ }
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleInputChange}
                  required
                  placeholder='Username'
                  className='inpbox'
                />
              </label>
              <br />
              <label>
                {/* Password */}
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleInputChange}
                  required
                  placeholder='Password'
                  className='inpbox'
                />
              </label>
              <br />
              <button type="submit">Login</button>
              <div>
                <a href='forgotpassword.js'>forgot password?</a>
              </div>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default LoginPage;
