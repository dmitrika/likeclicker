import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './App.css';

import Likes from './Components/Likes/Likes';
import LikesReducer from './Reducer/LikesReducer';

let store = createStore(LikesReducer);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Likes />
        </Provider>
    );
  }
}

export default App;