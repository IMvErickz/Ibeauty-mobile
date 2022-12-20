import {Text, VStack} from 'native-base'
import { Buttoon } from '../components/Button'
import { Header } from '../components/header'
import { Inpuut } from '../components/input'

export  function Client(){
    return (
        <VStack className='w-screen h-screen flex flex-col items-center justify-center bg-bgLight'>
            <Header
                text='Novo Cliente'
            />
            <Text className='text-black font-semibold text-4xl'>Seus Dados</Text>
            <VStack className='w-60 flex flex-row items-center justify-center p-5'>
                <Inpuut
                    className='w-36'
                    placeholder='Nome'
                />
                
                <Inpuut
                    className='w-36 '
                    placeholder='Sobrenome'
                />
            </VStack>

            <VStack className='w-60 flex flex-row items-center justify-center p-5'>
                <Inpuut
                    className='w-36'
                    placeholder='Telefone (opcional)'
                />
                
                <Inpuut
                    className='w-36'
                    placeholder='Data de nascimento'
                />
            </VStack>

            <Text className='text-black font-semibold text-4xl'>Dados de Login</Text>

            <VStack className='flex flex-col itens-start justify-start w-full'>
                <Text className="text-black opacity-75 text-2xl">Email</Text>
                <Inpuut className='w-full' />
                
                <Text className="text-black opacity-75 text-2xl">Confirme seu Email</Text>
                <Inpuut className='w-full' />
                
                <Text className="text-black opacity-75 text-2xl">Senha</Text>
                <Inpuut className='w-full' />
                
                <Text className="text-black opacity-75 text-2xl">Confirme sua Senha</Text>
                <Inpuut className='w-full' />

                <VStack className='w-full'>
                    <Text className='text-black font-bold text-xl'>Eu li e concordo com os</Text>
                </VStack>

                <VStack className='w-full'>
                    <Text className='text-black font-bold text-xl'>Concordo em receber notificações de Ofertas e Produtos</Text>
                </VStack>
                
                <Buttoon
                tittle='Finalizar Cadastro'
                />
            </VStack>
        </VStack>
    )
}