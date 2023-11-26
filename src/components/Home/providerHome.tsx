import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native"
import { Header } from "../header"
import { List } from "phosphor-react-native"
import { Button } from "native-base"
import { Drawer } from "../Drawer"
import { CardInitial } from "../Cards/cardInitial"
import { useMemo, useState } from "react"
import { CardProducts } from "../Cards/cardProductsServices.tsx"
import { Buttoon } from "../Buttons/Button"
import * as SecureStorage from 'expo-secure-store'
import { api } from "../../../lib/axios"
import { Link } from "expo-router"

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

export function ProviderHome() {

    const [ProviderData, setDataProvider] = useState<ServiceProps[]>([])

    const [providerID, getProviderID] = useState('')
    async function StoreServices() {
        const id = await SecureStorage.getItemAsync('userId')
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

    return (
        <ScrollView className="bg-white">
            <View className="w-full h-full flex items-center justify-center">
                <View className="w-full flex items-center justify-center">
                    <Header List={<Button className="bg-transparent">
                        <List size={32} color="#416058" weight="fill" />
                    </Button>} />
                </View>
                {/* <View className="w-full">
                    <Drawer open={drawer} />
                </View> */}
                <View className='w-full flex items-center justify-center flex-col py-8 bg-white'>
                    {ProviderData?.map(e => {
                        return (
                            <><View className=' w-full h-max flex flex-row items-center justify-center gap-x-4' key={e.Name}>
                                <Text className="font-bold text-xl">{e.Name}</Text>
                                <Image source={{ uri: e.img }}
                                    alt="Imagem não encontrada"
                                    className="rounded-full static"
                                    width={80}
                                    height={80}
                                />
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

                                        <Link href={'/product/register'} asChild>
                                            <TouchableOpacity className=" bg-boldColor w-full h-16 flex items-center justify-center rounded-lg">
                                                <Text className="text-white text-2xl font-semibold">Adicionar Novo Serviço</Text>
                                            </TouchableOpacity>
                                        </Link>

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