import { VStack, Text, ScrollView, Button } from "native-base";
import { Header } from "../components/header";
import { ButtonBack } from "../components/buttonBack";
import { useNavigation } from "@react-navigation/native";
import { ScheduleDay } from "../components/scheduleDay";
import { api } from "../../lib/axios";
import { useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface daysProps {
    id: string
    day: string
}

interface scheduleProps {
    id: string
    day: string
    ScheduleDay: daysProps[]
}

export function Schedule() {

    const [id, getId] = useState('')

    async function GetId() {
        let id = await AsyncStorage.getItem('ProviderId')
        getId(id as string)
    }
    GetId()

    const [data, setData] = useState<scheduleProps[]>([])

    const memory = useMemo(async () => {
        await api.get(`/schedule/${id}`)
            .then(function (response) {
                setData(response.data.day)
            })
    }, [])

    data?.map(e => e.ScheduleDay.map(e => console.log(e.day, e.id)))

    const navigation = useNavigation()

    return (
        <ScrollView>
            <VStack w='100%' h='100%' justifyContent={'center'} alignItems={'center'} display={'flex'}>
                <VStack className='w-full flex flex-col items-center justify-center'>
                    <Header
                        ButtonBack={<ButtonBack />}
                    />
                </VStack>
                <VStack className='w-full flex items-start p-2'>
                    <Text className='text-lg font-semibold'>Selecione um dia disponivel na agenda:</Text>
                    <Text className='text-lg font-semibold'>Junho, 2023</Text>
                </VStack>

                {data?.map(e => e.ScheduleDay.map(e => {
                    return (
                        <ScheduleDay
                            press={() => navigation.navigate('Hours')}
                            day="Quarta-Feira"
                            dayNumber={e.day}
                            id="as"
                        />
                    )
                }
                ))}

            </VStack>
        </ScrollView>
    )
}