import React from 'react';
import NavBar from './components/NavBar';
import {  BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Books from './components/books';
import News from './components/News';
import NewTechTipForm from './components/NewTip';
import './App.css';
import Home from './components/Home';
import TechTips from './components/TechTips';

function App() {
  return (
    <div className="App">
      <h1>DevNotes</h1>
    <Router>
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
      <Route path="/tips">
        <TechTips />
      </Route>
      <Route path="/books">
        <Books />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
