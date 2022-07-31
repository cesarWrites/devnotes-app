import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from './components/books';
import News from './components/News';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import TechTips from './components/TechTips';

function App() {
  return (
    <div className="App">
       <h1>DevNotes</h1>
      <Router>
        <NavBar />
      <Routes>
      <Route path="/"
      element={ <Home/> } />
      <Route path="tips" 
      element={ <TechTips/> } />
      <Route path="books" 
      element={ <Books/>} />
      <Route path="news" 
      element={ <News/> } />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
