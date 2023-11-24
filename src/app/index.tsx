import { View, Text } from 'react-native'
import { Link } from 'expo-router';


export default function Home() {

    return (
        <>
            <View className="flex-1 flex-col justify-center items-center bg-backGround bg-[url('../../assets/Bolinhas.png')]">
                <View className="flex flex-col items-start w-screen p-2">
                    <Text className="text-boldColor font-bold text-2xl">
                        Seja Bem vindo ao IBeauty,
                    </Text>
                    <Text className='text-boldColor font-semibold text-xl'>
                        aproveite o app.
                    </Text>
                </View>
                <View className="flex flex-col justify-center items-center gap-y-6 w-screen">
                    <View className='flex flex-col items-start w-screen p-2'>
                        <Text className='text-[#548075] font-semibold text-lg'>
                            Selecione a opção que você se encaixe!
                        </Text>
                    </View>
                    <Link href={`/login/Cliente`} className="bg-boldColor rounded-lg flex w-80 p-3 items-center justify-center">
                        <Text className='text-white font-bold uppercase text-2xl items-center justify-center'>Cliente</Text>
                    </Link>

                    <Link href={`/login/Profissional`} className="bg-boldColor rounded-lg flex w-80 p-3 items-center justify-center">
                        <Text className='text-white font-bold uppercase text-2xl items-center justify-center'>Profissional</Text>
                    </Link>
                </View>
            </View>
        </>

    )
}