import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cats.css';
import * as actions from "./actions/catActions";
import {getCat} from "./selectors/catSelectors";

class Cats extends Component {
  render() {
    return (
      <div className={`cats ${this.props.className}`}>
        <a href={this.props.cat} target="_blank" rel="noopener">
          <img className="cats__image" src={this.props.cat} />
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cat: getCat(state),
});

export default connect(mapStateToProps)(Cats);
