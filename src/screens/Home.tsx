import { VStack, Text } from 'native-base'
import {Buttoon} from '../components/Button'

export function Home() {
    return (
        <VStack className="flex-1 flex-col justify-center items-center bg-backGround bg-[url('../../assets/Bolinhas.png')]">
            <VStack className="flex flex-col items-start w-screen">
                <Text className="text-boldColor font-bold text-2xl">
                Seja Bem vindo ao IBeauty,  
                </Text>
                <Text className='text-boldColor font-semibold text-xl'>
                aproveite o app.
                </Text>
            </VStack>
            <VStack className="flex flex-col justify-center items-center gap-y-6 w-screen">
                <VStack className='flex flex-col items-start w-screen'>
                    <Text className='text-[#548075] font-semibold text-lg'>
                    Selecione a opção que você se encaixe!
                </Text>
                </VStack>
                <Buttoon
                tittle='Cliente'
                className="bg-boldColor w-80 p-3"
            />

            <Buttoon
                tittle='Profissionais'
                className="bg-boldColor w-80 p-3"
                
            />
            </VStack>
        </VStack>
    )
}