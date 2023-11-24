import { ScrollView, Text } from "native-base";
import { Buttoon } from "../../components/Buttons/Button";
import { Header } from "../../components/header";
import { Inpuut } from "../../components/Input/input";
import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";
import { TouchableOpacity, View } from 'react-native'
import { useAuth } from "../../hooks/useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ArrowFatLeft } from "phosphor-react-native";
import { Link, useLocalSearchParams, router } from "expo-router";

interface DataProps {
    Password: string
    CPF: string
    CNPJ: string
}

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState('')

    const local = useLocalSearchParams();

    const { title } = local

    useEffect(() => {
        if (title == 'Cliente') {
            setRedirect('register/client')
        } else {
            setRedirect('register/provider')
        }
    }, [])

    const { singIn, isUserLoading } = useAuth()
    console.log("Dados do usuário: ", isUserLoading)

    async function handleSingIn() {
        await api.post(`/login/${title}`, {
            email,
            password
        }).then(function (response) {
            AsyncStorage.setItem('userId', response.data.user.id)
            router.push(`/home/${title}`)

        })
    }

    return (
        <ScrollView className="flex-1">
            <View
                className='bg-white w-full h-full items-center'>
                <View className="w-full flex items-center justify-center" >
                    <Header
                        text={title as string}
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
                    <View className="w-full px-4 flex items-center justify-center">
                        <View className="w-full flex flex-row items-start justify-start ml-4 gap-x-2">
                            <Text className="text-LabelColor text-xl font-semibold">Email:</Text>
                        </View>
                        <Inpuut
                            widht="24"
                            className='w-full h-12 rounded-lg p-2 bg-[#F1F1F1] placeholder:font-bold placeholder:text-2xl' placeholder='Email'
                            onChangeText={setEmail}
                        />
                    </View>

                    <View className="w-full px-4 flex items-center justify-center">
                        <View className="w-full flex flex-row items-start justify-start ml-4 gap-x-2">
                            <Text className="text-LabelColor text-xl font-semibold">Senha:</Text>
                        </View>
                        <Inpuut
                            widht="24"
                            className='w-full h-12 rounded-lg p-2 bg-[#F1F1F1] placeholder:font-bold placeholder:text-2xl' placeholder='Senha'
                            onChangeText={setPassword}
                        />
                    </View>

                    <View className="w-screen flex flex-col items-center justify-center">
                        <Link href={redirect} className="font-bold text-xl">Não tem conta IBeauty? Clique e crie gratuitamente.</Link>
                        <Link href={'/'} className="font-bold text-xl">Esqueci a senha</Link>
                    </View>

                    <View className="w-full px-4 flex items-center justify-center">
                        <Buttoon
                            tittle="Entrar"
                            color="boldColor"
                            className="w-full bg-[#6A8E86] flex items-center justify-center h-12 rounded-lg"
                            onPress={handleSingIn}
                        />
                    </View>
                    <View className='w-full px-8 flex flex-col items-start justify-start'>
                        <Link href={'/'}>
                            <ArrowFatLeft size={32} color="#6A8E86" weight="fill" />
                        </Link>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}