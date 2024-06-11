import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { DateContext } from "../../context/DateContex";

interface ScheduleHourProps {
    hour: number
}

export function ScheduleHour({ hour }: ScheduleHourProps) {
    return (
        <TouchableOpacity className='w-full flex flex-col items-start justify-start bg-transparent border-t-2 border-t-borderColor border-b-2 border-b-borderColor p-4'
        >
            <Text className='text-xl font-semibold'>{String(hour).padStart(2, '0')}:00</Text>
        </TouchableOpacity>
    )
}