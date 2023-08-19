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
                <View className="w-full h-full flex items-center justify-centerbg-white">
                    <View className='w-full flex items-center justify-center'>
                        <Header
                            text='Novo Cliente'
                        />
                    </View>
                    <View className=' w-full flex flex-col items-start justify-start'>
                        <Text className='text-black font-semibold text-4xl'>Seus Dados</Text>
                    </View>
                    <View className='w-60 flex flex-row items-center justify-center p-5'>
                        <Inpuut
                            widht='190'
                            placeholder='Nome'
                            onChangeText={setName}
                        />

                        <Inpuut
                            widht='190'
                        />
                    </View>

                    <View className='w-60 flex flex-row items-center justify-center p-5'>
                        <Inpuut
                            widht='190'
                            placeholder='Telefone (opcional)'
                            onChangeText={setcellNumber}
                        />

                        <Inpuut
                            widht='190'
                            placeholder='Data de nascimento'
                            onChangeText={setDate}
                        />
                    </View>

                    <View className='w-full flex flex-col items-center justify-center'>
                        <Text className='text-black font-semibold text-4xl'>Dados de Login</Text>
                    </View>

                    <View className='flex flex-col items-center justify-center w-full'>
                        <View className='w-full flex flex-col items-start justify-start'>
                            <Text className="text-black opacity-75 text-2xl">CPF</Text>
                        </View>
                        <Inpuut widht='381' onChangeText={setCPF} />

                        <View className='w-full flex flex-col items-start justify-start'>
                            <Text className="text-black opacity-75 text-2xl">Email</Text>
                        </View>
                        <Inpuut widht='381' onChangeText={setEmail} />

                        <View className='w-full flex flex-col items-start justify-start'>
                            <Text className="text-black opacity-75 text-2xl">Confirme seu Email</Text>
                        </View>
                        <Inpuut widht='381' />

                        <View className='w-full flex flex-col items-start justify-start'>
                            <Text className="text-black opacity-75 text-2xl">Senha</Text>
                        </View>
                        <Inpuut widht='381'
                            RightIcon={<Eye size={32} color="black" weight="fill" style={{ marginRight: 12 }} />}
                            onChangeText={setPassword}
                        />

                        <View className='w-full flex flex-col items-start justify-start'>
                            <Text className="text-black opacity-75 text-2xl">Confirme sua Senha</Text>
                        </View>
                        <Inpuut widht='381'
                            RightIcon={<Eye size={32} color="black" weight="fill" style={{ marginRight: 12 }} />}
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
                            color='#4D4D4D'
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