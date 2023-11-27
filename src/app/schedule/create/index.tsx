import { Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../../components/header";
import { Radio } from "native-base";
import { useEffect, useState } from "react";
import { router } from 'expo-router'

export default function CreateSchedule() {

    const [change, setChange] = useState('')

    function handleSetChange() {
        router.replace('/schedule/create/hour')
    }

    const changes = [
        {
            value: 'week',
            label: 'Durante a semana'
        },
        {
            value: 'weekend',
            label: 'Somente finais de semana'
        },
        {
            value: 'every',
            label: 'Todos os dias'
        },
    ]

    return (
        <View className="flex-1 bg-white flex flex-col items-center justify-center">
            <View className="w-full">
                <Header
                    text="Sua Agenda"
                />
            </View>
            <View className="w-full flex-1 px-4 flex flex-col items-start justify-center space-y-4">
                <Text className="font-bold text-4xl">Crie aqui sua agenda</Text>
                {changes.map(change => {
                    return (
                        <View className="w-full flex flex-row items-center gap-x-1">
                            <Radio.Group name="chage"
                                onChange={value => setChange(value)}
                            >

                                <Radio
                                    key={change.value}
                                    value={change.value}

                                >
                                    <Text key={change.value} className="text-2xl font-semibold">{change.label}</Text>
                                </Radio>
                            </Radio.Group>
                        </View>
                    )
                })}

                <View className="w-full flex items-center">
                    <TouchableOpacity onPress={handleSetChange} className=" bg-boldColor w-full h-12 flex items-center justify-center rounded-lg">
                        <Text className="text-white text-2xl font-semibold">Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}