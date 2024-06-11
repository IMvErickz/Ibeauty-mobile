import { ScheduleHour } from "../../../components/Schedule/ScheduleHour";
import { Header } from "../../../components/header";
import { View, Text, ScrollView } from 'react-native'
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../../../lib/axios";

interface AvailableResponse {
    possibleTimes: number[]
    availableTimes: number[]
}

export default function Hours() {
    const { date } = useLocalSearchParams()

    async function getAvailableHours(id: string) {
        if (!date) {
            return
        }
        const response = await api.post<AvailableResponse>(`/availability/${id}`, {
            date: date[0]
        })

        return response.data
    }

    const { data: availability } = useQuery({
        queryKey: ['available-hour', date],
        queryFn: () => getAvailableHours(String(date && date[1]))
    })

    return (
        <ScrollView >
            <View className="w-full h-full flex items-center justify-center">
                <View className="w-full flex flex-col items-center justify-center">
                    <Header
                    />
                </View>
                <View className='w-full flex flex-col items-center justify-center gap-y-8'>
                    <View className='w-full flex flex-col items-start justify-start py-2'>
                        <Text className='text-xl font-semibold ml-4'>Selecione um horário:</Text>
                    </View>
                    <View className='w-full flex flex-col items-center justify-center'>
                        {availability?.availableTimes.length === 0 &&
                            <Text className="text-2xl text-center">Sem horarios disponíveis</Text>}
                        {availability?.availableTimes.map(hour => {
                            return (
                                <ScheduleHour hour={hour} />
                            )
                        })}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}