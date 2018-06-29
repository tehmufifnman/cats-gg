import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cats.css';
import {getCat, getSlideshowDelay} from "../selectors/catSelectors";
import {setSlideshowDelay} from "../actions/catActions";

class Cats extends Component {
  handleSlideshowSpeedChange = (event) => {
    const value = event.target.value;

    this.props.dispatch(setSlideshowDelay(value));
  };

  render() {
    return (
      <div className={`cats ${this.props.className}`}>
        <a className="cats__image" href={this.props.cat} target="_blank" rel="noopener">
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cat: getCat(state),
  slideshowDelay: getSlideshowDelay(state),
});

export default connect(mapStateToProps)(Cats);
