import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './CatFact.css';
import {getCatFact} from "../selectors/catSelectors";
import * as catActions from "../actions/catActions";

class CatFact extends PureComponent {
    handleCatFactClick = (event) => {
        this.props.dispatch(catActions.getNextCatFact());
    };

    render() {
        return (
            <div className="cat-fact" onClick={this.handleCatFactClick}>
                <div className="cat-fact__label">Did You Know?</div>
                <div className="cat-fact__fact">{this.props.catFact}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    catFact: getCatFact(state),
});

export default connect(mapStateToProps)(CatFact);

