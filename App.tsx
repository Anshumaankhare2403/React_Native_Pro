import { useState } from 'react';
import React  from 'react';
import { Text, View,Button} from 'react-native';

function App() {
  // let num = 0;
   const [num, setNum] = useState(0);
   function fun(){

     setNum(num + 1);
   }
   function fun2(){

    setNum(num - 1);
  }
  return (
    <View>
    <Text style={{fontSize:40,textAlign:'center'}}>{num}</Text>
    <Button title='add' onPress={fun} />
    <Button title='sub' onPress={fun2}/>
    </View>
  );
}

export default App;
