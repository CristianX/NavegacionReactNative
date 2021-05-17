import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
import { SettingsScreens } from '../screens/SettingsScreens';
import { styles } from '../theme/appTheme';
import { Tabs } from './BottomTabsNavigation';


const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();
// const SettingsStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="SettingsScreens" component={ SettingsScreens } />
//     </Stack.Navigator>
//   )
// }

export const  MenuLateral = () => {

  const { width } = useWindowDimensions();  //Para sacar el ancho o alto del dispositivo en este caso ancho

  return (
    // <Drawer.Navigator drawerPosition="right">
    <Drawer.Navigator drawerType={ width >= 768 ? 'permanent' : 'front' } drawerContent={ (props) => <MenuInterno { ...props } /> } >
      <Drawer.Screen name="Tabs" component={Tabs} />
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

        <TouchableOpacity style={{ ...styles.menuBoton, flexDirection: 'row' }} onPress={ () => navigation.navigate('Tabs') } >
          <Icon name='navigate-circle-outline' size={23} color= 'black' />
          <Text style={ styles.menuTexto }> Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ ...styles.menuBoton, flexDirection: 'row' }} onPress={ () => navigation.navigate('SettingsScreens') } >
          <Icon name='cog-outline' size={23} color= 'black' />
          <Text style={ styles.menuTexto }> Ajustes</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>

  );

}