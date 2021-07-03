import React from 'react';
import { Text, View } from 'react-native';
import AppHeader from "../screens/AppHeader";

export default class Instagram extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <AppHeader/>
          <Text style={{fontSize:30, color:'purple', fontWeight:'bold'}}>Instagram</Text>
        </View>
      );
    }
  }