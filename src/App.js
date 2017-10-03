import React, { Component } from 'react';
import Tabs from './components/tabs.js';
import './App.css';
import { channels, streams } from './api.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header><h1 className="text-center">Twitch Streamer</h1></header>
        <Tabs channels={channels} streams={streams}/>
      </div>
    );
  }
}

export default App;
