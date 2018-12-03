import React, { Component } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';

class ToDoItem extends Component {
   state = { checked: this.props.todo.completed }

   render() {
      return (
         <View>
            <CheckBox 
               title={this.props.todo.description} 
               checked={this.state.checked}
               onPress={() => this.setState({ checked: !this.state.checked })}
            />
         </View>
      );
   }
}

const mapStateToProps = state => {
   const { completed, description, id } = state.todo; 

   return { completed, description, id }; 
}; 

export default ToDoItem;
