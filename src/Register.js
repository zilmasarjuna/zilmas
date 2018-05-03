import React from 'react';
import PropTypes from 'prop-types';

import './Register.css';
import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';
import { userSignupRequest } from './action/signupAction';

class RegisterPage extends React.Component {
  render() {
    const {userSignupRequest} = this.props;
    return (
      <RegisterForm userSignupRequest={userSignupRequest}/>
    
    )
  }
}
RegisterPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default connect((state) => { return{} }, { userSignupRequest }) (RegisterPage);
