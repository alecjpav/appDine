import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';

import '../../App.css';

class Login extends Component {


    handleLogin = () => console.log('yes');


    render() {
        return (
            <div>
                <div className='Header'>
                    <h1> Homestaurant, we're here </h1>
                </div>
                <div className='SubSilo'>
                    <LoginForm onClick={this.handleLogin}/>
                </div>
            </div>
        )
    }
}

export default Login;
