import { Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../../components/header";
import { Checkbox, Radio } from "native-base";
import { router } from 'expo-router'
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { convertTimeStringToMinutes } from "../../../utils/convertTimeStringToMinutes";
import { getWeekDays } from "../../../utils/getWeekDays";
import { Input } from "../../../components/Input/input";
import * as SecureStorage from 'expo-secure-store'
import { api } from "../../../../lib/axios";

const scheduleSchema = z.object({
    intervals: z
        .array(
            z.object({
                weekDay: z.number().min(0).max(6),
                enabled: z.boolean(),
                startTime: z.string(),
                endTime: z.string(),
            }),
        )
        .length(7)
        .transform((intervals) => intervals.filter((interval) => interval.enabled))
        .refine((intervals) => intervals.length > 0, {
            message: 'Você precisa selecionar pelo menos um dia da semana',
        })
        .transform((intervals) => {
            return intervals.map((interval) => {
                return {
                    weekDay: interval.weekDay,
                    startTimeInMinutes: convertTimeStringToMinutes(interval.startTime),
                    endTimeInMinutes: convertTimeStringToMinutes(interval.endTime),
                }
            })
        })
        .refine(
            (intervals) => {
                return intervals.every(
                    (interval) =>
                        interval.endTimeInMinutes - 60 >= interval.startTimeInMinutes,
                )
            },
            {
                message:
                    'O horário de término deve ser pelo menos 1h distante do início.',
            },
        ),
})

type ScheduleSchemaInput = z.input<typeof scheduleSchema>
type ScheduleSchemaOutput = z.output<typeof scheduleSchema>

export default function CreateSchedule() {

    const { control, handleSubmit, formState: { isSubmitting, isSubmitted, isSubmitSuccessful } } = useForm<ScheduleSchemaInput>({
        resolver: zodResolver(scheduleSchema),
        defaultValues: {
            intervals: [
                { weekDay: 0, enabled: true, startTime: '08:00', endTime: '18:00' },
                { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
                { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
                { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
                { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
                { weekDay: 5, enabled: false, startTime: '08:00', endTime: '18:00' },
                { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
            ],
        }
    })

    const { fields } = useFieldArray({
        control,
        name: 'intervals'
    })

    const weekDays = getWeekDays()

    async function handleCreateSchedule(data: any) {
        const { intervals } = data as ScheduleSchemaOutput

        const userId = await SecureStorage.getItemAsync('userId')

        if (userId) {
            await api.post(`/shedule/${userId}`, {
                intervals
            })

            alert('Salvo com sucesso')
        }
    }


    return (
        <View className="flex-1 bg-white flex flex-col items-center justify-center">
            <View className="w-full">
                <Header
                    text="Sua Agenda"
                />
            </View>
            <View>
                <Text className="font-bold text-4xl">Crie aqui sua agenda</Text>
            </View>
            <View className="w-full flex-1 px-4 flex flex-col items-start justify-center space-y-4">

                {fields.map((weekDay, index) => {
                    return (
                        <Controller
                            control={control}
                            name={`intervals.${index}.enabled`}
                            render={({ field }) => {
                                return (
                                    <View className="w-full flex flex-row items-center gap-x-2">
                                        <Checkbox
                                            key={weekDay.id}
                                            value={weekDay.id}
                                            onChange={field.onChange}
                                            defaultIsChecked={weekDay.enabled}
                                        />
                                        <Text className="text-2xl font-semibold">{weekDays[weekDay.weekDay]}</Text>
                                        <View className="flex-1 flex-row items-center justify-end gap-x-2">
                                            <Controller
                                                control={control}
                                                name={`intervals.${index}.startTime`}
                                                render={({ field: { onBlur, onChange, value } }) => {
                                                    return (
                                                        <Input className="w-20 border border-solid border-gray-600 text-center rounded"
                                                            onBlur={onBlur} onChangeText={onChange} value={value} />
                                                    )
                                                }}
                                            />
                                            <Text className="font-bold text-xl mr-2">:</Text>
                                            <Controller
                                                control={control}
                                                name={`intervals.${index}.endTime`}
                                                render={({ field: { onBlur, onChange, value } }) => {
                                                    return (
                                                        <Input className="w-20 border border-solid border-gray-600 text-center rounded"
                                                            onBlur={onBlur} onChangeText={onChange} value={value} />
                                                    )
                                                }}
                                            />
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    )
                })}

                <View className="w-full flex items-center">
                    <TouchableOpacity disabled={isSubmitting} onPress={handleSubmit(handleCreateSchedule)} className=" bg-boldColor w-full h-12 flex items-center justify-center rounded-lg">
                        <Text className="text-white text-2xl font-semibold">
                            {isSubmitting ? 'Enviando...' : 'Salvar'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}