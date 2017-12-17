import React from 'react'
import App from './components/App';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import handleAddTodo from './reducers/addTodo'
import {Provider} from 'react-redux';

let initalState={input:'',content:[]};
let store=createStore(handleAddTodo,initalState);

store.subscribe(function () {
    console.log(store.getState());
    console.log('change');
})

ReactDom.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('root')
)