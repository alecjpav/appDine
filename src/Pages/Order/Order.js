import React, { Component } from 'react';

import '../../App.css';

class Order extends Component {

    constructor() {
      super();
      this.state = {
        
      };
    }

    render () {
        const {  } =this.state;
        return(
            <div className="MainWindow">
                
                <div className='Silo'>
                    <form onSubmit={this.handleSubmit}>

                        <h6>Vegetbales</h6><span>Decide what vegetables you would like to have show up!</span>
                        <input type="text"
                        name="veg"  />

                        <h6>Vegetbales</h6>
                        <input type="text"
                        name="veg"  />
                        <span>Decide what vegetables you would like to have show up!</span>

                        <br />
                        <input type="submit"
                        value="submit" />
                    </form>  

                    <div className='Section'>
                        <p>Decide what vegetables you would like to have show up!</p>
                    </div>

                    <div className='Section'>
                        <p>Decide what vegetables you would like to have show up!</p>
                    </div>
                </div>

            </div>
        )
    }

}

export default Order;