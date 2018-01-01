import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';

import '../../App.css';

class Home extends Component {
    render() {
        return (
            
            <div className='Silo'>

                <div className='Title'> 
                    <h1>We came, we cooked, we served... You never left your living room.</h1>
                </div>

                <div className='SubSilo'>
                    <div className='Section'>
                        <h3>
                            If you are dining with us 
                            <a href='/Login'> click here </a> 
                        </h3>
                    </div>

                    <div className='Section'>
                        <h3>
                            Are you looking to become a Homestaurant Chef? 
                            <a href='./../NewChef'> Click Here </a>
                        </h3>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;