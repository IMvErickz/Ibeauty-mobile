import { VStack, Image, Text, Button } from "native-base";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";

interface CardProps{
    Name: string
    img?: string
    id: string
}

export function CardProducts({ Name, img, id, ...rest }: CardProps) {
    
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
        <Button className="w-full bg-white border-none" onPress={setIdService}>
            <VStack w='96' className="h-28 flex flex-row items-center justify-start border-borderColor border-t-2 border-b-2 border-solid gap-x-2">
            <Image
                source={{ uri: img}}
                alt="Imagem não encontrada"
                size="lg"
                className="rounded-full"
            />
            <VStack className="flex flex-row items-center justify-center gap-x-4">
                    <VStack className="h-full flex flex-col items-center justify-start">
                    <Text className="hidden">{id}</Text>
                <Text className="font-semibold text-xl text-black">{Name}</Text>
            </VStack>
            </VStack>
        </VStack>
        </Button>
    )
}