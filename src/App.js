import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Pages/Login/Login';
import Home from './components/Pages/Home/Home';

import './App.css';


const App = () =>
  <Router>
    <div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>;


export default App;
