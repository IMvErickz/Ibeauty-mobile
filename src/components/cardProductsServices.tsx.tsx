import { VStack, Image, Text, Button } from "native-base";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";

interface CardProps{
    Name: string
    img?: string
}

export function CardProducts({Name, img, ...rest}: CardProps) {

    const navigation = useNavigation()
    return (
        <Button className="w-full bg-white border-none" onPress={() => {navigation.navigate('store')}}>
            <VStack w='96' className="h-28 flex flex-row items-center justify-start border-borderColor border-t-2 border-b-2 border-solid gap-x-2">
            <Image
                source={{ uri: img}}
                alt="Imagem não encontrada"
                size="lg"
                className="rounded-full"
            />
            <VStack className="flex flex-row items-center justify-center gap-x-4">
            <VStack className="h-full flex flex-col items-center justify-start">
                <Text className="font-semibold text-xl text-black">{Name}</Text>
            </VStack>
            </VStack>
        </VStack>
        </Button>
    )
}