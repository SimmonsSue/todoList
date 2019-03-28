import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {TodoListReducer} from './reducers/TodoListReducer.js'
import {rootReducer} from './reducers/ImmutableReducer.js'
import { Router, Route,   } from 'react-router-dom';
// import { IndexRoute  } from 'react-router';
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import DevTools from './containers/DevTools';
import {createBrowserHistory} from 'history'

let browserHistory = createBrowserHistory()

const enhancer = compose(//http://cn.redux.js.org/docs/api/compose.html
    DevTools.instrument()
  );
  
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
        <div>
            {/* <IndexRoute exact  path='/' component={App}></IndexRoute> */}
            <Route exact  path='/' component={App}></Route>                        
            <Route exact  path='/devtools' component={DevTools}></Route>
        </div>
        </Router>      
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
