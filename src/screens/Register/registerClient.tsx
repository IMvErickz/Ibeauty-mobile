import { FormControl, Checkbox } from 'native-base'
import { Buttoon } from '../../components/Buttons/Button'
import { Header } from '../../components/header'
import { Inpuut } from '../../components/Input/input'
import { Eye } from 'phosphor-react-native'
import { ButtonBack } from '../../components/Buttons/buttonBack'
import { useState } from 'react'
import { api } from '../../../lib/axios'
import { useNavigation } from '@react-navigation/native'
import { View, Text, ScrollView } from 'react-native'

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
                <View className="flex items-center justify-center bg-white">
                    <View className='w-full flex items-center justify-center'>
                        <Header
                            text='Novo Cliente'
                        />
                    </View>
                    <View className=' w-full flex flex-col items-start justify-start py-4 px-2'>
                        <Text className='text-black font-semibold text-4xl'>Seus Dados</Text>
                    </View>
                    <View className='w-60 flex flex-row items-center justify-center space-x-6 py-5 px-4'>
                        <Inpuut
                            widht='190'
                            placeholder='Nome'
                            onChangeText={setName}
                            className='bg-gray-250 w-[80%] h-12 rounded-lg'
                        />

                        <Inpuut
                            widht='190'
                            className='bg-gray-250 w-[80%] h-12 rounded-lg'
                            placeholder='Sobrenome'
                        />
                    </View>

                    <View className='w-60 flex flex-row items-center justify-center space-x-6 py-5 px-4'>
                        <Inpuut
                            widht='190'
                            placeholder='Telefone (opcional)'
                            onChangeText={setcellNumber}
                            className='bg-gray-250 w-[80%] h-12 rounded-lg'
                        />

                        <Inpuut
                            widht='190'
                            placeholder='Data de nascimento'
                            onChangeText={setDate}
                            className='bg-gray-250 w-[80%] h-12 rounded-lg'
                        />
                    </View>

                    <View className='w-full flex flex-col items-center justify-center'>
                        <Text className='text-black font-semibold text-4xl'>Dados de Login</Text>
                    </View>

                    <View className='flex flex-col items-center justify-center w-full px-5 py-4'>
                        <View className='w-full flex flex-col items-start justify-start'>
                            <Text className="text-black opacity-75 text-2xl">CPF</Text>
                        </View>
                        <Inpuut widht='381' onChangeText={setCPF}
                            className='bg-gray-250 w-full h-12 rounded-lg p-2'
                        />

                        <View className='w-full flex flex-col items-start justify-start'>
                            <Text className="text-black opacity-75 text-2xl">Email</Text>
                        </View>
                        <Inpuut widht='381' onChangeText={setEmail}
                            className='bg-gray-250 w-full h-12 rounded-lg p-2'
                        />

                        <View className='w-full flex flex-col items-start justify-start'>
                            <Text className="text-black opacity-75 text-2xl">Confirme seu Email</Text>
                        </View>
                        <Inpuut widht='381'
                            className='bg-gray-250 w-full h-12 rounded-lg p-2'
                        />

                        <View className='w-full flex flex-col items-start justify-start'>
                            <Text className="text-black opacity-75 text-2xl">Senha</Text>
                        </View>
                        <Inpuut widht='381'
                            RightIcon={<Eye size={32} color="black" weight="fill" style={{ marginRight: 12 }} />}
                            onChangeText={setPassword}
                            className='bg-gray-250 w-full h-12 rounded-lg p-2'
                        />

                        <View className='w-full flex flex-col items-start justify-start'>
                            <Text className="text-black opacity-75 text-2xl">Confirme sua Senha</Text>
                        </View>
                        <Inpuut widht='381'
                            RightIcon={<Eye size={32} color="black" weight="fill" style={{ marginRight: 12 }} />}
                            className='bg-gray-250 w-full h-12 rounded-lg p-2'
                        />

                        <View className='w-full flex flex-row items-start justify-start'>

                            <Checkbox flexDirection={'row-reverse'} colorScheme="gray" value={'i'}>
                                <Text className='text-black font-bold text-xl'>Eu li e concordo com os</Text>
                            </Checkbox>

                        </View>

                        <View className='w-full flex flex-row items-start justify-start'>

                            <Checkbox flexDirection={'row-reverse'} colorScheme="gray" value={'i'}>
                                <Text className='text-black font-bold text-xl'>Concordo em receber notificações de Ofertas e Produtos</Text>
                            </Checkbox>
                        </View>

                        <Buttoon
                            tittle='Finalizar Cadastro'
                            className='bg-gray-750 w-full flex items-center justify-center h-12 rounded-lg'
                            onPress={Register}
                        />
                    </View>

                    <View className='w-full flex flex-col items-start justify-start'>
                        <ButtonBack />
                    </View>
                </View>
            </ScrollView>
        </FormControl>

    )
}