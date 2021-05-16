import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreens } from '../screens/SettingsScreens';

const Drawer = createDrawerNavigator();

export const  MenuLateralBasico = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreens" component={SettingsScreens} />
    </Drawer.Navigator>
  );
}