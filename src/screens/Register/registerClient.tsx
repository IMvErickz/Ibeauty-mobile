import { Text, VStack, ScrollView, FormControl, Checkbox } from 'native-base'
import { Buttoon } from '../../components/Buttons/Button'
import { Header } from '../../components/header'
import { Inpuut } from '../../components/Input/input'
import { Eye } from 'phosphor-react-native'
import { ButtonBack } from '../../components/Buttons/buttonBack'
import { useState } from 'react'
import { api } from '../../../lib/axios'
import { useNavigation } from '@react-navigation/native'

export function Client() {

    const navigation = useNavigation()

    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [CPF, setCPF] = useState('')
    const [Password, setPassword] = useState('')
    const [cellNumber, setcellNumber] = useState('')
    const [dateBirth, setDate] = useState('')

    async function Register() {

        try {
            const client = await api.post('/user/register', {
                CPF,
                Name,
                email,
                Password,
                cellNumber,
                dateBirth,
                cep: "12922-341",
                number: "669"
            })

            navigation.navigate('auth')
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    return (
        <FormControl>
            <ScrollView>
                <VStack w="100%" h="100%" alignItems={"center"} justifyContent={"center"} display={"flex"} className="bg-white">
                    <VStack w="100%" alignItems={"center"} justifyContent={"center"} display={"flex"}>
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
                            onChangeText={setName}
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
                            onChangeText={setcellNumber}
                        />

                        <Inpuut
                            width={'190'}
                            placeholder='Data de nascimento'
                            onChangeText={setDate}
                        />
                    </VStack>

                    <VStack className='w-full flex flex-col items-center justify-center'>
                        <Text className='text-black font-semibold text-4xl'>Dados de Login</Text>
                    </VStack>

                    <VStack flex={1} justifyContent='center' alignItems={'center'} className='flex flex-col items-center justify-center w-full'>
                        <VStack className='w-full flex flex-col items-start justify-start'>
                            <Text className="text-black opacity-75 text-2xl">CPF</Text>
                        </VStack>
                        <Inpuut width={'381'} onChangeText={setCPF} />

                        <VStack className='w-full flex flex-col items-start justify-start'>
                            <Text className="text-black opacity-75 text-2xl">Email</Text>
                        </VStack>
                        <Inpuut width={'381'} onChangeText={setEmail} />

                        <VStack className='w-full flex flex-col items-start justify-start'>
                            <Text className="text-black opacity-75 text-2xl">Confirme seu Email</Text>
                        </VStack>
                        <Inpuut width={'381'} />

                        <VStack className='w-full flex flex-col items-start justify-start'>
                            <Text className="text-black opacity-75 text-2xl">Senha</Text>
                        </VStack>
                        <Inpuut width={'381'}
                            RightIcon={<Eye size={32} color="black" weight="fill" style={{ marginRight: 12 }} />}
                            onChangeText={setPassword}
                        />

                        <VStack className='w-full flex flex-col items-start justify-start'>
                            <Text className="text-black opacity-75 text-2xl">Confirme sua Senha</Text>
                        </VStack>
                        <Inpuut width={'381'}
                            RightIcon={<Eye size={32} color="black" weight="fill" style={{ marginRight: 12 }} />}
                        />

                        <VStack className='w-full flex flex-row items-start justify-start'>

                            <Checkbox flexDirection={'row-reverse'} colorScheme="gray" value={'i'}>
                                <Text className='text-black font-bold text-xl'>Eu li e concordo com os</Text>
                            </Checkbox>

                        </VStack>

                        <VStack className='w-full flex flex-row items-start justify-start'>

                            <Checkbox flexDirection={'row-reverse'} colorScheme="gray" value={'i'}>
                                <Text className='text-black font-bold text-xl'>Concordo em receber notificações de Ofertas e Produtos</Text>
                            </Checkbox>
                        </VStack>

                        <Buttoon
                            tittle='Finalizar Cadastro'
                            bg='#4D4D4D'
                            width={'341'}
                            onPress={Register}
                        />
                    </VStack>
                    <VStack className='w-full flex flex-col items-start justify-start'>
                        <ButtonBack />
                    </VStack>
                </VStack>
            </ScrollView>
        </FormControl>

    )
}