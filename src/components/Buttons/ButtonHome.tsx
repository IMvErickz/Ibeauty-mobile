import { Button, Text, IButtonProps } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface ButtonProps extends IButtonProps {
    tittle: string,
    color?: string
}

export function ButtonHome({ tittle, color, ...rest }: ButtonProps) {

    async function SetLocalAuth() {
        await AsyncStorage.setItem('LocalAuth', tittle)
    }
    return (
        <Button
            {...rest}
            _pressed={{
                bg: 'primary.200'
            }}
            className={`bg-${color}`}
            onPress={SetLocalAuth}>
            <Text className='text-white font-bold uppercase text-2xl'>{tittle}</Text>
        </Button>
    )
}