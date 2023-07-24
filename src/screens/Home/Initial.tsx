import { Image, Text, VStack, ScrollView, Button } from "native-base";
import { useEffect, useState, useMemo } from "react";
import { api } from "../../../lib/axios";
import { CardInitial } from "../../components/Cards/cardInitial";
import { useQuery } from 'react-query'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useLinkTo, useNavigation } from '@react-navigation/native'

import { Header } from "../../components/header";
import { Buttoon } from "../../components/Buttons/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CardProducts } from "../../components/Cards/cardProductsServices.tsx";
import { Drawer } from "../../components/Drawer";
import { List } from "phosphor-react-native";

interface ProductsProps {
    Name: string
    img: string
    CNPJ: string
}

interface SericoProps {
    NameService: string
    img: string
    id: string
    price: string
}

interface ServiceProps {
    Service: SericoProps[]
    Name: string
    img: string
}

export function Initial() {

    const navigation = useNavigation()

    const [ServicesData, setDataService] = useState<ProductsProps[]>([])
    const [ProviderData, setDataProvider] = useState<ServiceProps[]>([])
    const [drawer, setDrawer] = useState('none')

    function openSideBar() {
        setDrawer('flex')
        console.log(drawer)
    }

    useEffect(() => { openSideBar }, [drawer])

    const serviceMemory = useMemo(async () => {
        await api.get('/provider')
            .then(function (response) {
                setDataService(response.data.provider)
            })
    }, [])

    const [providerID, getProviderID] = useState('')
    async function StoreServices() {
        const id = await AsyncStorage.getItem('ProviderId')
        getProviderID(id as string)
        //console.log(name)
    }

    StoreServices()

    const providerDataMemory = useMemo(async () => {
        await api.get(`/services/${providerID}`)
            .then(function (response) {
                setDataProvider(response.data.services)
            })
    }, [providerID])

    const [change, getChange] = useState('')
    //alert(change)
    async function Change() {
        const category = await AsyncStorage.getItem('LocalAuth')
        getChange(category as string)
    }

    Change()

    ProviderData.map(e => e.Service.map(el => console.log(el.img)))



    return (
        <ScrollView bg='white'>
            <VStack w="100%" h="100%" alignItems={"center"} justifyContent={"center"} display={"flex"}>
                <VStack w="full" alignItems={"center"} justifyContent={'center'}>
                    <Header List={<Button className="bg-transparent" onPress={() => navigation.navigate('sidebar')}>
                        <List size={32} color="#416058" weight="fill" />
                    </Button>} />
                </VStack>
                <VStack className="w-full">
                    <Drawer open={drawer} />
                </VStack>
                <VStack w="full" alignItems={'center'} justifyContent="center" display={'flex'} flexDirection="column" className="py-8" bg={'white'}>
                    {change == "Cliente" ?
                        ServicesData?.map(e => {
                            return (
                                <CardInitial
                                    key={e.Name}
                                    Name={e.Name}
                                    img={e.img}
                                    CNPJ={e.CNPJ}
                                />
                            )
                        }) :


                        ProviderData?.map(e => {
                            return (
                                <><VStack className=' w-full h-max flex flex-row items-center justify-center gap-x-4' key={e.Name}>
                                    <Text className="font-bold text-xl">{e.Name}</Text>
                                    <Image source={{ uri: e.img }}
                                        alt="Imagem não encontrada"
                                        size="lg"
                                        className="rounded-full static" />
                                </VStack><VStack className="w-full flex flex-col items-center justify-center">
                                        {e.Service.map(service => {
                                            return (
                                                <CardProducts
                                                    key={service.id}
                                                    id={service.id}
                                                    Name={service.NameService}
                                                    img={service.img}
                                                    Price={service.price}
                                                />
                                            )
                                        })}
                                        <Buttoon tittle="Adcionar novo serviço" className="bg-boldColor w-full h-16" onPress={() => navigation.navigate('NewProduct')} />
                                    </VStack></>
                            )
                        })


                    }
                </VStack>

            </VStack>
        </ScrollView>
    )
}