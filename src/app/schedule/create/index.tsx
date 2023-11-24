import { Text, View } from "react-native";
import { Header } from "../../../components/header";
import { Checkbox } from "native-base";
import { useState } from "react";

export default function CreateSchedule() {

    const [change, setChange] = useState('')

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
        <View className="w-full h-full bg-white flex flex-col items-center justify-center">
            <View className="w-full">
                <Header
                    text="Sua agenda"
                />
            </View>
            <View className='py-4 flex items-center justify-center'>
                <Text className="font-bold text-4xl">Crie aqui sua agenda</Text>
            </View>
            <View>
                {changes.map(change => {
                    return (
                        <View className="w-full flex flex-row items-center gap-x-1">
                            <Checkbox
                                key={change.value}
                                value={change.value}
                                borderColor={'black'}
                                size={"lg"}
                                colorScheme="info"
                            >
                                <Text key={change.value} className="text-2xl font-semibold">{change.label}</Text>
                            </Checkbox>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}