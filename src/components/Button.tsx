import { Button, Text, IButtonProps } from 'native-base'

interface ButtonProps extends IButtonProps{
    tittle: string,
}

export function Buttoon({tittle, ...rest}: ButtonProps) {
    return (
        <Button
            {...rest}
            _pressed={{
                bg: 'primary.200'
            }}
        >
            <Text className='text-white font-bold uppercase text-2xl'>
                {tittle}
            </Text>
        </Button>
    )
}