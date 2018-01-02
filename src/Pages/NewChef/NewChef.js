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
                        <input type="date" name="bday" id="dobInput" />

                        <h3>For these statements, rate how much they are true for yourself on a scale of 0-10. </h3> <br /> 
                        <h5>I am comfortable working infront of others.</h5>
                        <input type="range" name="perform" min="0" max="10" /> <br />
                        <h5>I maintain a clean environment while I work.</h5>
                        <input type="range" name="points" min="0" max="10" />
                        <h5>I am efficient.</h5>
                        <input type="range" name="points" min="0" max="10" />
                        <h5></h5>
                    </form>
                </div>

            </div>
        )
    }

}

export default NewChef;