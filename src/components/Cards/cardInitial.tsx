import { } from "native-base";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Link } from "expo-router";

interface CardProps {
    Name: string
    img?: string
    CNPJ: string
    id: string
}

export function CardInitial(props: CardProps) {
    return (

        <View className="w-full h-28 flex px-4 flex-row items-center justify-start border-borderColor border-t-2 border-b-2 border-solid gap-x-2">

            <Image
                source={{ uri: 'https://s2.glbimg.com/Ha2q-YYa3pCWtwM4E51zi_p-POI=/940x523/e.glbimg.com/og/ed/f/original/2019/02/20/blow-dry-bar-del-mar-chairs-counter-853427.jpg' }}
                className="rounded-full"
                width={80}
                height={80}

            />
            <View className="flex flex-row items-center justify-center gap-x-4">
                <View className="h-full flex flex-col items-center justify-start">
                    <Link href={`/service/${props.id}`} className="w-full flex items-center justify-center">
                        <Text className="font-semibold text-xl">{props.Name}</Text>
                    </Link>
                </View>
            </View>

        </View >

    )
}