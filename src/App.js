import React from 'react';
import NavBar from './components/NavBar';
//import {  Route, Switch } from "react-router-dom";
import Books from './components/books';
import
import './App.css';
import TechTips from './components/TechTips';

function App() {
  return (
    <div className="App">
      <h1>DevNotes</h1>
      <TechTips />
      <Books  />
      <News />
    </div>
  );
}

export default App;
