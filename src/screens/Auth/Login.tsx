import { Button, Link, Text } from "native-base";
import { Buttoon } from "../../components/Buttons/Button";
import { Header } from "../../components/header";
import { Inpuut } from "../../components/Input/input";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as SecureStorage from 'expo-secure-store'
import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";
import { ButtonBack } from "../../components/Buttons/buttonBack";
import { TouchableOpacity, View } from 'react-native'
import { useAuth } from "../../hooks/useAuth";

interface DataProps {
    Password: string
    CPF: string
    CNPJ: string
}

export function Login() {

    const { params } = useRoute()

    const { title }: any = params

    const navigation = useNavigation()

    async function LocalAuth() {
        if (title == "Cliente") {
            navigation.navigate('Client')
        } else {
            navigation.navigate('Provider')
        }
    }
    const { singIn, isUserLoading } = useAuth()
    console.log("Dados do usuário: ", isUserLoading)

    return (
        <View
            className='bg-white w-full h-full items-center'>
            <View className="w-full flex items-center justify-center" >
                <Header
                    text={title}
                />
            </View>
            <View className="w-full h-full flex flex-col items-center justify-center gap-y-8">
                <View className="w-full flex flex-col items-start justify-start ml-4">
                    <Text className="text-LabelColor font-bold text-4xl">Conta IBeauty</Text>
                </View>
                <View className="w-full px-4 flex items-center justify-center">
                    <TouchableOpacity className="w-full h-12 rounded-lg bg-red-500 flex items-center justify-center" onPress={singIn}>
                        <Text className="text-white text-xl font-bold">Entrar com o Google</Text>
                    </TouchableOpacity>
                </View>
                {/* <View className="w-full px-4 flex items-center justify-center">
                    <View className="w-full flex flex-row items-start justify-start ml-4 gap-x-2">
                        <Text className="text-LabelColor text-xl font-semibold">Email:</Text>
                        {data.map(e => {
                            if (e.Password != pass) {
                                return (
                                    <Text className="text-red-600 text-xl font-semibold">Email ou senha incorretos</Text>
                                )
                            }
                        })}
                    </View>
                    <Inpuut
                        widht="24"
                        className='w-full h-12 rounded-lg p-2 bg-[#F1F1F1] placeholder:font-bold placeholder:text-2xl' placeholder='Email'
                        onChangeText={getEmail}
                    />
                </View>

                <View className="w-full px-4 flex items-center justify-center">
                    <View className="w-full flex flex-row items-start justify-start ml-4 gap-x-2">
                        <Text className="text-LabelColor text-xl font-semibold">Senha:</Text>
                        {data.map(e => {
                            if (e.Password != pass) {
                                return (
                                    <Text className="text-red-600 text-xl font-semibold">Email ou senha incorretos</Text>
                                )
                            }
                        })}
                    </View> */}
                {/* <Inpuut
                        widht="24"
                        className='w-full h-12 rounded-lg p-2 bg-[#F1F1F1] placeholder:font-bold placeholder:text-2xl' placeholder='Senha'
                        onChangeText={getPass}
                    /> */}
            </View>

            <View className="w-screen flex flex-col items-center justify-center">
                <Link className="font-bold text-xl" onPress={LocalAuth}>Não tem conta IBeauty? Clique e crie gratuitamente.</Link>
                <Link className="font-bold text-xl" onPress={LocalAuth}>Esqueci a senha</Link>
            </View>

            <View className="w-full px-4 flex items-center justify-center">
                {/* <Buttoon
                        tittle="Entrar"
                        color="boldColor"
                        className="w-full bg-[#6A8E86] flex items-center justify-center h-12 rounded-lg"
                        onPress={SetLogin}
                    /> */}
            </View>
            <View className='w-full px-8 flex flex-col items-start justify-start'>
                <ButtonBack />
            </View>
        </View>
    )
}