import { FormControl, VStack, Text, Checkbox, ScrollView, Input, Button, Select, CheckIcon, Image } from "native-base";
import { FormEvent, useState, } from "react";
import { TextInput } from 'react-native'
import { api } from "../../../lib/axios";
import { Buttoon } from "../../components/Buttons/Button";
import { Header } from "../../components/header";
import { Inpuut } from "../../components/Input/input";
import { Selection } from "../../components/Select";
import { ArrowFatLeft, Eye, IconProps } from "phosphor-react-native";
import { useNavigation } from '@react-navigation/native'
import { ButtonBack } from "../../components/Buttons/buttonBack";
import * as ImagePicker from 'expo-image-picker'

export function Provider() {

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
                <VStack w="100%" h="100%" alignItems={"center"} justifyContent={"center"} display={"flex"} className="bg-white">
                    <VStack w="100%" alignItems={"center"} justifyContent={"center"} display={"flex"}>
                        <Header
                            text="Novo Prestador"
                        />
                    </VStack>
                    <VStack className=' w-full flex flex-col items-start justify-start'>
                        <Text className="text-black font-semibold text-4xl">Seus Dados:</Text>
                    </VStack>
                    <VStack className="w-60 flex flex-row items-center justify-center p-5">
                        <Inpuut
                            width={'190'}
                            marginRight={'2'}
                            placeholder='Nome do estabelecimento'
                            onChangeText={setName}
                        />

                        <Inpuut
                            width={'190'}
                            placeholder='CPF ou CNPJ'
                            onChangeText={setCNPJ}
                        />
                    </VStack>

                    <VStack className="w-60 flex flex-row items-center justify-center p-5">
                        <Inpuut
                            width={'190'}
                            marginRight={'2'}
                            placeholder='Telefone'
                            onChangeText={setCell}
                        />

                        <Inpuut
                            width={'190'}
                            placeholder='CEP'
                            onChangeText={setCep}
                        />

                    </VStack>

                    <VStack className="w-full flex flex-col items-center justify-center p-5">
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
                    </VStack>

                    <VStack className=' w-full flex flex-col items-start justify-start'>
                        <Text className="text-black font-semibold text-4xl">Dados de login:</Text>
                    </VStack>

                    <VStack className="w-full flex flex-col items-center justify-center p-5 ">
                        <Inpuut
                            width={'190'}
                            placeholder='Número'
                            onChangeText={setNumber}
                        />
                        <VStack className="w-full flex flex-col items-start, justify-start">
                            <Text>Email</Text>
                        </VStack>
                        <Inpuut onChangeText={setEmail} />
                        <VStack className="w-full flex flex-col items-start, justify-start">
                            <Text>Senha</Text>
                        </VStack>
                        <Inpuut onChangeText={setPassword}
                            RightIcon={<Eye size={32} color="black" weight="fill" style={{ marginRight: 12 }} />}
                        />
                        <VStack className="w-full flex flex-col items-start, justify-start">
                            <Text>Confirme sua senha</Text>
                        </VStack>
                        <Inpuut onChangeText={setConfSenha}
                            RightIcon={<Eye size={32} color="black" weight="fill" style={{ marginRight: 12 }} />}
                        />
                    </VStack>
                    <VStack className='flex w-full items-center justify-center gap-y-2'>
                        {preview && <Image source={{ uri: preview }} alt="Impossível acessar" size={24} />}
                        <Button onPress={openImagePicker} className='bg-boldColor'><Text className='font-bold text-lg text-white'>Adicinar foto de perfil</Text></Button>
                    </VStack>

                    <VStack className='w-80 flex flex-row items-start justify-start'>

                        <Checkbox flexDirection={'row-reverse'} colorScheme="gray" value={'i'}>
                            <Text className='text-black font-bold text-xl'>Eu li e concordo com os</Text>
                        </Checkbox>

                    </VStack>

                    <VStack className='w-80 flex flex-row items-start justify-start'>

                        <Checkbox flexDirection={'row-reverse'} colorScheme="gray" value={'i'}>
                            <Text className='text-black font-bold text-xl'>Concordo em receber notificações de Ofertas e Produtos</Text>
                        </Checkbox>
                    </VStack>
                    <VStack className="w-full flex flex-col items-center justify-center">
                        <Buttoon
                            tittle="Confirmar cadastro"
                            bg='#4D4D4D'
                            onPress={setProvider}
                        />
                    </VStack>

                    <VStack className="w-full flex flex-col items-start justify-start">
                        <ButtonBack />
                    </VStack>
                </VStack>
            </ScrollView>
        </FormControl>
    )
}