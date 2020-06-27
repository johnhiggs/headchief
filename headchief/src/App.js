import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import About from './About'
import Beers from './Beers'
import Nav from './Nav'
import React from 'react';

function App() {
  return (
    <Router>
        <div className="App">
            <Nav />
            <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/beers" component={ Beers } />
            </Switch>
        </div>
    </Router>
  );
}

const Home = () => (
    <div>
        <h1>Headchief Brewing</h1>
    </div>
);

export default App;
