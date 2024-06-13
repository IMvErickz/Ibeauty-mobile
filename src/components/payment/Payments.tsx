import { View, Text, TouchableOpacity } from 'react-native'

interface PaymentsProps {
    Type: string
    Icon: JSX.Element
}

export function Payments(props: PaymentsProps) {

    return (
        <View className="w-full flex items-start">
            <TouchableOpacity
                className="bg-white w-full flex flex-row justify-start border-t-borderColor border-b-borderColor border-t-2 border-b-2"
            >
                {props.Icon}
                <Text className="text-black font-bold text-xl">{props.Type}</Text>
            </TouchableOpacity>
        </View>

    )
}