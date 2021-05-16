import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

const Stack = createStackNavigator();

export const  StackNavigator = () => {
  return (
    <Stack.Navigator 
      // initialRouteName="Pagina2Screen  para inicar la ruta desde esa página"
      screenOptions={{
        // headerShown: false, para desaparecer cabecera creada por StackNavigator
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent' //Ya que IOS no capta la propiedad elevation se debe poner shadowColor en transparente para que lo capte
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }} 
    >
      <Stack.Screen name="Pagina1Screen" options = {{title:"Página 1"}} component={Pagina1Screen} />
      <Stack.Screen name="PersonaScreen" options = {{title:"Página 1"}} component={PersonaScreen} />
      <Stack.Screen name="Pagina2Screen" options = {{title:"Página 2"}} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options = {{title:"Página 3"}} component={Pagina3Screen} />
    </Stack.Navigator>
  );
}