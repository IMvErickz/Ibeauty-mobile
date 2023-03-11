import { VStack } from "native-base";
import { Header } from "../components/header";
import { Inpuut } from "../components/input";

export function Login() {
    return (
        <VStack
            className='bg-white w-screen h-screen flex flex-col'>
            <VStack width={'100%'} alignItems={'center'} justifyContent={'center'} display={'flex'} >
                <Header
                text="Login"
                />
            </VStack>
            <VStack className="w-full gap-y-8">
                <VStack width={'full'} alignItems={'center'} justifyContent={'center'} display={'flex'}>
                    <Inpuut width={'96'} height={'20'} placeholder='Email'
                    className="placeholder:font-bold placeholder:text-2xl"
                    />
                </VStack>

                <VStack width={'full'} alignItems={'center'} justifyContent={'center'} display={'flex'}>
                    <Inpuut width={'96'} height={'20'} placeholder='Senha'
                    className="placeholder:font-bold placeholder:text-2xl"
                    />
                </VStack>
            </VStack>
        </VStack>
    )
}