import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cats.css';
import * as actions from "./actions/catActions";
import {getCat} from "./selectors/catSelectors";

class Cats extends Component {
  render() {
    return (
      <div className="cats">
        <img className="cats__image" src={this.props.cat} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cat: getCat(state),
});

export default connect(mapStateToProps)(Cats);
