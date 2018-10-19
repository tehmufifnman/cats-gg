import React, { Component } from 'react';
import './App.css';
import Cats from "./Cats";
import CatFact from "./CatFact";
import {connect} from 'react-redux';
import * as catSelectors from "../selectors/catSelectors";
import * as DisplayMode from '../constants/displayMode';

class App extends Component {
  render() {
    return (
      <div className={[
        'app',
        this.props.streamModeEnabled ? 'stream-mode-enabled' : '',
      ].join(' ')}>
        {!this.props.streamModeEnabled &&
          <div className="app__header">
            <h1 className="heading">Cats.gg</h1>
            <h3 className="sub-heading">Bringing You Sweet Cat Pics Since 2018 😻</h3>
            <CatFact/>
          </div>
        }
        <Cats className="app__body"/>
        {!this.props.streamModeEnabled &&
          <div className="app__footer">
            {this.props.displayMode === DisplayMode.Pictures &&
              <p className="app__footer-message">Photos from Flickr. Blame their poor tagging quality for images that are not cats.</p>
            }
            {this.props.displayMode === DisplayMode.Gifs &&
              <React.Fragment>
                <p className="app__footer-message">Gifs from Giphy.</p>
                <img className="app__giphy-attribution" src="/images/powered-by-giphy.png"/>
              </React.Fragment>
            }
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  displayMode: catSelectors.getDisplayMode(state),
  streamModeEnabled: catSelectors.getStreamModeEnabled(state),
});

export default connect(mapStateToProps)(App);
