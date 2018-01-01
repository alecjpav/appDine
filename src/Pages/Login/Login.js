import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';

import '../../App.css';

class Login extends Component {


    handleLogin = () => console.log('yes')


    render() {
        return (
            <div>
                <div className='Header'>
                    <h1>
                        Homestaurant, we're here
                    </h1>
                </div>

            <LoginForm />

            </div>
        )
    }
}

export default Login;