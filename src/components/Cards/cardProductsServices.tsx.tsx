import { Link, useRouter } from 'expo-router'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity, Image } from 'react-native'

interface CardProps {
    providerId: string
    Name: string
    img: string
    id: string
    Price: string
}

export function CardProducts({ Name, img, id, Price, providerId, ...rest }: CardProps) {

    const navigation = useRouter()

    async function setIdService() {
        try {
            await AsyncStorage.setItem('idService', id)
            navigation.push(`/schedule/${providerId}/${id}`)
        } catch (error) {
            throw error
        }
    }

    return (
        <Link href={{ pathname: '/schedule', params: { providerId: providerId, serviceId: id } }} className="w-full bg-white border-none">
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
        </Link>
    )
}