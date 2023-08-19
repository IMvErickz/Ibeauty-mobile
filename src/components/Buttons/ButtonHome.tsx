import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import * as SecureStore from 'expo-secure-store'

import AsyncStorage from '@react-native-async-storage/async-storage'

interface ButtonProps extends Readonly<TouchableOpacityProps> {
    tittle: string,
    color?: string
}

export function ButtonHome({ tittle, color, ...rest }: ButtonProps) {

    async function SetLocalAuth() {
        await SecureStore.setItemAsync('LocalAuth', tittle)
    }
    return (
        <TouchableOpacity
            {...rest}
            className={`bg-${color} items-center justify-center flex rounded-lg`}
            onPress={SetLocalAuth}>
            <Text className='text-white font-bold uppercase text-2xl items-center justify-center'>{tittle}</Text>
        </TouchableOpacity>
    )
}