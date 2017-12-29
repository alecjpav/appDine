import React, { Component } from 'react';

import '../../../App.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className='Header'>
                    <h1>
                        Homestaurant
                    </h1>
                </div>

                <div className='LoginForm'>
                    UserName                 
                    <input type='text'/>
                    PassWord
                    <input type='password'/>
                </div>
            </div>
        )
    }
}

export default Header;