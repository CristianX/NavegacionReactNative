import React from 'react';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreens } from '../screens/SettingsScreens';
import { styles } from '../theme/appTheme';


const Drawer = createDrawerNavigator();

export const  MenuLateral = () => {

  const { width } = useWindowDimensions();  //Para sacar el ancho o alto del dispositivo en este caso ancho

  return (
    // <Drawer.Navigator drawerPosition="right">
    <Drawer.Navigator drawerType={ width >= 768 ? 'permanent' : 'front' } drawerContent={ (props) => <MenuInterno { ...props } /> } >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreens" component={SettingsScreens} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( {navigation} :  DrawerContentComponentProps<DrawerContentOptions>) => {

  return (

    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={ styles.avatarContainer }>
        <Image 
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'}} 
          style={ styles.avatar }
        />
      </View>

      {/* Opciones de meú */}
      <View style={styles.menuContainer}>

        <TouchableOpacity style={styles.menuBoton } onPress={ () => navigation.navigate('StackNavigator') } >
          <Text style={ styles.menuTexto }>Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuBoton } onPress={ () => navigation.navigate('SettingsScreens') } >
          <Text style={ styles.menuTexto }>Ajustes</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>

  );

}