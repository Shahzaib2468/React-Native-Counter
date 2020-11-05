import React from 'react';
import {View} from 'react-native';

const Hello = ()=>{

   function sayHello() {
    alert('Welcome to React Native Project');
  }
    return(
        <View style={{marginTop:"20px"}}>
        <div>
          <button onClick={sayHello}>Click</button>
        </div>
      </View>
    )   
}
export default Hello;
