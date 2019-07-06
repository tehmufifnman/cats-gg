import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Cats.css';
import * as catSelectors from "../selectors/catSelectors";
import * as DisplayMode from '../constants/displayMode';
import * as catActions from "../actions/catActions";
import * as slideshowActions from '../actions/slideshowActions';
import * as slideshowSelectors from '../selectors/slideshowSelectors';
import * as analytics from '../utils/analytics';
import { EventCategories, EventActions } from '../constants/analytics';

class Cats extends PureComponent {
  handlePreviousClick = () => {
    this.props.dispatch(slideshowActions.previousImage());
    analytics.logEvent({
      eventCategory: EventCategories.Paging,
      eventAction: EventActions.Paging_Previous,
    });
  };

  handleNextClick = () => {
    this.props.dispatch(slideshowActions.nextImage());
    analytics.logEvent({
      eventCategory: EventCategories.Paging,
      eventAction: EventActions.Paging_Next,
    });
  };

  handlePlayPauseToggle = () => {
    if (this.props.isPlaying) {
      this.props.dispatch(slideshowActions.pause());
      analytics.logEvent({
        eventCategory: EventCategories.PlayPause,
        eventAction: EventActions.PlayPause_Stop,
      });
    } else {
      this.props.dispatch(slideshowActions.play());
      analytics.logEvent({
        eventCategory: EventCategories.PlayPause,
        eventAction: EventActions.PlayPause_Start,
      });
    }
  };

  handleSlideshowSpeedChange = (event) => {
    const value = parseInt(event.target.value, 10);

    this.props.dispatch(slideshowActions.setDelay(value));

    analytics.logEvent({
      eventCategory: EventCategories.SlideshowDelay,
      eventAction: EventActions.SlideshowDelay_Changed,
      eventValue: value,
    });
  };

  handleSetDisplayMode = displayMode => {
    this.props.dispatch(catActions.setDisplayMode(displayMode));

    analytics.logEvent({
      eventCategory: EventCategories.DisplayMode,
      eventAction: EventActions.DisplayMode_Changed,
      eventLabel: displayMode,
    });
  };

  handleImageClick = () => {
    analytics.logEvent({
      eventCategory: EventCategories.Image,
      eventAction: EventActions.Image_Click,
    });
  };

  render() {
    return (
      <div className={`cats ${this.props.className}`}>
        <a
          className="cats__image"
          href={this.props.currentImage}
          target="_blank"
          rel="noopener"
          onClick={this.handleImageClick}
        >
          <img src={this.props.currentImage} />
        </a>
        {!this.props.streamModeEnabled &&
          <div className="cats__controls">
            <div className="cats__controls">
              <div
                className="cats-control"
                title={`Displaying cat ${this.props.index + 1} out of {this.props.imageCount}`}
              >
                Cat {this.props.index + 1} / {this.props.imageCount}
              </div>
              <button
                className="cats-control"
                disabled={this.props.isAtBeginningOfImages}
                onClick={this.handlePreviousClick}
                title="Go to previous image"
              >
                &lt;
              </button>
              <button
                className="cats-control"
                onClick={this.handlePlayPauseToggle}
                title="Start/Stop Slideshow"
              >
                {this.props.isPlaying ? 'Pause' : 'Play'}
              </button>
              <button
                className="cats-control"
                onClick={this.handleNextClick}
                title="Go to next image"
              >
                &gt;
              </button>
            </div>
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
            <div className="cats__controls">
              <button
                className="cats-control"
                disabled={this.props.displayMode === DisplayMode.Gifs}
                onClick={this.handleSetDisplayMode.bind(this, DisplayMode.Gifs)}
                title="View Cat Gifs"
              >
                🎥 Gifs
              </button>
              <button
                className="cats-control"
                disabled={this.props.displayMode === DisplayMode.Pictures}
                onClick={this.handleSetDisplayMode.bind(this, DisplayMode.Pictures)}
                title="View Cat Pictures"
              >
                📷 Pics
              </button>
              <button
                className="cats-control"
                disabled={this.props.displayMode === DisplayMode.CoolCats}
                onClick={this.handleSetDisplayMode.bind(this, DisplayMode.CoolCats)}
                title="View Cool Cats"
              >
                😎 Cool Cats
              </button>
            </div>
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
  isAtBeginningOfImages: slideshowSelectors.isAtBeginningOfImages(state),
  index: slideshowSelectors.getIndex(state),
  imageCount: slideshowSelectors.getImageCount(state),
  isPlaying: slideshowSelectors.getIsPlaying(state),
  slideshowDelay: slideshowSelectors.getSlideshowDelay(state),
  streamModeEnabled: catSelectors.getStreamModeEnabled(state),
});

export default connect(mapStateToProps)(Cats);
