import React, { Component } from 'react';

import '../../App.css';

class NewChef extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        // fetch('/api/form-submit-url', {
        //   method: 'POST',
        //   body: data,
        // });
      }

    render () {
        return(
            <div>
                
                <div className="MainWindow">
                    <form onSubmit={this.handleSubmit}>

                        <h6>User</h6>
                        <input type="text"
                        name="userName"
                        onChange={this.handleUserChange} />

                        <h6>Last Name</h6>
                        <input type="text"
                        name="password" 
                        onChange={this.handlePasswordChange} />

                        <h6>Email</h6>
                        <input type="email" 
                        name="email"
                        onChange={this.handleEmailChange} />

                        <h6>Dob</h6>
                        <input type="date"
                        name="bday"
                        onChange={this.handleExpChange} />

                        <h6>How many years of experience do you have?</h6>
                        <input type="number"
                        name="exp" 
                        onChange={this.handleExpChange} />

                        <input type="submit" value="submit" />
                    </form>
                </div>

            </div>
        )
    }

}

export default NewChef;