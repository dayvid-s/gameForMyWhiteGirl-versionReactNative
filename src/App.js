import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import  InitialPart from './componentes/InitialPart'
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import truth from './componentes/truth';
const Stack = createStackNavigator()

export default function (){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='truth'
        screenOptions={{headerShown: false}}>
        <Stack.Screen name='InitialPart' component={InitialPart} />
        <Stack.Screen name='truth' component={truth} />
      </Stack.Navigator>
        
    </NavigationContainer>
    )}

const styles = StyleSheet.create({

});
// cara é muito melhor de aprender, quando você mesmo começa a fazer a parada sem copiar de video aula
// nem nada, você erra,e ja sabe do seu erro, não do erro dos outros, isso é foda.
// nunca esqueça disso.