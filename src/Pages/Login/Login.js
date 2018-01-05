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

            <LoginForm onClick={this.handleLogin}/>

            </div>
        )
    }
}

export default Login;
