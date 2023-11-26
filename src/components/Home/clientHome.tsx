import { Image, Text, Button } from "native-base";
import { useEffect, useState, useMemo } from "react";
import { api } from "../../../lib/axios";
import { CardInitial } from "../Cards/cardInitial";
import { Divider } from 'native-base';

import { Header } from "../header";
import { Buttoon } from "../Buttons/Button";
import * as SecureStorage from 'expo-secure-store'
import { CardProducts } from "../Cards/cardProductsServices.tsx";
import { Drawer } from "../Drawer";
import { List } from "phosphor-react-native";
import { View, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

interface ProvidersProps {
    Name: string
    img: string
    CNPJ: string
    id: string
}

export function ClientHome() {

    const [ServicesData, setDataService] = useState<ProvidersProps[]>([])
    const [drawer, setDrawer] = useState('none')
    console.log("Data", ServicesData)

    function openSideBar() {
        setDrawer('flex')
        console.log(drawer)
    }

    useEffect(() => { openSideBar }, [drawer])

    useEffect(() => {
        async function getAllProvider() {
            await api.get('/provider')
                .then(function (response) {
                    setDataService(response.data.provider)
                })
        }
        getAllProvider()
    }, [])

    return (
        <ScrollView className="bg-white">
            <View className="w-full h-full flex items-center justify-center">
                <View className="w-full flex items-center justify-center">
                    <Header List={<Button className="bg-transparent">
                        <List size={32} color="#416058" weight="fill" />
                    </Button>} />
                </View>
                <View className="w-full">
                    <Drawer open={drawer} />
                </View>
                <View className='w-full flex items-center justify-center flex-col py-8 bg-white px-4'>
                    <Divider my="1" color={'#D9D9D9'} />

                    {ServicesData.map(e => {
                        return (
                            <>
                                <CardInitial
                                    CNPJ={e.CNPJ}
                                    Name={e.Name}
                                    img={e.img}
                                    key={e.CNPJ}
                                    id={e.id}
                                />
                                <Divider my="1" color={'#D9D9D9'} />

                            </>

                        )
                    })}
                </View>

            </View>
        </ScrollView>
    )
}