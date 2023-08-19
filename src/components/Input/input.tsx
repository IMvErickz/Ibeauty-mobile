import { TextInput, TextInputProps } from 'react-native'

interface InputProps extends Readonly<TextInputProps> {
    placeholder?: string
    RightIcon?: JSX.Element
    LeftIcon?: JSX.Element
    widht?: string
}

export function Inpuut({ placeholder, RightIcon, LeftIcon, widht, ...rest }: InputProps) {
    return (
        <TextInput
            placeholder={placeholder}
            {...rest}

        />
    )
}