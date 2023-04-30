import { VStack, Image, Text, Button } from "native-base";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";

interface CardProps{
    Name: string
    img?: string
    CNPJ: string
}

export function CardInitial(props: CardProps) {

    const navigation = useNavigation()

     async function SetStoreName() {
        let nameStore =  AsyncStorage.setItem('StoreName', props.CNPJ)
        alert(props.CNPJ)
    }
    return (
        <Button className="w-full bg-white border-none" onPressIn={SetStoreName} onPress={() => {navigation.navigate('store')}}>
            <VStack w='96' className="h-28 flex flex-row items-center justify-start border-borderColor border-t-2 border-b-2 border-solid gap-x-2">
            <Image
                source={{ uri: props.img}}
                alt="Imagem não encontrada"
                size="lg"
                className="rounded-full"
            />
                <Text className="hidden">{props.CNPJ}</Text>
            <VStack className="flex flex-row items-center justify-center gap-x-4">
            <VStack className="h-full flex flex-col items-center justify-start">
                <Text className="font-semibold text-xl">{props.Name}</Text>
            </VStack>
            </VStack>
        </VStack>
        </Button>
    )
}