import { useState } from 'react';
import React  from 'react';
import { FlatList, Text, TextInput, View} from 'react-native';
import Styles from './style.tsx';
import styles from './style.tsx';
function App() {
  // // let num = 0;
  //  const [num, setNum] = useState(0);
  //  function fun(){

  //    setNum(num + 1);
  //  }
  //  function fun2(){

  //   setNum(num - 1);
  // }
  //  const [name, setName] = useState();
  //  const [showPassword, setShowPassword] = useState(false);
  const arr = [
    {
      id:1,
      name:'anuj',
    },
    {
      id:2,
      name:'anuj',
    },
    {
      id:3,
      name:'anuj',
    },
    {
      id:4,
      name:'anuj',
    },
  ];
  return (
    <View>

    {/* <Text style={{fontSize:40,textAlign:'center'}}>{num}</Text> */}
    {/* <Button title='add' onPress={fun} />
    <Button title='sub' onPress={fun2}/> */}
    {/* <Car name ={name} />
    <Button title="sub"  onPress={()=>setName('AnujKhare')}/> */}
    {/* <Text style={Styles.textBox}>Hi it {name}</Text>
    <TextInput  placeholder="Enter your name" style={styles.textFild} onChangeText={(text)=>setName(text)}/>
    <TextInput placeholder="Enter your Email" style={styles.textFild} onChangeText={(text)=>setName(text)}/>
 */}

   <Text style={{fontSize:30,textAlign:'center',margin:20}}>LIST IN REACT NATIVE  </Text>
   {/* <FlatList  data={arr} renderItem={({item})=><Text style={styles.textBox}>{item.name}</Text>} > </FlatList> */}
   {/* without using flatList  */}
   {
    arr.map((item)=><Text style={styles.textBox}>{item.id}</Text>)
   }
    </View>
  );
}






export default App;
