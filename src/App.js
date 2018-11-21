import React from 'react';
import { BrowserRouter as Router, Route, Redirect, } from 'react-router-dom';

import Home from './components/Home';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={"app"}>

          <Route path="/home" render={() => (
              <Home />
          )} />

          <Route exact path="/" render={() => (
            <Redirect to="home" />
          )} />

          <Route path="/*" render={() => (
              <Redirect to="home" />
          )} />

        </div>

      </Router>
    );
  }
}

export default App;
