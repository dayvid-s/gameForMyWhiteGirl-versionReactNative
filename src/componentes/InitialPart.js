import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default function ({navigation}){
  return( 
  <View style={styles.container} >
      <View style={{height: ('5%')}} > 
        <Text style={styles.lettersOne}  >Dayvid</Text>
        <Text style={{  alignSelf:'center'}} >_________</Text>
        <Text style={styles.lettersTwo} >HARD</Text>
    </View>
       <View style={{justifyContent:'space-evenly'}}  >
 
       <TouchableOpacity onPress={()=> navigation.push('truth')} >
         <Text style={styles.lettersThree} 
         >TRUTH
         </Text>    
       </TouchableOpacity>
       <Text style={{  alignSelf:'center'}} >  _________</Text>
       <Text style={{fontSize:28,textAlign:'center',color:('#De2674'), fontWeight:('300')}}
            >RANDOM CHANCE</Text>
       <Text style={{  alignSelf:'center'}} >  _________</Text>
       <Text style={styles.lettersThree}>DARE</Text>
     </View>
     
     <View style={{flexDirection:'row'}} >
          <Text style={{fontSize:25, textAlign:'center', color:'white', width:'80%',
        fontWeight:'300'
        }}>Include "Custom"?</Text>
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
// cara é muito melhor de aprender, quando você mesmo começa a fazer a parada sem copiar de video aula
// nem nada, você erra,e ja sabe do seu erro, não do erro dos outros, isso é foda.
// nunca esqueça disso.

// ULTRA IMPORTANTE. 
// um monte de download de pacote não da certo porque você tá com o metro a todo vapor.
// sempre que for instalar pacotes, faça o ctrl C para terminar o metro, e instalar os pacotes
// porque senão da merda no app. deve ter sido por isso que não instalava as dependencias
// do app lá