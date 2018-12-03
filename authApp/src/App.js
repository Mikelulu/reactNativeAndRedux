import React, { Component } from 'react'; 
import { View } from 'react-native'; 
import firebase from 'firebase'; 
import { Header, Card, CardSection, Button, Spinner } from './Components/Common'; 
import LoginForm from './Components/LoginForm'

class App extends Component { 
    state = { loggedIn: null }; 

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCuha8Cj0MiO3n49zl93qV6ZyWIg7BRMAc',
            authDomain: 'authentication-53dd8.firebaseapp.com',
            databaseURL: 'https://authentication-53dd8.firebaseio.com',
            projectId: 'authentication-53dd8',
            storageBucket: 'authentication-53dd8.appspot.com',
            messagingSenderId: '129004906784'
        })

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else { 
                this.setState({ loggedIn: false })
            }
        }); 
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true: 
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </CardSection>
                    </Card>
                );
            case false: 
                return <LoginForm />
            default: 
                return <Spinner size="large" />
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        )
    }
}

export default App; 