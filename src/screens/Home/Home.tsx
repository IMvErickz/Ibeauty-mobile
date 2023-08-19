import { Link, useNavigation } from '@react-navigation/native';
import { ButtonHome } from '../../components/Buttons/ButtonHome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store'
import { useState } from 'react';
import { TabBar } from '../../components/TabBar';
import { View, Text } from 'react-native'

//const navigation = useNavigation()

export function Home() {

    const navigation = useNavigation()

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
                            Selecione a opção que você se encaixe!</Text>
                    </View>

                    <ButtonHome
                        tittle='Cliente'
                        className="bg-boldColor w-80 p-3"
                        onPressIn={() => {
                            navigation.navigate('auth', {
                                title: 'Cliente'
                            })
                        }}
                    />

                    <ButtonHome
                        tittle='Profissionais'
                        className="bg-boldColor w-80 p-3"
                        onPressIn={() => {
                            navigation.navigate('auth', {
                                title: 'Prestador'
                            })
                        }}
                    />
                </View>
            </View>

        </>

    )
}