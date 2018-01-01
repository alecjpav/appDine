import React, { Component } from 'react';

import '../../App.css';

class NewChef extends Component {

    render () {
        return(
            <div>
                
                <div className="MainWindow">
                    <form>
                        <h6>First Name</h6>
                        <input type="text" name="firstName" />
                        <h6>Last Name</h6>
                        <input type="text" name="lastName" />
                        <h6>Email</h6>
                        <input type="email" name="email" />
                        <h6>Dob</h6>
                        <input type="date" name="bday" />

                        <h6>For these questions, answer on a scale of 0-10 
                        How comfortable are you performing infront of others?</h6>
                        <input type="range" name="perform" min="0" max="10" />
                        Points:
                        <input type="range" name="points" min="0" max="10" />
                        Points:
                        <input type="range" name="points" min="0" max="10" />
                    </form>
                </div>

            </div>
        )
    }

}

export default NewChef;