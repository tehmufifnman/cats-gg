import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cats.css';
import {getCat} from "./selectors/catSelectors";

class Cats extends Component {
    render() {
        return (
            <div class="cats">
                <img class="cats__image" src={this.props.cat} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cat: getCat(state),
});

export default connect(mapStateToProps)(Cats);
