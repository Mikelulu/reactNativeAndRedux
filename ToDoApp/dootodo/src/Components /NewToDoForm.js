import React from 'react'; 
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { Button, Card, FormInput, FormLabel } from 'react-native-elements';

const NewToDoForm = ({ children, visible }) => (
      <View style={styles.containerStyle}>
            
            <Modal visible={visible} animationIn='slideInUp' animationOut='slideOutDown'>
                  <Card>
                        <FormLabel>{children}</FormLabel>
                        <FormInput />
                        <Button title='Save' raised backgroundColor='#8E24AA' />
                  </Card>
            </Modal>
      </View>
);

const styles = {
   containerStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      flex: 1, 
      justifyContent: 'center'
   }
};

export default NewToDoForm; 
