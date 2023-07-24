import { Input, IInputProps } from 'native-base'

interface InputProps extends IInputProps {
    placeholder?: string
    RightIcon?: JSX.Element
    LeftIcon?: JSX.Element
}

export function Inpuut({placeholder, RightIcon, LeftIcon, ...rest}: InputProps) {
    return (
        <Input
            placeholder={placeholder}
            backgroundColor="#F1F1F1"
            borderWidth='0'
            color={'black'}
            {...rest}
            InputLeftElement={LeftIcon}
            InputRightElement={RightIcon}
        />
    )
}