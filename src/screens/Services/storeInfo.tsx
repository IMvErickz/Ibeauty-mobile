import { Text, VStack, ScrollView, Image } from "native-base";
import { Header } from "../../components/header";
import { CardProducts } from "../../components/Cards/cardProductsServices.tsx";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMemo, useState } from "react";
import { api } from "../../../lib/axios";
import { useQuery } from "react-query";

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

    // const { data } = useQuery<ServiceProps[]>('ServiceProvider', async () => {
    //     const response = await api.get(`/services/${id}`)

    //     return response.data.services
    // })



    return (
        <ScrollView bg='white'>
            <VStack w="100%" h="100%" alignItems={"center"} justifyContent={"center"} display={"flex"}>
                <VStack w="full" alignItems={"center"} justifyContent={'center'}>
                    <Header />
                </VStack>
                {data.map(e => {
                    return (
                        <><VStack w={'full'} className='flex flex-row items-center justify-center gap-x-16' key={e.Name}>
                            <Image source={{ uri: e.img }}
                                alt="Imagem não encontrada"
                                size="lg"
                                className="rounded-full static" />
                            <Text className="font-bold text-xl">{e.Name}</Text>
                        </VStack>
                            <VStack className="w-full flex flex-col items-center justify-center">
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
                            </VStack></>
                    )
                })}
            </VStack>
        </ScrollView>
    )
}