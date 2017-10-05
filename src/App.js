import React, { Component } from 'react';
import Tabs from './components/tabs.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header><h1 className="text-center"></h1></header>
        <Tabs />
      </div>
    );
  }
}

export default App;
