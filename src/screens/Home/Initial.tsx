import { Image, Text, Button } from "native-base";
import { useEffect, useState, useMemo } from "react";
import { api } from "../../../lib/axios";
import { CardInitial } from "../../components/Cards/cardInitial";
import { useNavigation } from '@react-navigation/native'

import { Header } from "../../components/header";
import { Buttoon } from "../../components/Buttons/Button";
import * as SecureStorage from 'expo-secure-store'
import { CardProducts } from "../../components/Cards/cardProductsServices.tsx";
import { Drawer } from "../../components/Drawer";
import { List } from "phosphor-react-native";
import { View, ScrollView } from "react-native";

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
        const id = await SecureStorage.getItemAsync('ProviderId')
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
        const category = await SecureStorage.getItemAsync('LocalAuth')
        getChange(category as string)
    }

    Change()

    return (
        <ScrollView className="bg-white">
            <View className="w-full h-full flex items-center justify-center">
                <View className="w-full flex items-center justify-center">
                    <Header List={<Button className="bg-transparent" onPress={() => navigation.navigate('sidebar')}>
                        <List size={32} color="#416058" weight="fill" />
                    </Button>} />
                </View>
                <View className="w-full">
                    <Drawer open={drawer} />
                </View>
                <View className='w-full flex items-center justify-center flex-col py-8 bg-white'>
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
                                <><View className=' w-full h-max flex flex-row items-center justify-center gap-x-4' key={e.Name}>
                                    <Text className="font-bold text-xl">{e.Name}</Text>
                                    <Image source={{ uri: e.img }}
                                        alt="Imagem não encontrada"
                                        size="lg"
                                        className="rounded-full static" />
                                </View><View className="w-full flex flex-col items-center justify-center">
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
                                        <View className="w-full flex items-center justify-center px-4 py-2">
                                            <Buttoon tittle="Adcionar novo serviço" className="bg-boldColor w-full h-16 flex rounded-lg items-center justify-center" onPress={() => navigation.navigate('NewProduct')} />
                                        </View>
                                    </View></>
                            )
                        })
                    }
                </View>

            </View>
        </ScrollView>
    )
}