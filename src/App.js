import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDR3PEQcl-kq6UKTii_JCyBSSq3vA3o7mk',
      authDomain: 'manager-37b74.firebaseapp.com',
      databaseURL: 'https://manager-37b74.firebaseio.com',
      projectId: 'manager-37b74',
      storageBucket: 'manager-37b74.appspot.com',
      messagingSenderId: '257257475475'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
