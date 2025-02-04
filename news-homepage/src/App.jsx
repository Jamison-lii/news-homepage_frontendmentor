import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Block from   './Components/Block'

const App = () => {
  return (
    <div className="App-container">
      <Navbar/>
      <Block/>
    </div>
  );
};

export default App;
