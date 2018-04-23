import React from 'react'
import App from './components/App';
import ReactDom from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import Reducers from './reducers/addTodo'
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk'

const logger = createLogger();


let initalState={a:{input:'',content:[]},b:{time: 0,color:'red'}};
let store=createStore(Reducers,initalState,applyMiddleware(thunk));

store.subscribe(function () {
    // console.log(store.getState());
    // console.log('change');
})

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)