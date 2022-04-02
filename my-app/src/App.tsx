import React from 'react';
import './App.css';
import Leftmenu from './components/Leftmenu/Leftmenu';
import Nav from './components/Nav/Nav';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Leftmenu />
    </div>

  );
}

export default App;
