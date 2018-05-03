import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import RegisterPage from './Register';
import LoginPage from './Login';

class App extends React.Component {

    render() {
        const { alert } = this.props;
        return (
             <Router>
                <div>
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                 </div>
             </Router>
                    
        ); 
    }
}

export default App ; 