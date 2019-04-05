import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import Cats from './Cats';
import EmojiPage from './EmojiPage';

const PageBodyRouter = ({ className }) =>
    <Switch>
        <Route
            exact
            path="/"
            component={props => <Cats {...props} className={className}/>}
        />
        <Route
            path="/emoji"
            component={props => <EmojiPage {...props} className={className}/>}
        />
        <Route
            path="/kawaii"
            component={props => <EmojiPage {...props} className={className}/>}
        />
        <Route
            component={props => <Cats {...props} className={className}/>}
        />
    </Switch>;

export default PageBodyRouter;
