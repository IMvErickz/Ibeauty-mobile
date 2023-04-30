import { VStack, Text, ScrollView, Button } from "native-base";
import { Header } from "../components/header";
import { ButtonBack } from "../components/buttonBack";
import { useNavigation } from "@react-navigation/native";

export function Schedule() {

    const navigation = useNavigation()

    return (
        <ScrollView>
            <VStack w='100%' h='100%' justifyContent={'center'} alignItems={'center'} display={'flex'}>
                <VStack className='w-full flex flex-col items-center justify-center'>
                    <Header
                    ButtonBack={<ButtonBack/>}
                    />
                </VStack>
                <VStack className="w-full flex flex-col items-center justify-center gap-y-8">
                    <VStack className="w-full flex flex-col items-start justify-start ml-8 gap-y-8">
                        <Text className='text-lg font-semibold'>Selecione um dia disponivel na agenda:</Text>
                        <Text className='text-lg font-semibold'>Junho, 2022</Text>
                    </VStack>
                    <VStack className="w-full flex flex-col items-end justify-end">
                        <VStack className="w-full flex flex-row items-start justify-start border-t-2 border-b-2 border-t-borderColor border-b-borderColor gap-x-8 p-2">
                            <VStack className="w-14 h-14 flex flex-col items-center justify-center rounded-lg border-2 border-black">
                                <VStack className="flex flex-row items-center justify-center gap-x-4">
                                    <VStack className="w-3 h-3 rounded-full border-2 border-black"></VStack>
                                    <VStack className="w-3 h-3 rounded-full border-2 border-black"></VStack>
                                </VStack>
                                <Text className="text-2xl text-black">1</Text>
                            </VStack>
                            <Button className='w-full items-start justify-start bg-transparent' onPress={() => navigation.navigate('Hours')}>
                                <Text className='hidden'>id</Text>
                                <Text className="text-lg font-semibold mt-1">Quarta Feira, 1</Text>
                            </Button>
                        </VStack>
                    </VStack>
                </VStack>
            </VStack>
        </ScrollView>
    )
}