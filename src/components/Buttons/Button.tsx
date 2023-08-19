import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'

interface ButtonProps extends Readonly<TouchableOpacityProps> {
    tittle: string,
    color?: string
}

export function Buttoon({ tittle, color, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            {...rest}
        >
            <Text className='text-white font-bold uppercase text-2xl'>{tittle}</Text>
        </TouchableOpacity>
    )
}