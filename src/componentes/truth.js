import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default function (truth){
  return( 
  <View style={styles.container} >
      <View style={{height: ('5%')}} > 
        <Text style={styles.lettersOne}  >Dayvid</Text>
        <Text style={styles.lettersTwo} >HARD</Text>
    </View>
       <View style={{justifyContent:'space-evenly'}}  >
 
       <View >
         <Text style={styles.lettersThree} 
         >TRUTH
         </Text>    
       </View>
       <Text style={{  alignSelf:'center',color:('#De2674')}} >  _________</Text>
       <Text style={{fontSize:28,textAlign:'center', }}
            >What would you like to do with a partner if you could erase her memory?</Text>
       <Text style={{  alignSelf:'center',color:('#De2674')}} >  _________</Text>
     </View>
     
     <View style={{flexDirection:'row'}} >
          <Text style={{fontSize:25, textAlign:'center', color:'white', width:'80%',
        fontWeight:'300'
        }}>Include "Custom"?  emoji 1 emoji 2</Text>
     </View>

  </View>
     
)}

const styles = StyleSheet.create({
  container:{
    backgroundColor: (`#000000`),
    height:'100%',
    padding:20,
    justifyContent:'space-between'
    
  },
  lettersOne:{
      fontSize:30,
      color:('#ff09de'),
      alignSelf:'center',
      
  },
  lettersTwo:{
    fontSize:20,
    color:('#ff66eb'),
    color:('#be2596'),
    fontStyle:('normal'),
    fontWeight:('100'),
    alignSelf:'center'
  },
  lettersThree:{
    fontSize:40,
    color:('#ff09de'),
    alignSelf:'center',
    

}
});