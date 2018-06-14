import React, { Component } from 'react';
import './App.css';
import Cats from "./Cats";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <h1 className="heading">Cats.gg</h1>
          <h3 className="sub-heading">Bringing You Sweet Cat Pics Since 2018 😻</h3>
        </div>
        <Cats className="app__body"/>
        <div className="app__footer">
          <p>Photos from Flickr. Blame their poor tagging quality for images that are not cats.</p>
        </div>
      </div>
    );
  }
}

export default App;
