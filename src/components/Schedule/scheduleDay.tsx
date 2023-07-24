import { VStack, Text, Button } from "native-base";
import { api } from "../../../lib/axios";

interface DayProps {
    press?: () => void
    id: string
    day: string
    dayNumber: string
}

export function ScheduleDay(props: DayProps) {
    return (
        <VStack className="w-full flex flex-col items-center justify-center gap-y-8">
            <VStack className="w-full flex flex-col items-end justify-end">
                <VStack className="w-full flex flex-row items-start justify-start border-t-2 border-b-2 border-t-borderColor border-b-borderColor gap-x-8 p-2">
                    <VStack className="w-14 h-14 flex flex-col items-center justify-center rounded-lg border-2 border-black">
                        <VStack className="flex flex-row items-center justify-center gap-x-4">
                            <VStack className="w-3 h-3 rounded-full border-2 border-black"></VStack>
                            <VStack className="w-3 h-3 rounded-full border-2 border-black"></VStack>
                        </VStack>
                        <Text className="text-2xl text-black">{props.dayNumber}</Text>
                    </VStack>
                    <Button className='w-full items-start justify-start bg-transparent' onPress={props.press}>
                        <Text className='hidden'>{props.id}</Text>
                        <Text className="text-lg font-semibold mt-1">{props.day}</Text>
                    </Button>
                </VStack>
            </VStack>
        </VStack>
    )
}