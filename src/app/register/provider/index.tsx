import { FormControl, Checkbox, Select, CheckIcon } from "native-base";
import { FormEvent, useState, } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { ArrowFatLeft, Eye, IconProps } from "phosphor-react-native";
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import { api } from "../../../../lib/axios";
import { Header } from "../../../components/header";
import { Inpuut } from "../../../components/Input/input";
import { Buttoon } from "../../../components/Buttons/Button";
import { Link } from "expo-router";

export default function Provider() {

    const navigation = useNavigation()

    const [CNPJ, setCNPJ] = useState('')
    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [confSenha, setConfSenha] = useState('')
    const [preview, setPreview] = useState('')
    const [cellNumber, setCell] = useState('')
    const [cep, setCep] = useState('')
    const [number, setNumber] = useState('')

    async function openImagePicker() {
        try {
            const result: any = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
            });

            if (result.assets[0]) {
                setPreview(result.assets[0].uri)
            }
        } catch (err) {
            console.error(err)
        }
    }


    async function setProvider() {

        let coverUrl

        if (preview) {
            const uploadFormData = new FormData()

            uploadFormData.append('file', {
                name: 'image.jpeg',
                type: 'image/jpeg',
                uri: preview
            } as any)

            const uploadResponse = await api.post('/upload', uploadFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            coverUrl = uploadResponse.data.fileUrl

            console.log('IMAGE URL: ', coverUrl)

        }

        try {
            if (Password != confSenha) {
                alert("por favor verifique a senha")
            } else if (Password.length < 8) {
                alert("Por favor, senha com no mínimo 8 caractéres.")
            } else {
                const provider = await api.post('/provider/register', {
                    CNPJ,
                    Name,
                    email,
                    Password,
                    img: coverUrl,
                    cellNumber,
                    cep,
                    number
                })

                navigation.navigate('auth')
            }
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    return (
        <FormControl>
            <ScrollView>
                <View className="w-full h-full flex items-center justify-center bg-white">
                    <View className="w-full flex items-center justify-center">
                        <Header
                            text="Novo Prestador"
                        />
                    </View>
                    <View className='w-full flex flex-col items-start justify-start'>
                        <Text className="text-black font-semibold text-4xl">Seus Dados:</Text>
                    </View>
                    <View className="w-60 flex gap-x-4 flex-row items-center justify-center p-5">
                        <Inpuut
                            className='w-[180px] h-12 rounded-lg text-black bg-[#F1F1F1] border-none'
                            placeholder='Nome do estabelecimento'
                            onChangeText={setName}
                        />

                        <Inpuut
                            className='w-[180px] h-12 rounded-lg text-black bg-[#F1F1F1] border-none'
                            widht={'190'}
                            placeholder='CPF ou CNPJ'
                            onChangeText={setCNPJ}
                        />
                    </View>

                    <View className="w-60 flex gap-x-4 flex-row items-center justify-center p-5">
                        <Inpuut
                            widht={'190'}
                            className='w-[180px] h-12 rounded-lg text-black bg-[#F1F1F1] border-none'
                            placeholder='Telefone'
                            onChangeText={setCell}
                        />

                        <Inpuut
                            className='w-[180px] h-12 rounded-lg text-black bg-[#F1F1F1] border-none'
                            widht={'190'}
                            placeholder='CEP'
                            onChangeText={setCep}
                        />

                    </View>

                    <View className="w-full flex flex-col items-center justify-center p-5">
                        <Select backgroundColor={'#D9D9D9'}
                            accessibilityLabel="Selecione a categoria"
                            placeholder="Selecione a categoria"
                            borderWidth={0}
                            width={'full'}
                            _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size={8} />
                            }} mt="1">

                            <Select.Item label="oi" value="oi" />

                        </Select>
                    </View>

                    <View className=' w-full flex flex-col items-start justify-start'>
                        <Text className="text-black font-semibold text-4xl">Dados de login:</Text>
                    </View>

                    <View className="w-full flex flex-col items-center justify-center p-5 ">
                        <Inpuut
                            widht={'190'}
                            placeholder='Número'
                            onChangeText={setNumber}
                            className="bg-[#F1F1F1] w-full h-12 rounded-lg"
                        />
                        <View className="w-full flex flex-col items-start, justify-start">
                            <Text>Email</Text>
                        </View>
                        <Inpuut onChangeText={setEmail} className="bg-[#F1F1F1] w-full h-12 p-2 rounded-lg" />
                        <View className="w-full flex flex-col items-start justify-start">
                            <Text>Senha</Text>
                        </View>
                        <Inpuut onChangeText={setPassword}
                            RightIcon={<Eye size={32} color="black" weight="fill" style={{ marginRight: 12 }} />}
                            className="bg-[#F1F1F1] w-full h-12 p-2 rounded-lg"
                        />
                        <View className="w-full flex flex-col items-start, justify-start">
                            <Text>Confirme sua senha</Text>
                        </View>
                        <Inpuut onChangeText={setConfSenha}
                            RightIcon={<Eye size={32} color="black" weight="fill" style={{ marginRight: 12 }} />}
                            className="bg-[#F1F1F1] w-full h-12 p-2 rounded-lg"
                        />
                    </View>
                    <View className='flex w-full px-4 items-center justify-center gap-y-2'>
                        {preview && <Image source={{ uri: preview }} className="w-24 h-24" />}
                        <TouchableOpacity onPress={openImagePicker} className='bg-boldColor w-full items-center justify-center h-12 rounded-lg'>
                            <Text className='font-bold text-lg text-white'>Adicinar foto de perfil</Text>
                        </TouchableOpacity>
                    </View>

                    <View className='w-80 flex flex-row items-start justify-start'>

                        <Checkbox flexDirection={'row-reverse'} colorScheme="gray" value={'i'}>
                            <Text className='text-black font-bold text-xl'>Eu li e concordo com os</Text>
                        </Checkbox>

                    </View>

                    <View className='w-80 flex flex-row items-start justify-start'>

                        <Checkbox flexDirection={'row-reverse'} colorScheme="gray" value={'i'}>
                            <Text className='text-black font-bold text-xl'>Concordo em receber notificações de Ofertas e Produtos</Text>
                        </Checkbox>
                    </View>
                    <View className="w-full px-4 flex flex-col items-center justify-center">
                        <Buttoon
                            tittle="Confirmar cadastro"
                            className='bg-[#4D4D4D] w-full flex items-center justify-center h-12'
                            onPress={setProvider}
                        />
                    </View>

                    <View className="w-full flex flex-col items-start justify-start p-4">
                        <Link href={'/'}>
                            <ArrowFatLeft size={32} color="#6A8E86" weight="fill" />
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </FormControl>
    )
}