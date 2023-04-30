import { VStack, ScrollView, Text, Button } from "native-base";
import { Header } from "../components/header";
import { ButtonBack } from "../components/buttonBack";

export function Hours() {
    return (
        <ScrollView >
            <VStack w='100%' h='100%' display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <VStack className="w-full flex flex-col items-center justify-center">
                    <Header
                    ButtonBack={<ButtonBack/>}
                    />
                </VStack>
                <VStack className='w-full flex flex-col items-center justify-center gap-y-8'>
                    <VStack className='w-full flex flex-col items-start justify-start py-2'>
                        <Text className='text-xl font-semibold ml-4'>Selecione um horário:</Text>
                    </VStack>
                    <VStack className='w-full flex flex-col items-center justify-center'>
                        <Button className='w-full flex flex-col items-start justify-start bg-transparent border-t-2 border-t-borderColor border-b-2 border-b-borderColor'
                    
                        >
                            <Text className='hidden'>id</Text>
                            <Text className='text-xl font-semibold'>09:00</Text>
                        </Button>
                    </VStack>
                </VStack>
            </VStack>
        </ScrollView>
    )
}