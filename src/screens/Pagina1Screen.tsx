import React from 'react'
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any>{};

export const Pagina1Screen = ( { navigation }: Props ) => {
    

    return (
        <View style= { styles.globalMargin }>
            <Text style={ styles.title } >Pagina1Screen</Text>



            <Button title="Ir a página 2" onPress={() => navigation.navigate('Pagina2Screen') } />
    
            <Text >Navegar con argumentos</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ ...styles.btonGrande, backgroundColor: '#5856D6' }} onPress={() => navigation.navigate('PersonaScreen', {
                    id: 1,
                    nombre: 'Cristian'
                })}>
                    <Text style={ styles.botonGrandeTexto }>Cristian</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.btonGrande, backgroundColor: '#FF9427' }} onPress={() => navigation.navigate('PersonaScreen', {
                    id: 2,
                    nombre: 'Noemí'
                })}>
                    <Text style={ styles.botonGrandeTexto }>Noemí</Text>
                </TouchableOpacity>
            </View>

            
        
        
        </View>
    )
}
