import { Header } from "../../components/header";
import { ButtonBack } from "../../components/Buttons/buttonBack";
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'

export function Hours() {
    return (
        <ScrollView >
            <View className="w-full h-full flex items-center justify-center">
                <View className="w-full flex flex-col items-center justify-center">
                    <Header
                        ButtonBack={<ButtonBack />}
                    />
                </View>
                <View className='w-full flex flex-col items-center justify-center gap-y-8'>
                    <View className='w-full flex flex-col items-start justify-start py-2'>
                        <Text className='text-xl font-semibold ml-4'>Selecione um horário:</Text>
                    </View>
                    <View className='w-full flex flex-col items-center justify-center'>
                        <TouchableOpacity className='w-full flex flex-col items-start justify-start bg-transparent border-t-2 border-t-borderColor border-b-2 border-b-borderColor'
                        >
                            <Text className='hidden'>id</Text>
                            <Text className='text-xl font-semibold'>09:00</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}