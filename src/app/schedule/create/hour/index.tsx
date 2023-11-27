import { View, Text, TouchableOpacity } from "react-native";
import { Header } from "../../../../components/header";
import { Inpuut } from "../../../../components/Input/input";
import DateTimePicker from '@react-native-community/datetimepicker';
import { TimePicker } from "../../../../components/DateTime/TimePicker";

export default function CreateHour() {

    return (
        <View className="flex-1 flex flex-col items-center justify-center">
            <Header />
            <View className="py-4 flex items-center">
                <Text className="text-3xl text-center font-semibold">Digite aqui seu horário de disponibilidade</Text>
            </View>
            <View className="flex-1 w-full px-4 space-y-8 flex fex-col items-center justify-center">
                <TimePicker buttonTitle="Hora De Início" />
                <TimePicker buttonTitle="Hora De Almoço" />
                <TimePicker buttonTitle="Hora De Volta" />
                <TimePicker buttonTitle="Hora De Término" />
                <TimePicker buttonTitle="Intervalo entre cada serviço" />

                <TouchableOpacity className="bg-boldColor w-full h-12 flex items-center justify-center rounded-lg">
                    <Text className="text-white text-2xl font-semibold">Próximo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}