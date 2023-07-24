import { VStack, Text } from 'native-base'
import { Buttoon } from '../../components/Buttons/Button'
import { Link, useNavigation } from '@react-navigation/native';
import { ButtonHome } from '../../components/Buttons/ButtonHome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { TabBar } from '../../components/TabBar';

//const navigation = useNavigation()

export function Home() {

    const navigation = useNavigation()

    const [client, setCliente] = useState('')
    const [provider, setProvider] = useState('')


    async function isLogged() {
        const clienteID = await AsyncStorage.getItem('ClientId')
        const providerID = await AsyncStorage.getItem('ProviderId')

        setCliente(clienteID as string)
        setProvider(providerID as string)
    }

    isLogged()

    return (
        <>
            {client || provider ? <TabBar />
                :
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
                                Selecione a opção que você se encaixe!</Text>
                        </VStack>

                        <ButtonHome
                            tittle='Cliente'
                            className="bg-boldColor w-80 p-3"
                            onPressIn={() => { navigation.navigate('auth') }}
                        />

                        <ButtonHome
                            tittle='Profissionais'
                            className="bg-boldColor w-80 p-3"
                            onPressIn={() => { navigation.navigate('auth') }}
                        />
                    </VStack>
                </VStack>
            }
        </>

    )
}