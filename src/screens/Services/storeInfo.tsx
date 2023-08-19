import { Header } from "../../components/header";
import { CardProducts } from "../../components/Cards/cardProductsServices.tsx";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMemo, useState } from "react";
import { api } from "../../../lib/axios";
import { View, Text, ScrollView, Image } from 'react-native'

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

export function Store() {

    const [id, setName] = useState('')
    async function StoreServices() {
        let idStore = await AsyncStorage.getItem('Storeid')
        setName(idStore as string)
        //console.log(name)
    }

    StoreServices()

    const [data, setData] = useState<ServiceProps[]>([])

    const memory = useMemo(async () => {
        await api.get(`/services/${id}`)
            .then(function (response) {
                setData(response.data.services)
            })
    }, [id])

    return (
        <ScrollView className="bg-white">
            <View className='w-full h-full flex items-center justify-center'>
                <View className="w-full flex items-center justify-center">
                    <Header />
                </View>
                {data.map(e => {
                    return (
                        <><View className='w-full flex flex-row items-center justify-center gap-x-16' key={e.Name}>
                            <Image source={{ uri: e.img }}
                                className="rounded-full static w-5" />
                            <Text className="font-bold text-xl">{e.Name}</Text>
                        </View>
                            <View className="w-full flex flex-col items-center justify-center">
                                {e.Service.map(e => {
                                    return (
                                        <CardProducts
                                            id={e.id}
                                            Name={e.NameService}
                                            img={e.img}
                                            Price={e.price}
                                        />
                                    )
                                })}
                            </View></>
                    )
                })}
            </View>
        </ScrollView>
    )
}