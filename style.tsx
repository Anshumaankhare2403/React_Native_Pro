import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textBox: {
    height: 100,
    backgroundColor:'blue',
    fontSize: 20,
    color:'#ffff',
    padding:20,
    shadowColor:'black',
    shadowRadius:20,
    textAlign:'center',
    textAlignVertical:'center',
    margin:30,
    borderRadius:30,
  },
  textFild:{
    fontSize:20,
    color:'green',
    borderRadius:10,
    borderWidth:5,
    height:80,
    padding:10,
    margin:20,
  },
});

export default styles; // ✅ Correct export
