import { Image, Text, VStack, ScrollView } from "native-base";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { CardInitial } from "../components/cardInitial";
import { useQuery } from 'react-query'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import { Header } from "../components/header";
import { Buttoon } from "../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CardProducts } from "../components/cardProductsServices.tsx";

interface ProductsProps{
    Nome: string
    img: string
    CNPJ: string
}

interface SericoProps{
    NomeServico: string
    img: string
}

interface ServiceProps{
    servico: SericoProps[]
    Nome: string
    img: string
}

export function Initial() {

    const navigation = useNavigation()

    const { data: ServicesData } = useQuery<ProductsProps[]>('Services', async () => {
        const response = await api.get('/provider')

        return response.data.provider
    })

    const [providerID, getProviderID] = useState('')
    async function StoreServices() {
     let id = await AsyncStorage.getItem('ProviderId')
     getProviderID(id as string)
        //console.log(name)
    }

    StoreServices()

    const {data: ProviderData} = useQuery<ServiceProps[]>('ServiceProvider', async () => {
        const response = await api.get(`/services/${providerID}`)

        return response.data.services
    })

    const [change, getChange] = useState('')
    //alert(change)
    async function Change() {
        const category = await AsyncStorage.getItem('LocalAuth')
            getChange(category as string)
    }

    Change()

    return (
        <ScrollView>
            <VStack w="100%" h="100%" alignItems={"center"} justifyContent={'center'}>
            <VStack w="full" alignItems={"center"} justifyContent={'center'}>
                <Header/>
            </VStack>
                <VStack w="full" h="full" alignItems={'center'} justifyContent="center" display={'flex'} flexDirection="column" className="p-2" bg={'white'}>
                    {change == "Cliente" ?
                        ServicesData?.map(e => {
                            return (
                                <CardInitial
                                key={e.Nome}
                                Name={e.Nome}
                                img={e.img}
                                CNPJ={e.CNPJ}
                            />
                            )
                        }) :
                        
                        
                            ProviderData?.map(e => {
                                return (
                                    <><VStack w={'full'} className='flex flex-row items-center justify-center gap-x-4' key={e.Nome}>
                            <Text className="font-bold text-xl">{e.Nome}</Text>
                            <Image source={{ uri: e.img }}
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
                                    <Buttoon tittle="Adicionar Novo Serviço" onPress={() => navigation.navigate('NewProduct')}/>
                            </VStack></>
                                )
                            })
                            
                        
                    }
                </VStack>
                
            </VStack>
        </ScrollView>
    )
}