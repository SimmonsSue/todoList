import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {TodoListReducer} from './reducers/TodoListReducer.js'
import {reducers} from './reducers/TodoListReducer.js'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import DevTools from './containers/DevTools';
const enhancer = compose(//http://cn.redux.js.org/docs/api/compose.html
    DevTools.instrument()
  );
  
  const store = createStore(reducers, enhancer);
//   const store = createStore(TodoListReducer, enhancer);

// const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <App />
        <DevTools />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
