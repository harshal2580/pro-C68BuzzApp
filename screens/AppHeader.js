import React from 'react';
import { Text, View } from 'react-native';

export default class AppHeader extends React.Component {
    render() {
      return (
        <View>
          <Text style={{
            fontSize:30, 
            color:'purple', 
            fontWeight:'bold',
            marginTop:-200,
            backgroundColor:'pink',
            padding:10
            }}>Buzz App</Text>
        </View>    
      );
    }
  }