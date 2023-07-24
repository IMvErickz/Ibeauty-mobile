import { VStack, Text, Button, Image, ScrollView } from "native-base";
import { Header } from "../../components/header";
import { Buttons } from "../../components/payment/Button";

export function Payment() {


    return (
        <ScrollView>
            <VStack w="100%" h="100%" className="flex items-center justify-center">
                <Header />

                <VStack className='w-full flex flex-col items-center justify-center'>
                    <VStack className="flex flex-row items-center justify-center gap-x-14">
                        <Text className='text-black font-extrabold text-2xl'>Nome do Salão</Text>
                        <Image
                            alt="Imagem não encontrada"
                            size="lg"
                            className="rounded-full"
                            source={{ uri: 'https://s2.glbimg.com/Ha2q-YYa3pCWtwM4E51zi_p-POI=/940x523/e.glbimg.com/og/ed/f/original/2019/02/20/blow-dry-bar-del-mar-chairs-counter-853427.jpg' }} />
                    </VStack>
                    <VStack className='w-full px-12'>
                        <Text className='font-bold text-xl'>Serviço</Text>
                        <Text className='text-lg font-semibold'>Horário</Text>
                        <VStack className='bg-borderColor w-full h-1' />
                        <Button className='bg-white'>
                            <Text className='text-xl font-bold'>Adicionar mais itens</Text>
                        </Button>
                    </VStack>
                </VStack>

                <VStack className='w-full pt-20 px-2'>
                    <Text className='text-xl font-bold'>Selecione a forma de pagamento</Text>
                    <Buttons />
                </VStack>
                <VStack className="w-full gap-y-4 px-5">
                    <Button className="w-full bg-boldColor">
                        <Text className='text-white font-bold text-xl'>Confirmar</Text>
                    </Button>
                    <Button className='w-full bg-red-20'>
                        <Text className='text-white font-bold text-xl'>Cancelar</Text>
                    </Button>
                </VStack>
            </VStack>
        </ScrollView>
    )
}