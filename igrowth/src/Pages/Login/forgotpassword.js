import React, { Component } from 'react';
import './forgotpassword.css';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      messageColor: 'black',
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;

    if (this.isValidEmail(email)) {
      // Simulate sending a password reset email
      this.setState({
        message: 'Password reset link sent to ' + email,
        messageColor: 'green',
      });
    } else {
      this.setState({
        message: 'Please enter a valid email address.',
        messageColor: 'red',
      });
    }
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  render() {
    return (
      <div className="forgot-password-container">
        <div className="forgot-password-content">
          <h1 className="forgot-password-title">Forgot Password</h1>
          <p className="forgot-password-description">Enter your email address to reset your password.</p>
          <form onSubmit={this.handleFormSubmit}>
            <label className="forgot-password-label" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleEmailChange}
              className="forgot-password-input"
            />
            <button type="submit" className="forgot-password-button">
              Submit
            </button>
          </form>
          <p id="message" className="forgot-password-message" style={{ color: this.state.messageColor }}>
            {this.state.message}
          </p>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
