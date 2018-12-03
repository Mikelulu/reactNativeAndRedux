import React, { Component } from 'react'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import reducers from './reducers'; 
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; 
import Router from './Router'; 

class App extends Component {
   componentWillMount() {
        const config = {
         apiKey: 'AIzaSyBcvcFHxMWyJ7fATdeClgn6D4S6rLRaGxw',
         authDomain: 'manager-590cc.firebaseapp.com',
         databaseURL: 'https://manager-590cc.firebaseio.com',
         projectId: 'manager-590cc',
         storageBucket: 'manager-590cc.appspot.com',
         messagingSenderId: '701285220096'
      };
      
      firebase.initializeApp(config);
   }

   render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); 
      
      return (
         <Provider store={store}>
            <Router />
         </Provider>
      );
   }
}

export default App; 
