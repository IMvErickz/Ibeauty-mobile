import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { DateContext } from "../../context/DateContex";
import { Link, useLocalSearchParams, useRouter } from "expo-router";

interface ScheduleHourProps {
    hour: number
}

export function ScheduleHour({ hour }: ScheduleHourProps) {
    const params = useLocalSearchParams()

    const { providerId, serviceId, date } = params

    return (
        <Link href={{ pathname: '/payment', params: { providerId, serviceId, date, hour } }} className='w-full flex flex-col items-start justify-start bg-transparent border-t-2 border-t-borderColor border-b-2 border-b-borderColor p-4'
        >
            <Text className='text-xl font-semibold'>{String(hour).padStart(2, '0')}:00</Text>
        </Link>
    )
}