import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import NewChef from './Pages/NewChef/NewChef';

import './App.css';


const App = () =>
  <Router>
    <div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/newchef" component={NewChef} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>;


export default App;
