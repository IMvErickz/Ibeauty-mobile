import { Input, IInputProps } from 'native-base'

interface InputProps extends IInputProps {
    placeholder?: string
}

export function Inpuut({placeholder, ...rest}: InputProps) {
    return (
        <Input
            placeholder={placeholder}
            backgroundColor="#F1F1F1"
            borderWidth='0'
            color={'black'}
            {...rest}
        />
    )
}