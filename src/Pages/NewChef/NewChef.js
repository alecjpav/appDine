import React, { Component } from 'react';

import '../../App.css';

class NewChef extends Component {

    render () {
        return(
            <div>
                
                <div className="MainWindow">
                    <form>
                        <input type="text" name="email" placeholder="Email" />
                        <input type="text" name="firstName" />
                    </form>
                </div>

            </div>
        )
    }

}

export default NewChef;