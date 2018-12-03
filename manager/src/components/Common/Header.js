import React from 'react';
import { Text, View } from 'react-native'; 

const Header = (props) => {
    const { textStyle, viewStyle } = styles; 
    
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    ); 
 };


const styles = {
    // js objects that set the properties 
    // will look like CSS but isn't, exactly 
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        // flexbox business
        // justifyContent handles y-axis state 
        justifyContent: 'center', 
        // alignItems handles x-axis state 
        alignItems: 'center', 
        height: 60, 
        paddingTop: 15, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2, 
        elevation: 2, 
        position: 'relative'
    }
}; 

export { Header }; 
