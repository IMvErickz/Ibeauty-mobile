import { } from "native-base";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity, Image } from 'react-native'

interface CardProps {
    Name: string
    img?: string
    CNPJ: string
}

export function CardInitial(props: CardProps) {

    const navigation = useNavigation()

    async function SetStoreName() {
        let nameStore = AsyncStorage.setItem('Storeid', props.CNPJ)
        //alert(props.CNPJ)
    }
    return (
        <TouchableOpacity className="w-full bg-white border-none" onPressIn={SetStoreName} onPress={() => { navigation.navigate('store') }}>
            <View className="w-24 h-28 flex flex-row items-center justify-start border-borderColor border-t-2 border-b-2 border-solid gap-x-2">
                <Image
                    source={{ uri: props.img }}
                    className="rounded-full w-5"
                />
                <Text className="hidden">{props.CNPJ}</Text>
                <View className="flex flex-row items-center justify-center gap-x-4">
                    <View className="h-full flex flex-col items-center justify-start">
                        <Text className="font-semibold text-xl">{props.Name}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}