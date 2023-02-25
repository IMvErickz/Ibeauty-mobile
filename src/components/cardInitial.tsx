import { VStack, Image, Text } from "native-base";

interface CardProps{
    Name: string
    img: string
}

export function CardInitial(props: CardProps) {
    return (
        <VStack w='96' className="h-28 flex flex-row items-center justify-start border-borderColor border-t-2 border-b-2 border-solid">
            <Image
                source={{ uri: props.img}}
                alt="Imagem não encontrada"
                size="lg"
            />

            <VStack className="flex flex-row items-center justify-center gap-x-16">
            <VStack className="h-full flex flex-col items-center justify-start">
                <Text className="font-semibold text-xl">{props.Name}</Text>
            </VStack>
            <VStack className="h-full flex flex-col items-center justify-center">
                <Text className="font-semibold text-xl">Nome</Text>
            </VStack>
            </VStack>
        </VStack>
    )
}