import React, { Component } from 'react';
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
          <div className="jumbotron jumbotron-fluid">
              <div className="container">
                  <h1 className="display-4">My Photo Gallery</h1>
                  <p className="lead">Welcome to my awesome photo gallery powered by Shutterstock.</p>
              </div>
          </div>
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
