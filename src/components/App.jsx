import React, { Component } from 'react';
import './App.css';
import CatFact from "./CatFact";
import {connect} from 'react-redux';
import * as catSelectors from "../selectors/catSelectors";
import * as Theme from '../constants/theme';
import * as catActions from '../actions/catActions';
import PageBodyRouter from './PageBodyRouter';
import PageFooterRouter from './PageFooterRouter';
import { Link } from 'react-router-dom';
import GithubCorner from './GithubCorner';

const isJune = new Date().getMonth() === 5;

class App extends Component {
  handleThemeToggle = () => {
    if (this.props.theme === Theme.Light) {
      this.props.dispatch(catActions.setTheme(Theme.Dark));
    } else if (this.props.theme === Theme.Dark) {
      this.props.dispatch(catActions.setTheme(Theme.Light));
    }
  };

  render() {
    return (
      <div className={[
        'app',
        this.props.streamModeEnabled ? 'stream-mode-enabled' : 'stream-mode-disabled',
        `theme--${this.props.theme}`
      ]
          .filter(Boolean)
          .join(' ')
      }>
        {this.props.streamModeEnabled && (
            <style>
              body {'{'}
                margin: 0px auto;
                overflow: hidden;
              {'}'}
            </style>
        )}
        <button
            className="app__theme-toggle"
            onClick={this.handleThemeToggle}
            title="Toggle Theme"
        >
          {this.props.theme === Theme.Light && <span role="img" aria-label="Light mode">🌅</span>}
          {this.props.theme === Theme.Dark && <span role="img" aria-label="Dark mode">🌇</span>}
        </button>
        <div className="app__header">
          <h1
            className={[
              'heading',
              isJune && 'heading--pride',
            ]
              .filter(Boolean)
              .join(' ')
            }
            title={isJune && 'Happy pride month! You are loved. ❤'}
          >
            {isJune && '🏳️‍🌈'}
            <span className="heading__text">Muffin.gg</span>
            {isJune && '🏳️‍🌈'}
          </h1>
          <h3 className="sub-heading">
            <span>Bringing You Sweet Cat</span>
            {' '}
            <Link to="/">Pics</Link>
            {' '}
            <Link to="emoji">(and Emoji!)</Link>
            {' '}
            <span>Since 2018 <span role="img" aria-label="Heart eyes cat emoji">😻</span></span>
          </h3>
          <CatFact/>
        </div>
        <PageBodyRouter className="app__body"/>
        <PageFooterRouter className="app__footer"/>
        <GithubCorner theme={this.props.theme}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  streamModeEnabled: catSelectors.getStreamModeEnabled(state),
  theme: catSelectors.getTheme(state),
});

export default connect(mapStateToProps)(App);
