import { Header } from "../../components/header";
import { CardProducts } from "../../components/Cards/cardProductsServices.tsx";
import { Payments } from "../../components/payment/Payments";
import { Money } from "phosphor-react-native";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

export function PastService() {

    return (
        <ScrollView className='w-full h-full bg-white'>
            <View className="w-full h-full bg-white">
                <Header />
                <View className="w-full h-full flex flex-col items-center gap-y-10 p-4">
                    <View className='gap-x-20 flex flex-row items-center justify-center'>
                        <View className="flex flex-col items-start justify-start">
                            <Text className='font-bold text-2xl'>Nome do salão</Text>

                        </View>
                        <View className=' py-4 flex items-end justify-end'>
                            <Image source={{ uri: 'https://marciatravessoni.com.br/wp-content/uploads/2021/09/Ida-Axenstedt-1.jpg' }}
                                className="rounded-full w-5"
                            />
                        </View>
                    </View>

                    <View className='w-full flex flex-row items-center justify-center'>
                        <CardProducts
                            Name="Servico"
                            img="https://marciatravessoni.com.br/wp-content/uploads/2021/09/Ida-Axenstedt-1.jpg"
                            id='123'
                            Price="20"
                        />
                    </View>

                    <View className="flex flex-row items-center justify-center gap-x-64">
                        <Text className='font-bold text-xl'>Dia</Text>
                        <Text className='font-bold text-xl'>Hora</Text>
                    </View>

                    <View className='w-full flex flex-col gap-y-4'>
                        <Text className='font-bold text-2xl'>Pagamento via:</Text>
                        <Text></Text>
                        <Payments
                            Icon={<Money size={32} color="#288755" weight="fill" style={{ paddingRight: 80 }} />}
                            Type="Dinheiro"
                        />
                    </View>

                    <View className='w-full flex flex-col items-center justify-center gap-y-4'>
                        <View className='w-[334px] h-[84px] rounded bg-boldColor flex items-center justify-center'>
                            <Text className='text-white uppercase text-2xl font-bold'>Agendado</Text>
                        </View>
                        <TouchableOpacity className='w-[334px] bg-boldColor rounded'>
                            <Text className='text-white font-semibold text-xl'>Comprovante</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}