import React from 'react'; 
import { View } from 'react-native';    
import { Provider } from 'react-redux'; 
import { createStore } from 'redux'; 
import reducers from './reducers'; 
import { Header } from './components/common'; 
import LibraryList from './components/LibraryList'; 

const App = () => (
        // the provider tag works with the store 
        // store holds our application state 
        // the provider translates the data in the store 
        // into something that can be used in our app 
        // the communication layer between react and redux 
        <Provider store={createStore(reducers)}>
            {/* passing in a js object of flex: 1, that's why 
            the two curly braces */}
        <View style={{ flex: 1 }}>
            <Header headerText="Tech Stack" />
            <LibraryList />
        </View>
        </Provider>
    );

export default App;
