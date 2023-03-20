import { Text, VStack, ScrollView, Image, Button } from "native-base";
import { Header } from "../components/header";
import { CardProducts } from '../components/cardProductsServices.tsx'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from "react";
import { api } from "../../lib/axios";

interface SericoProps{
    NomeServico: string
    img: string
}

interface ServiceProps{
    servico: SericoProps[]
    Nome: string
}

export function Store({ servico, ...rest }: ServiceProps) {

    const [services, setServices] = useState<ServiceProps[]>([])
    const [name, setName] = useState('')

    async function StoreServices() {
     let nameLocal = await AsyncStorage.getItem('StoreName')
        setName(nameLocal as string)
        //console.log(name)
    }

    api.get(`/services/${name}`)
        .then(function (response) {
        setServices(response.data.services)
        })
    
    StoreServices()
    
    return (
        <ScrollView bg='white'>
            <VStack w={'full'} h={'full'} backgroundColor={'white'}>
                <VStack w="full" alignItems={"center"} justifyContent={'center'}>
                    <Header/>
                </VStack>
                {services.map(e => {
                    return (
                        <><VStack w={'full'} className='flex flex-row items-center justify-center gap-x-4'>
                            <Text className="font-bold text-xl">{e.Nome}</Text>
                            <Image source={{ uri: "https://marciatravessoni.com.br/wp-content/uploads/2021/09/Ida-Axenstedt-1.jpg" }}
                                alt="Imagem não encontrada"
                                size="lg"
                                className="rounded-full static" />
                        </VStack><VStack className="w-full flex flex-col items-center justify-center">
                                {e.servico.map(e => {
                                    return (
                                        <CardProducts
                                    Name={e.NomeServico}
                                    img={e.img} />
                                    )
                                })}
                            </VStack></>
                           )
                       })}
            </VStack>
        </ScrollView>
    )
}