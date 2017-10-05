import React, { Component } from 'react';
import Tabs from './components/tabs.js';
import './App.css';
import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="text-center">
            <img alt="" style={{width: '2em'}} src={logo} />
            <br />
            <strong>Twitch Streamer</strong>
            <br />
            <small>See what's streaming on Twitch.tv</small>
          </h1>
        </header>
        <Tabs />
      </div>
    );
  }
}

export default App;
