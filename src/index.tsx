import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { incrementAction } from './actions/counterActions';
import App from './App';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

export interface AppState {
  counter: number,
  text: string
}

// STORE / STATE
let store = createStore(reducers, composeWithDevTools());

// DISPATCH
store.dispatch(incrementAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
