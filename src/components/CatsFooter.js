import React, { PureComponent } from 'react';
import * as DisplayMode from '../constants/displayMode';
import {connect} from 'react-redux';
import * as catSelectors from '../selectors/catSelectors';

const mapStateToProps = state => ({
    displayMode: catSelectors.getDisplayMode(state),
    streamModeEnabled: catSelectors.getStreamModeEnabled(state),
});

class CatsFooter extends PureComponent {
    render() {
        return (
            <div className="app__footer">
                {this.props.displayMode === DisplayMode.Pictures &&
                    <p className="app__footer-message">Photos from <a href="https://source.unsplash.com/" target="_blank" rel="nofollow noreferrer">Unsplash Source</a>.</p>
                }
                {this.props.displayMode === DisplayMode.Gifs &&
                    <React.Fragment>
                        <p className="app__footer-message">Gifs from <a href="https://giphy.com/" target="_blank" rel="nofollow noreferrer">Giphy.</a></p>
                        <img className="app__giphy-attribution" src="/images/powered-by-giphy.png"/>
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)(CatsFooter);
