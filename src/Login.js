import React from 'react';

import './Login.css';

class LoginPage extends React.Component {
  render() {

    return (
      <div className="login-form">
        <div className="login">
          <form name="form">
            <input type="email" name="username" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button>Login</button>
          </form>

          <h3>Not a member ? <a href="Login.html">Sign up Now</a></h3>
        </div>
      </div>
    )
  }
}

export default LoginPage;
