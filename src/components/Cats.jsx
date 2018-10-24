import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Cats.css';
import * as catSelectors from "../selectors/catSelectors";
import * as DisplayMode from '../constants/displayMode';
import * as catActions from "../actions/catActions";
import * as slideshowActions from '../actions/slideshowActions';
import * as slideshowSelectors from '../selectors/slideshowSelectors';

class Cats extends PureComponent {
  handlePlayPauseToggle = () => {
    if (this.props.isPlaying) {
      this.props.dispatch(slideshowActions.pause());
    } else {
      this.props.dispatch(slideshowActions.play());
    }
  };

  handleSlideshowSpeedChange = (event) => {
    const value = event.target.value;

    this.props.dispatch(catActions.setSlideshowDelay(value));
  };

  handleSetDisplayModeGif = (event) => {
    this.props.dispatch(catActions.setDisplayMode(DisplayMode.Gifs));
  };

  handleSetDisplayModePicture = (event) => {
    this.props.dispatch(catActions.setDisplayMode(DisplayMode.Pictures));
  };

  render() {
    return (
      <div className={`cats ${this.props.className}`}>
        <a className="cats__image" href={this.props.currentImage} target="_blank" rel="noopener">
          <img src={this.props.currentImage} />
        </a>
        {!this.props.streamModeEnabled &&
          <div className="cats__controls">
            <button
              className="cats-control"
              onClick={this.handlePlayPauseToggle}
              title="Start/Stop Slideshow"
            >
              {this.props.isPlaying ? 'Pause' : 'Play'}
            </button>
            <label className="cats-control">
              Delay
              <input type="number"
                     className="cats-control__delay-number-input"
                     onChange={this.handleSlideshowSpeedChange}
                     value={this.props.slideshowDelay}/>
              (sec)
              <input type="range"
                     className="cats-control__delay-number-range"
                     min={0.5}
                     max={5}
                     step={0.5}
                     onChange={this.handleSlideshowSpeedChange}
                     value={this.props.slideshowDelay}/>
            </label>
            <button
              className="cats-control"
              disabled={this.props.displayMode === DisplayMode.Gifs}
              onClick={this.handleSetDisplayModeGif}
              title="View Cat Gifs"
            >
              Gifs
            </button>
            <button
              className="cats-control"
              disabled={this.props.displayMode === DisplayMode.Pictures}
              onClick={this.handleSetDisplayModePicture}
              title="View Cat Pictures"
            >
              Pics
            </button>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cat: catSelectors.getCatImageUrl(state),
  catLink: catSelectors.getCatImageExternalUrl(state),
  currentImage: slideshowSelectors.getCurrentImage(state),
  displayMode: catSelectors.getDisplayMode(state),
  isPlaying: slideshowSelectors.getIsPlaying(state),
  slideshowDelay: catSelectors.getSlideshowDelay(state),
  streamModeEnabled: catSelectors.getStreamModeEnabled(state),
});

export default connect(mapStateToProps)(Cats);
