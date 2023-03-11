import { Image, Text, VStack, ScrollView } from "native-base";
import { useState } from "react";
import { api } from "../../lib/axios";
import { CardInitial } from "../components/cardInitial";
import { useQuery } from 'react-query'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Store } from "./storeInfo";
import {MapPin} from 'phosphor-react-native'


import { Header } from "../components/header";

interface ProductsProps{
    Name: string
    img: string
}

export function Initial() {

    // const [products, getProducts] = useState<ProductsProps[]>([])
    
    // api.get('/services')
    //     .then(function (response) {
    //     getProducts(response.data.getAllServices)
    //     })
    
    const { data } = useQuery<ProductsProps[]>('Services', async () => {
        const response = await api.get('/products')

        return response.data.products
    })

   

    return (
        <ScrollView>
            <VStack w="100%" h="100%">
            <VStack w="full" alignItems={"center"} justifyContent={'center'}>
                <Header/>
            </VStack>
            <VStack w="full" alignItems={'center'} justifyContent="center" display={'flex'} flexDirection="column" className="p-24" bg={'white'}>
                    {data?.map(e => {
                        return (
                            <CardInitial
                                key={e.Name}
                                Name={e.Name}
                                img={e.img}
                            />
                    )
                })}
            </VStack>
            </VStack>
        </ScrollView>
    )
}