import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cats.css';
import {
    getSlideshowDelay,
    getCatImageUrl,
    getCatImageExternalUrl, getDisplayMode
} from "../selectors/catSelectors";
import {setSlideshowDelay} from "../actions/catActions";
import * as DisplayMode from '../constants/displayMode';
import * as actions from "../actions/catActions";

class Cats extends Component {
  handleSlideshowSpeedChange = (event) => {
    const value = event.target.value;

    this.props.dispatch(setSlideshowDelay(value));
  };

  handleSetDisplayModeGif = (event) => {
    this.props.dispatch(actions.setDisplayMode(DisplayMode.Gifs));
  };

  handleSetDisplayModePicture = (event) => {
    this.props.dispatch(actions.setDisplayMode(DisplayMode.Pictures));
  };

  render() {
    return (
      <div className={`cats ${this.props.className}`}>
        <a className="cats__image" href={this.props.catLink} target="_blank" rel="noopener">
          <img src={this.props.cat} />
        </a>
        <div className="cats__controls">
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cat: getCatImageUrl(state),
  catLink: getCatImageExternalUrl(state),
  displayMode: getDisplayMode(state),
  slideshowDelay: getSlideshowDelay(state),
});

export default connect(mapStateToProps)(Cats);
