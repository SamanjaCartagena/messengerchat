import React from 'react';
import {BrowserRouter as Router, Routes,Route, BrowserRouter} from 'react-router-dom';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import Register from './containers/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" component={HomePage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/signup" component={Register}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
