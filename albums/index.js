// Import a library to help create a component 
// ES6 code, no file gets acess to any global variables 
// must import to work with code that lives outside the file 
// this gives us access to react and react native code 
import React from 'react'; 
// instead of importing the entire library, just import the properties 
// from the library that we are actually using
// {} imports just the bits we use, the one above is how you import the whole thing
import { AppRegistry, View } from 'react-native'; 
// for our own stuff, we need to import the file via relative path 
import Header from './src/components/header'; 
import AlbumList from './src/components/AlbumList';

// Creat a componenet 
// A component produces some amount of content
// that we display on the screen of our device 
// this is done via a JS function that returns some amount of JSX 
// We start with the App component
const App = () => (
        // This looks like, but is not HTML 
        // It's JSX, a "dialect" of JavaScript 
        // JSX is how we communicate UI and appearance to the device 
        // nest components inside the App with html-like tags 
        // Everything has to be wrapped in one high-leve tag, like div or view 
        // i.e., you can only return ONE high-level tag with your stuff inside 
        // need to add the flex: 1 style to enable smooth scrolling in a scrollview 
        <View style={{ flex: 1 }}>
            <Header headerText={'Albums Or Whatever'} />
            <AlbumList />
        </View>
    ); 

// render the component to the device 
// run our component, take the returned JSX and determine what content will appear on the screen 
// we have to specifically tell react native to render our components to the device 
// the fat-arrow function returns App, even though that isn't specified 
// first argument is name of project, second is the at least one component 
// we are registering and running 
// Only the Root (App) component uses the AppRegistry.
AppRegistry.registerComponent('albums', () => App); 
