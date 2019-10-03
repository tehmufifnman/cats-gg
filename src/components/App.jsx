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
        this.props.streamModeEnabled && 'stream-mode-enabled',
        `theme--${this.props.theme}`
      ]
          .filter(Boolean)
          .join(' ')
      }>
        {!this.props.streamModeEnabled &&
          <button
              className="app__theme-toggle"
              onClick={this.handleThemeToggle}
          >
            {this.props.theme === Theme.Light && '🌅'}
            {this.props.theme === Theme.Dark && '🌇'}
          </button>
        }
        {!this.props.streamModeEnabled &&
          <div className="app__header">
            <h1 className="heading">Cats.gg</h1>
            <h3 className="sub-heading">
              <span>Bringing You Sweet Cat</span>
              {' '}
              <Link to="/">Pics</Link>
              {' '}
              <Link to="emoji">(and Emoji!)</Link>
              {' '}
              <span>Since 2018 😻</span>
            </h3>
            <CatFact/>
          </div>
        }
        <PageBodyRouter className="app__body"/>
        {!this.props.streamModeEnabled && <PageFooterRouter className="app__footer"/>}
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
