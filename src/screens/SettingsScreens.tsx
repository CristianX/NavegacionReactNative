import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';

export const SettingsScreens = () => {

    const insets = useSafeAreaInsets(); //Usando safe area para renderizar fuera del notch

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top + 20
        }}>
            <Text style={ styles.title }>Settings Screen</Text>
        </View>
    )
}
