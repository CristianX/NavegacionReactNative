import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colores } from '../theme/appTheme';

export const SettingsScreens = () => {

    const insets = useSafeAreaInsets(); //Usando safe area para renderizar fuera del notch

    const { authState } = useContext( AuthContext );

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top + 20
        }}>
            <Text style={ styles.title }>Settings Screen</Text>

            <Text>{ JSON.stringify( authState, null, 4 ) }</Text>

            {
                authState.favoriteIcon && (<Icon name={ authState.favoriteIcon } size={150} color={ colores.primary } />)
            }
            

        </View>
    )
}
