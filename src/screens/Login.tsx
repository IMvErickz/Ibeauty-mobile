import { VStack, Link } from "native-base";
import { Buttoon } from "../components/Button";
import { Header } from "../components/header";
import { Inpuut } from "../components/input";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from "react";

interface LoginProps{
    Title: string
}

export function Login(props: LoginProps) {

    const [tittle, setTittle] = useState('')

    async function setPageName() {
        let name = await AsyncStorage.getItem('LocalAuth')

        setTittle(name as string)
    }

    const navigation = useNavigation()

    let local

    async function LocalAuth() {
        local = await AsyncStorage.getItem('LocalAuth')

        if (local == "Cliente") {
            navigation.navigate('Client')
        } else {
            navigation.navigate('Provider')
        }
    }
    setPageName()

    return (
        <VStack
            className='bg-white' w="full" h="full" alignItems={'center'}>
            <VStack width={'100%'} alignItems={'center'} justifyContent={'center'} display={'flex'} >
                <Header
                text={tittle}
                />
            </VStack>
            <VStack className="w-full h-full flex flex-col items-center justify-center gap-y-8">
                <VStack width={'full'} alignItems={'center'} justifyContent={'center'} display={'flex'}>
                    <Inpuut width={'96'} height={'16'} placeholder='Email'
                    className="placeholder:font-bold placeholder:text-2xl"
                    />
                </VStack>

                <VStack width={'full'} alignItems={'center'} justifyContent={'center'} display={'flex'}>
                    <Inpuut width={'96'} height={'16'} placeholder='Senha'
                    className="placeholder:font-bold placeholder:text-2xl"
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
                    />
                </VStack>
            </VStack>
        </VStack>
    )
}