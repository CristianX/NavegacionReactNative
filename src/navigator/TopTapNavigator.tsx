import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import Icon from 'react-native-vector-icons/Ionicons';

// Para ocultar el warning que sale por reanimated
import { LogBox, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
LogBox.ignoreLogs(['Sending']);


const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {

    const { top: paddingTop } = useSafeAreaInsets();

  return (
    <Tab.Navigator 
        style={{ paddingTop }} 
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
        tabBarOptions={{
            pressColor: colores.primary,
            showIcon: true,
            indicatorStyle: {
                backgroundColor: colores.primary,
            },
            style: {
                shadowColor: 'transparent', //Esconder linea de separación del top en IOS
                elevation: 0 //Esconder linea de separación del top en Android
            }
        }}
        screenOptions={ ({ route }) => ({
            tabBarIcon: ({ color, focused }) => {
              let iconName: string = '';
              switch( route.name ) {
                case 'Chat':
                  iconName='chatbubbles-outline'
                break;
    
                case 'Contacts':
                  iconName='call-outline'
                break;
    
                case 'Albums':
                  iconName='aperture-outline'
                break;
              }
              return <Text> <Icon name={ iconName } size={20} color={ colores.primary } /></Text>
            }
          })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}