import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageGallery from './shutterstock/components/ImageGallery.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload on develop branch.
        </p>
        <ImageGallery/>
      </div>
    );
  }
}

export default App;
