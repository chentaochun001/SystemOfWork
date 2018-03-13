import React from 'react';
import ReactDOM from 'react-dom';
// action处理是异步的 reducer
// action-> reducer(oldState,data)-> 返回一个新状态
import thunk from 'redux-thunk'
import { createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger'
import reducer from './reducer'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const middleware = [ thunk ]
middleware.push (createLogger())

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)
ReactDOM.render(
    <Provider store={store}> 
    <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
