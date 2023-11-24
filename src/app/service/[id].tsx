import { Header } from "../../components/header";
import { CardProducts } from "../../components/Cards/cardProductsServices.tsx";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useMemo, useState } from "react";
import { api } from "../../../lib/axios";
import { View, Text, ScrollView, Image } from 'react-native'
import { useLocalSearchParams } from "expo-router";

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

export default function Store() {

    const localParam = useLocalSearchParams()

    const { id } = localParam

    const [data, setData] = useState<ServiceProps[]>([])

    useEffect(() => {
        async function getServices() {
            await api.get(`/services/${id}`)
                .then(function (response) {
                    setData(response.data.services)
                })
        }
        getServices()

    }, [])

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
                                className="rounded-full static"
                                width={80}
                                height={80}
                                key={e.Name}
                            />
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
                                            key={e.id}
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