import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import reducer from './reducers/index';
import rootSaga from './sagas/rootSaga';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import * as initActions from "./actions/initActions";
import { BrowserRouter } from 'react-router-dom';

const sagaMiddleware = createSagaMiddleware();
let middleware = [
  sagaMiddleware
];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);
sagaMiddleware.run(rootSaga);

store.dispatch(initActions.init());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
