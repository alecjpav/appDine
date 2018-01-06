import React, { Component } from 'react';

import '../../App.css';

class Home extends Component {
    render() {
        return (
            
            <div className='Silo'>

                <header className="header">
                <nav>
                    <div class="container">
                        <div>
                            <ul>
                                <li> <a href="/">Home</a> </li>
                                <li> <a href="./../NewChef">Diner Login</a> </li>
                                <li> <a href="./../Order">Order Now!</a> </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                </header>

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