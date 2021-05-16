import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};


export const PersonaScreen = ( { route, navigation }: Props ) => {

    const params = route.params;

    useEffect(() => {
        
        navigation.setOptions({
            title: params!.nombre  //! sirve para forsar la llamada de datos
        })

    }, [])

    

    return (
        <View style={ styles.globalMargin }>
          <Text style={styles.title}>{
              JSON.stringify( params, null, 3 )
          }</Text>  
        </View>


    )
}
