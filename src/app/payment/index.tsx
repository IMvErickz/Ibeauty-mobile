import { Header } from "../../components/header";
import { Buttons } from "../../components/payment/Button";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

export default function Payment() {


    return (
        <ScrollView>
            <View className="w-full h-full flex items-center justify-center">
                <Header />

                <View className='w-full flex flex-col items-center justify-center'>
                    <View className="flex flex-row items-center justify-center gap-x-14">
                        <Text className='text-black font-extrabold text-2xl'>Nome do Salão</Text>
                        <Image
                            className="rounded-full w-5"
                            source={{ uri: 'https://s2.glbimg.com/Ha2q-YYa3pCWtwM4E51zi_p-POI=/940x523/e.glbimg.com/og/ed/f/original/2019/02/20/blow-dry-bar-del-mar-chairs-counter-853427.jpg' }} />
                    </View>
                    <View className='w-full px-12'>
                        <Text className='font-bold text-xl'>Serviço</Text>
                        <Text className='text-lg font-semibold'>Horário</Text>
                        <View className='bg-borderColor w-full h-1' />
                        <TouchableOpacity className='bg-white'>
                            <Text className='text-xl font-bold'>Adicionar mais itens</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className='w-full pt-20 px-2'>
                    <Text className='text-xl font-bold'>Selecione a forma de pagamento</Text>
                    <Buttons />
                </View>
                <View className="w-full gap-y-4 px-5">
                    <TouchableOpacity className="w-full bg-boldColor">
                        <Text className='text-white font-bold text-xl'>Confirmar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='w-full bg-red-20'>
                        <Text className='text-white font-bold text-xl'>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}