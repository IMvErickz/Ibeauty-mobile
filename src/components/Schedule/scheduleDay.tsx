import { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { DateContext } from '../../context/DateContex'
import { useLocalSearchParams, useRouter } from 'expo-router'

interface DayProps {
    day: string
    dayNumber: string
    disabled?: boolean
    date: string
}

export function ScheduleDay(props: DayProps) {
    const router = useRouter()

    const localParam = useLocalSearchParams()

    const { id: providerId } = localParam

    async function handleSetDateAndPushRouter() {
        router.push(`/schedule/hour/${props.date}/${providerId}`)
    }

    return (
        <View className="w-full flex flex-col items-center justify-center gap-y-8">
            <View className={`w-full flex flex-col items-end justify-end ${props.disabled && 'opacity-25'}`}>
                <View className="w-full flex flex-row items-start justify-start border-t-2 border-b-2 border-t-borderColor border-b-borderColor gap-x-8 p-2">
                    <View className="w-14 h-14 flex flex-col items-center justify-center rounded-lg border-2 border-black">
                        <View className="flex flex-row items-center justify-center gap-x-4">
                            <View className="w-3 h-3 rounded-full border-2 border-black"></View>
                            <View className="w-3 h-3 rounded-full border-2 border-black"></View>
                        </View>
                        <Text className="text-2xl text-black">{props.dayNumber}</Text>
                    </View>
                    <TouchableOpacity onPress={handleSetDateAndPushRouter} className='w-full items-start justify-start bg-transparent'>
                        <Text className="text-lg font-semibold mt-1">{props.day}, {props.dayNumber}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}