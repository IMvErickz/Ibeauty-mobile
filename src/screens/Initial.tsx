import { Image, Text, VStack, ScrollView } from "native-base";
import { useState } from "react";
import { api } from "../../lib/axios";
import { CardInitial } from "../components/cardInitial";
import { useQuery } from 'react-query'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import { Header } from "../components/header";
import { Buttoon } from "../components/Button";

interface ProductsProps{
    Nome: string
    img: string
    CNPJ: string
}

export function Initial() {

    const navigation = useNavigation()

    const { data } = useQuery<ProductsProps[]>('Services', async () => {
        const response = await api.get('/provider')

        return response.data.provider
    })

   

    return (
        <ScrollView>
            <VStack w="100%" h="100%">
            <VStack w="full" alignItems={"center"} justifyContent={'center'}>
                <Header/>
            </VStack>
            <VStack w="full" h="full" alignItems={'center'} justifyContent="center" display={'flex'} flexDirection="column" className="p-24" bg={'white'}>
                    {data?.map(e => {
                        return (
                            <CardInitial
                                key={e.Nome}
                                Name={e.Nome}
                                img={e.img}
                                CNPJ={e.CNPJ}
                            />
                    )
                    })}
                    <Buttoon tittle="Adicionar Novo Serviço" onPress={() => navigation.navigate('NewProduct')}/>
                </VStack>
                
            </VStack>
        </ScrollView>
    )
}