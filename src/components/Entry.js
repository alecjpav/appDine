import React, { Component } from 'react';

import '../App.css';

class Entry extends Component {
    render() {
        return (
            <div className='Silo'>
                <h1>The Homestaurant is here give you dining exerience of a restaurant in the comfort of your own home</h1>

                <div className='SubSilo'>
                    <div className='Section'>
                        <h3>If you are dining with us click here</h3>
                    </div>

                    <div className='Section'>
                        <h3>Are you looking to become a Homestaurant Chef? Click here</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Entry;