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
import Truth from './componentes/Truth';
const Stack = createStackNavigator()

export default function (){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='InitialPart'
        screenOptions={{headerShown: false}}>
        <Stack.Screen name='InitialPart' component={InitialPart} />
        <Stack.Screen name='Truth' component={Truth} />
      </Stack.Navigator>
        
    </NavigationContainer>
    )}

const styles = StyleSheet.create({

});
// cara é muito melhor de aprender, quando você mesmo começa a fazer a parada sem copiar de video aula
// nem nada, você erra,e ja sabe do seu erro, não do erro dos outros, isso é foda.
// nunca esqueça disso.