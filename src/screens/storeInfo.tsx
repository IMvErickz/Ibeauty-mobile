import { Text, VStack, ScrollView, Image, Button } from "native-base";
import { Header } from "../components/header";
import {AsyncStorage} from 'react-native';
import { CardInitial } from "../components/cardInitial";

interface ServiceProps{
    Name: string
    img: string
}

export function Store() {
    
    return (
        <ScrollView bg='white'>
            <VStack w={'full'} h={'full'} backgroundColor={'white'}>
                <VStack w="full" alignItems={"center"} justifyContent={'center'}>
                    <Header/>
                </VStack>

                <VStack w={'full'} className='flex flex-row items-center justify-center gap-x-4'>
                    <Text className="font-bold text-xl">Nome do estabelecimento</Text>
                    <Image source={{ uri: "https://marciatravessoni.com.br/wp-content/uploads/2021/09/Ida-Axenstedt-1.jpg" }}
                    alt="Imagem não encontrada"
                    size="lg"
                    className="rounded-full static"
                    />
                </VStack>

                <VStack className="w-full flex flex-col items-center justify-center">
                    <CardInitial
                        Name="Progressiva"
                        img="https://b3m2z2q9.rocketcdn.me/wp-content/uploads/2020/07/alisamento-sem-formol-beneficios-da-escova-progressiva-sem-formol.jpg"
                    />
                </VStack>
            </VStack>
        </ScrollView>
    )
}