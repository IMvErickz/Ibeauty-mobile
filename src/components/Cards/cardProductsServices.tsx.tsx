import { useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity, Image } from 'react-native'

interface CardProps {
    Name: string
    img: string
    id: string
    Price: string
}

export function CardProducts({ Name, img, id, Price, ...rest }: CardProps) {

    const navigation = useNavigation()

    async function setIdService() {
        try {
            await AsyncStorage.setItem('idService', id)
            navigation.navigate('Schedule')
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    return (
        <TouchableOpacity className="w-full bg-white border-none" onPress={setIdService}>
            <View className="w-full h-28 flex flex-row items-center justify-start space-x-8">
                <Image
                    source={{ uri: img }}
                    className="rounded-full w-20 h-20"
                />
                <View className="flex flex-row items-center justify-center gap-x-4">
                    <View className="h-full w-full flex flex-row items-center justify-start">
                        <View className="w-40 flex items-start justify-start">
                            <Text className="font-semibold text-xl text-black">{Name}</Text>
                        </View>

                        <View className="w-36 flex items-center justify-center">
                            <Text className="font-semibold text-xl text-black">R${Price}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}