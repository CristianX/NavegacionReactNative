import React from 'react';


import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
// import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { color } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator 
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
              iconName='T1'
            break;

            case 'Tab2Screen':
              iconName='T2'
            break;

            case 'StackNavigator':
              iconName='St'
            break;
          }
          return <Text style={{ color }}>{ iconName }</Text>
        }
      })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab 1', tabBarIcon: ( props ) => <Text style={{ color: props.color }} >T1</Text> }} component={Tab1Screen} /> */}
      <Tab.Screen name="Tab1Screen" options={{ title: 'Tab 1'}} component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" options={{ title: 'Tab 2' }} component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </Tab.Navigator>
  );
}