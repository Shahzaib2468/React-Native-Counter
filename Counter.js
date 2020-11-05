import React, {useState} from 'react';
import { StyleSheet, View, Text, Button,} from 'react-native';

export default function State() {
    const [count, setCount] = useState(1);
  return (
    <View style={{alignItems:"center"}}>
        <h1 style={{color:"red"}}>{count}</h1>
        <Button title='Increament' onPress={()=>setCount(count + 1) } /> 
        <br />
        <Button title='Decrement' onPress={()=>setCount(count - 1) } />
    </View>
  );
}



