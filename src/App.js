import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reactThunk from 'react-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    )
  }
}

export default App;
