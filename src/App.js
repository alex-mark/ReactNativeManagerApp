import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    )
  }
}

export default App;
