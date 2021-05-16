import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

    const navigator = useNavigation();

    // Si no se le mandan ningún argumento solo se ejecuta una vez
    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo', //Este tiene más peso que la propiedad title de StackNavigator
            headerBackTitle: 'Atrás'
        })
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina2Screen</Text>

            <Button title="Ir página 3" onPress={ () => navigator.navigate('Pagina3Screen')  } />

        </View>
    )
}
