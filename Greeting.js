import React from 'react';
import { Text, View } from 'react-native';

const Greeting = (props) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text> <h1> React Native {props.name} ! </h1> </Text>
      </View>
    );
}

export default Greeting;