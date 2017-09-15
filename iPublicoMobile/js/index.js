import React, { Component } from 'react';
import allReducers from './reducers';
import App from './App';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(allReducers, applyMiddleware(thunk));

export default class Todo extends Component {
  render() {
    return (
      <Provider store= {store}>
        <App />
      </Provider>
    );
  }
}
