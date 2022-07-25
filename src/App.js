import React from 'react';
import NavBar from './components/NavBar';
//import {  Route, Switch } from "react-router-dom";
import Books from './components/books';
import News from './components/News';
import NewTechTipForm from './components/NewTip';
import './App.css';
import TechTips from './components/TechTips';

function App() {
  return (
    <div className="App">
      <h1>DevNotes</h1>
      <TechTips />
      <Books  />
      <News />
      <NewTechTipForm />
    </div>
  );
}

export default App;
