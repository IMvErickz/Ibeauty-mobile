import { VStack, Link, Text } from "native-base";
import { Buttoon } from "../../components/Buttons/Button";
import { Header } from "../../components/header";
import { Inpuut } from "../../components/Input/input";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useMemo, useState } from "react";
import { api } from "../../../lib/axios";
import { LockKey, User } from "phosphor-react-native";
import { ButtonBack } from "../../components/Buttons/buttonBack";

interface DataProps {
    Password: string
    CPF: string
    CNPJ: string
}

export function Login() {

    const [tittle, setTittle] = useState('')
    //console.log(tittle)

    async function setPageName() {

    }

    const memory = useMemo(async () => {
        let name = await AsyncStorage.getItem('LocalAuth')

        setTittle(name as string)
    }, [tittle])

    console.log('mem', tittle)

    const navigation = useNavigation()

    let local: any

    async function LocalAuth() {
        local = await AsyncStorage.getItem('LocalAuth')
        if (local == "Cliente") {
            navigation.navigate('Client')
        } else {
            navigation.navigate('Provider')
        }
    }
    setPageName()

    const [route, setRoute] = useState('')
    //console.log(route)
    const [email, getEmail] = useState('')
    const [pass, getPass] = useState('')
    const [data, getResponseData] = useState<DataProps[]>([])

    useEffect(() => {
        if (tittle == "Cliente") {
            setRoute("client")
        } else {
            setRoute('provider')
        }
    })

    async function SetLogin() {
        try {
            await api.get(`/${route}/${email}`)
                .then(function (response) {
                    getResponseData(response.data.userInfo)
                })

            data.map(async e => {
                if (tittle == "Cliente") {
                    await AsyncStorage.setItem('ClientId', e.CPF)
                    navigation.navigate('change')
                } else {
                    await AsyncStorage.setItem('ProviderId', e.CNPJ)
                    navigation.navigate('change')
                }
            })


        } catch (error) {

            console.error(error)
            throw error
        }
    }
    return (
        <VStack
            className='bg-white' w="full" h="full" alignItems={'center'}>
            <VStack width={'100%'} alignItems={'center'} justifyContent={'center'} display={'flex'} >
                <Header
                    text={tittle}
                />
            </VStack>
            <VStack className="w-full h-full flex flex-col items-center justify-center gap-y-8">
                <VStack className="w-full flex flex-col items-start justify-start ml-4">
                    <Text className="text-LabelColor font-bold text-4xl">Conta IBeauty</Text>
                </VStack>
                <VStack width={'full'} alignItems={'center'} justifyContent={'center'} display={'flex'}>
                    <VStack className="w-full flex flex-row items-start justify-start ml-4 gap-x-2">
                        <Text className="text-LabelColor text-xl font-semibold">Email:</Text>
                        {data.map(e => {
                            if (e.Password != pass) {
                                return (
                                    <Text className="text-red-600 text-xl font-semibold">Email ou senha incorretos</Text>
                                )
                            }
                        })}
                    </VStack>
                    <Inpuut width={'96'} height={'16'} placeholder='Email'
                        leftElement={<User size={32} color="black" weight="fill" />}
                        className="placeholder:font-bold placeholder:text-2xl"
                        onChangeText={getEmail}
                    />
                </VStack>

                <VStack width={'full'} alignItems={'center'} justifyContent={'center'} display={'flex'}>
                    <VStack className="w-full flex flex-row items-start justify-start ml-4 gap-x-2">
                        <Text className="text-LabelColor text-xl font-semibold">Senha:</Text>
                        {data.map(e => {
                            if (e.Password != pass) {
                                return (
                                    <Text className="text-red-600 text-xl font-semibold">Email ou senha incorretos</Text>
                                )
                            }
                        })}
                    </VStack>
                    <Inpuut width={'96'} height={'16'} placeholder='Senha'
                        leftElement={<LockKey size={32} color="black" weight="fill" />}
                        className="placeholder:font-bold placeholder:text-2xl"
                        onChangeText={getPass}
                        type="password"
                    />
                </VStack>

                <VStack className="w-screen flex flex-col items-center justify-center">
                    <Link className="font-bold text-xl" onPress={LocalAuth}>Não tem conta IBeauty? Clique e crie gratuitamente.</Link>
                    <Link className="font-bold text-xl" onPress={LocalAuth}>Esqueci a senha</Link>
                </VStack>

                <VStack>
                    <Buttoon
                        tittle="Entrar"
                        color="boldColor"
                        className="w-96 text-center"
                        onPress={SetLogin}
                    />
                </VStack>
                <VStack className='w-full flex flex-col items-start justify-start'>
                    <ButtonBack />
                </VStack>
            </VStack>
        </VStack>
    )
}