import { VStack, Text, Image, ScrollView, Button } from "native-base";
import { Header } from "../../components/header";
import { CardProducts } from "../../components/cardProductsServices.tsx";
import { Payments } from "../../components/payment/Payments";
import { Money } from "phosphor-react-native";
import { useState } from "react";

export function PastService() {

    return (
        <ScrollView className='w-full h-full bg-white'>
            <VStack w='100%' h='100%' className="bg-white">
                <Header />
                <VStack className="w-full h-full flex flex-col items-center gap-y-10 p-4">
                    <VStack className='gap-x-20 flex flex-row items-center justify-center'>
                        <VStack className="flex flex-col items-start justify-start">
                            <Text className='font-bold text-2xl'>Nome do salão</Text>

                        </VStack>
                        <VStack className=' py-4 flex items-end justify-end'>
                            <Image source={{ uri: 'https://marciatravessoni.com.br/wp-content/uploads/2021/09/Ida-Axenstedt-1.jpg' }}
                                alt="Não encontrado"
                                size="lg"
                                className="rounded-full"
                            />
                        </VStack>
                    </VStack>

                    <VStack className='w-full flex flex-row items-center justify-center'>
                        <CardProducts
                            Name="Servico"
                            img="https://marciatravessoni.com.br/wp-content/uploads/2021/09/Ida-Axenstedt-1.jpg"
                            id='123'
                            Price="20"
                        />
                    </VStack>

                    <VStack className="flex flex-row items-center justify-center gap-x-64">
                        <Text className='font-bold text-xl'>Dia</Text>
                        <Text className='font-bold text-xl'>Hora</Text>
                    </VStack>

                    <VStack className='w-full flex flex-col gap-y-4'>
                        <Text className='font-bold text-2xl'>Pagamento via:</Text>
                        <Text></Text>
                        <Payments
                            Icon={<Money size={32} color="#288755" weight="fill" style={{ paddingRight: 80 }} />}
                            Type="Dinheiro"
                        />
                    </VStack>

                    <VStack className='w-full flex flex-col items-center justify-center gap-y-4'>
                        <VStack className='w-[334px] h-[84px] rounded bg-boldColor flex items-center justify-center'>
                            <Text className='text-white uppercase text-2xl font-bold'>Agendado</Text>
                        </VStack>
                        <Button className='w-[334px] bg-boldColor rounded'>
                            <Text className='text-white font-semibold text-xl'>Comprovante</Text>
                        </Button>
                    </VStack>
                </VStack>
            </VStack>
        </ScrollView>
    )
}