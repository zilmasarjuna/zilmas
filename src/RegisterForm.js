import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Register.css';

class RegisterForm extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      fullName:'',
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name] : e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }
  render() {
    return (
    <div className="register-form">
      <div className="register">
        <form onSubmit={this.onSubmit}>
          <input 
            type="text" 
            name="fullName" 
            placeholder="Fullname" 
            value={this.state.fullName} 
            onChange={this.onChange}
          />

          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={this.state.email} 
            onChange={this.onChange}
          />

          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={this.state.password}
            onChange={this.onChange}
          />


          <button>Login</button>
        </form>

        <h3>Not a member ? <a href="Login.html">Login</a></h3>
      </div>
    </div>
    )
  }
}


RegisterForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}
export default RegisterForm;