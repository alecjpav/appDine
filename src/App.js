import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import Router

import './App.css';

import Entry from './components/Entry';

{/* <Route exact path='/'/> */}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">


        </header>
        <Entry />
      </div>
    );
  }
}

export default App;
