import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageGallery from './shutterstock/components/ImageGallery.js'
import baguetteBox from 'baguettebox.js';
import Banner from './shutterstock/components/Banner.js'

class App extends Component {
    componentDidMount() {
        baguetteBox.run('.cards-gallery', { animation: 'slideIn'});
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Welcome to my awesome photo gallery powered by Shutterstock.</h1>
        </header>
          <section class="gallery-block cards-gallery">
              <div class="container">
                <ImageGallery/>
              </div>
          </section>
      </div>
    );
  }
}

export default App;
