import React, { Component } from 'react';
import Axios from 'axios';

import '../../App.css';

class NewChef extends Component {

    constructor() {
      super();
      
      this.state = {
        firstName:'',
        lastName:'',
        email:'',
        dob:'',
        exp:''
      };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // Axios.post('/user', {
        //     this.state
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }

    render () {
        const { firstName, lastName, email, dob, exp } =this.state;
        return(
            <div>
                
                <div className="MainWindow">
                    <form onSubmit={this.handleSubmit}>

                        <h6>First Name</h6>
                        <input type="text"
                        name="firstName" 
                        value={firstName} 
                        onChange={this.onChange} />

                        <h6>Last Name</h6>
                        <input type="text"
                        name="lastName" 
                        value={lastName} 
                        onChange={this.onChange} />

                        <h6>Email</h6>
                        <input type="email" 
                        name="email" 
                        value={email} 
                        onChange={this.onChange} />

                        <h6>Dob</h6>
                        <input type="date"
                        name="dob" 
                        value={dob} 
                        onChange={this.onChange} />

                        <h6>How many years of experience do you have?</h6>
                        <input type="number"
                        name="exp" 
                        value={exp} 
                        onChange={this.onChange} />
                        
                        <br />
                        <input type="submit"
                        value="submit" />
                        
                    </form>
                </div>

            </div>
        )
    }

}

export default NewChef;