import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ProvidersIndex from './components/ProvidersIndex';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <ProvidersIndex></ProvidersIndex>
      </div>
    );
  }
}

export default App;
