import './App.css';
import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Components/Home.js';
import Data from './Components/Data.js';
import Cool from './Components/Cool.js';
import Nav from './Components/Nav.js';
import Color from './Components/Color.js';

function App() {
  return (
      <Router>
        <div className="App">
            <Nav/>
          <Switch>
              <Route path={"/cool"} component={Cool}/>
              <Route path={"/data"} component={Data}/>
            <Route exact path={"/"} component={Home}/>
              <Route exact path={"/:id"} component={Color}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
