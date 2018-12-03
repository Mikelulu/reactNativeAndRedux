import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native'; 
import { Header, Button } from 'react-native-elements';
import firebase from 'firebase'; 
import ToDoItem from './src/Components /ToDoItem'; 
import NewToDoForm from './src/Components /NewToDoForm'; 

class App extends Component {
  state = { showModal: false }

  todos = [
  {
    completed: true, 
    description: 'start a to-do app in react',
    id: 1
  }, 
  {
    completed: false, 
    description: 'make it dynamic',
    id: 2
  }, 
  {
    completed: false, 
    description: 'use firebase for persistence', 
    id: 3
  }, 
]; 

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD8bKJ6EfhxQm_Rl6oVhpHrTcESnwZcLNQ',
      authDomain: 'react-to-do-fd724.firebaseapp.com',
      databaseURL: 'https://react-to-do-fd724.firebaseio.com',
      projectId: 'react-to-do-fd724',
      storageBucket: 'react-to-do-fd724.appspot.com',
      messagingSenderId: '1030943039988'
    }; 

    firebase.initializeApp(config); 
  }

  renderToDos() {
    return this.todos.map(todo => 
      <ToDoItem key={todo.id} todo={todo} />
    );
  }

  render() {
    return (
      <View>
        <Header 
          centerComponent={{ text: 'To Do App', style: { color: '#000' } }}
          rightComponent={{ icon: 'add-circle', style: { color: '#000' } }}
        />
        <TouchableOpacity onPress={() => console.log('I am touched!')} />
        {this.renderToDos()}
        <Button backgroundColor='#8E24AA' raised small title='Add a To Do' onPress={() => this.setState({ showModal: !this.setState.showModal })} />

        <NewToDoForm visible={this.state.showModal}>
          What do you need to do?
        </NewToDoForm>
      </View>
    );
  }
}

export default App; 
