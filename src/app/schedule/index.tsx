import { Header } from "../../components/header";
import { useNavigation } from "@react-navigation/native";
import { ScheduleDay } from "../../components/Schedule/scheduleDay";
import { api } from "../../../lib/axios";
import { useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, ScrollView } from 'react-native'

interface daysProps {
    id: string
    day: string
}

interface scheduleProps {
    id: string
    day: string
    ScheduleDay: daysProps[]
}

export default function Schedule() {

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
            <View className="w-full h-full flex items-center justify-center">
                <View className='w-full flex flex-col items-center justify-center'>
                    <Header

                    />
                </View>
                <View className='w-full flex items-start p-2'>
                    <Text className='text-lg font-semibold'>Selecione um dia disponivel na agenda:</Text>
                    <Text className='text-lg font-semibold'>Junho, 2023</Text>
                </View>

                {data?.map(e => e.ScheduleDay.map(e => {
                    return (
                        <ScheduleDay
                            press={() => navigation.navigate('Hours')}
                            day="Quarta-Feira"
                            dayNumber={e.day}
                            id="ass"
                        />
                    )
                }
                ))}

            </View>
        </ScrollView>
    )
}