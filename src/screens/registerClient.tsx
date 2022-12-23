import {Text, VStack, ScrollView, FormControl, Checkbox} from 'native-base'
import { Buttoon } from '../components/Button'
import { Header } from '../components/header'
import { Inpuut } from '../components/input'

export  function Client(){
    return (
        <FormControl>
            <ScrollView>
        <VStack className='w-screen h-screen flex flex-col items-center justify-center bg-white'>
            <VStack className='w-full flex flex-col items-center justify-center gap-y-5'>
                <Header
                text='Novo Cliente'
            />
            </VStack>
            <VStack className=' w-full flex flex-col items-start justify-start'>
                <Text className='text-black font-semibold text-4xl'>Seus Dados</Text>
            </VStack>
            <VStack className='w-60 flex flex-row items-center justify-center p-5'>
                <Inpuut
                            width={'190'}
                            marginRight={'4'}
                    placeholder='Nome'
                />
                
                <Inpuut
                     width={'190'}
                    placeholder='Sobrenome'
                />
            </VStack>

            <VStack className='w-60 flex flex-row items-center justify-center p-5'>
                <Inpuut
                            width={'190'}
                            marginRight={'4'}
                    placeholder='Telefone (opcional)'
                />
                
                <Inpuut
                    width={'190'}
                    placeholder='Data de nascimento'
                />
            </VStack>

            <VStack className='w-full flex flex-col itens-center justify-center'>
                <Text className='text-black font-semibold text-4xl'>Dados de Login</Text>
            </VStack>

            <VStack flex={1} justifyContent='center' alignItems={'center'} className='flex flex-col itens-center justify-center w-full'>
                <VStack className='w-full flex flex-col itens-start justify-start'>
                    <Text className="text-black opacity-75 text-2xl">Email</Text>
                </VStack>
                <Inpuut width={'381'} />
                
                <VStack className='w-full flex flex-col itens-start justify-start'>
                    <Text className="text-black opacity-75 text-2xl">Confirme seu Email</Text>
                </VStack>
                <Inpuut width={'381'} />
                
                <VStack className='w-full flex flex-col itens-start justify-start'>
                    <Text className="text-black opacity-75 text-2xl">Senha</Text>
                </VStack>
                <Inpuut width={'381'} />
                
                <VStack className='w-full flex flex-col itens-start justify-start'>
                    <Text className="text-black opacity-75 text-2xl">Confirme sua Senha</Text>
                </VStack>
                <Inpuut width={'381'} />

                <VStack className='w-full flex flex-row items-start justify-start'>
                            
                            <Checkbox flexDirection={'row-reverse'} colorScheme="gray" value={'i'}>
                                    <Text className='text-black font-bold text-xl'>Eu li e concordo com os</Text>
                            </Checkbox>
                            
                </VStack>

                <VStack className='w-full flex flex-row itens-start justify-start'>
                           
                            <Checkbox flexDirection={'row-reverse'} colorScheme="gray" value={'i'}>
                                 <Text className='text-black font-bold text-xl'>Concordo em receber notificações de Ofertas e Produtos</Text>
                            </Checkbox>
                </VStack>
                
                <Buttoon
                        tittle='Finalizar Cadastro'
                            bg='#4D4D4D'
                            width={'341'}
                />
            </VStack>
            </VStack>
    </ScrollView>
        </FormControl>
    
    )
}