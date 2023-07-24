import { Button, Text, IButtonProps } from 'native-base'

interface ButtonProps extends IButtonProps {
    tittle: string,
    color?: string
}

export function Buttoon({ tittle, color, ...rest }: ButtonProps) {
    return (
        <Button
            {...rest}
            _pressed={{
                bg: 'primary.200'
            }}
            className={`bg-${color}`}
        >
            <Text className='text-white font-bold uppercase text-2xl'>{tittle}</Text>
        </Button>
    )
}