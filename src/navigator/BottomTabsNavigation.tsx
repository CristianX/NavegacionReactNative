import React from 'react';

import { Text, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
// import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { TopTapNavigator } from './TopTapNavigator';


export const Tabs = () => {

  return Platform.OS === 'ios' ? <TabsIos /> : <TabsAndroid />

}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const  TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator 
      sceneAnimationEnabled={true}
      barStyle= {{
        backgroundColor: colores.primary
      }}
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';
          switch( route.name ) {
            case 'Tab1Screen':
              iconName='car-sport-outline'
            break;

            case 'Tab2Screen':
              iconName='color-palette-outline'
            break;

            case 'StackNavigator':
              iconName='earth-outline'
            break;
          }
          return <Text>  <Icon name={ iconName }  color={ color } /> </Text>
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab 1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab 2' }} component={TopTapNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}



const BottomTabIos = createBottomTabNavigator();

const TabsIos = () => {
  return (
    <BottomTabIos.Navigator 
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      tabBarOptions={{
        activeTintColor: colores.primary, 
        style: { 
          borderTopColor: colores.primary, 
          borderTopWidth: 0, //que se borre la línea que separa el bottom en IOS
          elevation: 0 ////que se borre la línea que separa el bottom en ANDROID
        },
        labelStyle: {
          fontSize: 15
        }
      }}
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = '';
          switch( route.name ) {
            case 'Tab1Screen':
              iconName='car-sport-outline'
            break;

            case 'Tab2Screen':
              iconName='color-palette-outline'
            break;

            case 'StackNavigator':
              iconName='earth-outline'
            break;
          }
          return <Text> <Icon name={ iconName } color={ color } /></Text>
        }
      })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab 1', tabBarIcon: ( props ) => <Text style={{ color: props.color }} >T1</Text> }} component={Tab1Screen} /> */}
      <BottomTabIos.Screen name="Tab1Screen" options={{ title: 'Tab 1'}} component={Tab1Screen} />
      <BottomTabIos.Screen name="Tab2Screen" options={{ title: 'Tab 2' }} component={TopTapNavigator} />
      <BottomTabIos.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabIos.Navigator>
  );
}