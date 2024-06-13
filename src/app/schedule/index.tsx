import { Header } from "../../components/header";
import { ScheduleDay } from "../../components/Schedule/scheduleDay";
import { api } from "../../../lib/axios";
import { View, Text, ScrollView } from 'react-native'
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import { useLocalSearchParams } from "expo-router";

interface daysProps {
    id: string
    day: string
}

interface scheduleProps {
    id: string
    day: string
    ScheduleDay: daysProps[]
}

interface BlockedDateResponse {
    blockedDates: number[]
    blockedWeekDays: number[]
}

export default function Schedule() {
    const localParam = useLocalSearchParams()

    const { providerId } = localParam

    dayjs.locale('pt-br');

    const weekDaysNumber = [0, 1, 2, 3, 4, 5, 6]

    async function getBlockedDate(providerId: string) {
        const response = await api.get<BlockedDateResponse>(`/blocked-date/${providerId}`)

        return response.data
    }

    const { data: blockedDate } = useQuery({
        queryKey: ['provider-schedule', providerId],
        queryFn: () => getBlockedDate(String(providerId))
    })

    const availableDays = weekDaysNumber.filter(day => !blockedDate?.blockedWeekDays.includes(day))

    const weekDayDate = availableDays.map(day => {
        const date = dayjs().set('day', day)
        const weekDay = dayjs(date).locale('pt-br').format('dddd')
        const numberDate = date.get('date')
        const currentDate = dayjs()

        return {
            weekDay: weekDay,
            day: numberDate,
            disabled: dayjs(date).isBefore(currentDate, 'day'),
            date
        }
    })

    const date = new Date();
    const getMonth = date.toLocaleString('pt-BR', { month: 'long' });
    const month = getMonth.charAt(0).toUpperCase() + getMonth.slice(1)
    const year = dayjs().get('year')

    return (
        <ScrollView>
            <View className="w-full h-full flex items-center justify-center">
                <View className='w-full flex flex-col items-center justify-center'>
                    <Header

                    />
                </View>
                <View className='w-full flex items-start p-2'>
                    <Text className='text-lg font-semibold'>Selecione um dia disponivel na agenda:</Text>
                    <Text className='text-lg font-semibold'>{month}, {year}</Text>
                </View>

                {weekDayDate.map((weekDay, index) => {
                    return (
                        <ScheduleDay
                            key={`${weekDay}+${index}`}
                            day={weekDay.weekDay}
                            dayNumber={String(weekDay.day)}
                            disabled={weekDay.disabled}
                            date={String(weekDay.date.toISOString())}
                        />
                    )
                })}

            </View>
        </ScrollView>
    )
}