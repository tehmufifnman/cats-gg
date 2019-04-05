import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import CatsFooter from './CatsFooter';
import EmojiPageFooter from './EmojiPageFooter';

const PageBodyRouter = ({ className }) =>
    <Switch>
        <Route
            exact
            path="/"
            component={props => <CatsFooter {...props} className={className}/>}
        />
        <Route
            path="/emoji"
            component={props => <EmojiPageFooter {...props} className={className}/>}
        />
        <Route
            path="/kawaii"
            component={props => <EmojiPageFooter {...props} className={className}/>}
        />
        <Route
            component={props => <CatsFooter {...props} className={className}/>}
        />
    </Switch>;

export default PageBodyRouter;
