import { FormControl, Select, CheckIcon } from "native-base";
import { Header } from "../../../components/header";
import { Input } from "../../../components/Input/input";
import * as ImagePicker from 'expo-image-picker';
import { api } from "../../../../lib/axios";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as SecureStorage from 'expo-secure-store'
import { View, TouchableOpacity, Text, ScrollView, Image } from 'react-native'


interface SelectionProps {
    NameCategory: string
    id: string
}

export default function NewProduct() {

    const [preview, setPreview] = useState('')
    const [data, setData] = useState<SelectionProps[]>([])
    const [NameService, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDesc] = useState('')
    const [category, getCategory] = useState('')

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

    const navigation = useNavigation()

    const [id, getId] = useState('')

    async function StoreServices() {
        let nameLocal = await SecureStorage.getItemAsync('userId')
        getId(nameLocal as string)
    }

    useEffect(() => {
        async function GetData() {
            await api.get('/categorys')
                .then(response => {
                    setData(response.data.getCategory)
                })
        }
        GetData()
    }, [])


    async function ProductOrService() {

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

        }

        try {
            const product = await api.post('/service/register', {
                NameService,
                price,
                description,
                img: coverUrl ? coverUrl : 'https://i.pinimg.com/736x/85/4f/68/854f68f5e247b7f10f1cee121b7ca1aa.jpg',
                category,
                id
            })

            navigation.goBack()
        } catch (error) {
            throw error
        }
    }

    StoreServices()

    return (
        <FormControl>
            <ScrollView>
                <View className="w-full h-full flex items-center justify-center">
                    <View className="w-full flex items-center justify-center">
                        <Header
                            text="Novo Produto"
                        />
                    </View>
                    <View className='w-full flex flex-col items-start justify-start ml-8 py-8'>
                        <Text className='text-2xl font-semibold'>Adição de produto/serviço</Text>
                    </View>
                    <View className='w-full flex flex-row items-center justify-center gap-x-4'>
                        <View className='rounded-full bg-borderColor w-16 h-16 flex flex-col items-center justify-center'>
                            <Text className='text-black font-bold text-xl'>Foto</Text>
                        </View>
                        <Text className='text-black font-semibold text-xl'>Nome do serviço</Text>
                        <Text className='text-black font-semibold text-xl'>valor Cobrado</Text>
                    </View>

                    <View className='bg-borderColor w-full h-1'><Text className='text-white'>oi</Text></View>

                    <View className='w-full flex flex-row items-center justify-center py-12 gap-x-4'>
                        <Image
                            source={{
                                uri: preview ? preview : 'https://i.pinimg.com/736x/85/4f/68/854f68f5e247b7f10f1cee121b7ca1aa.jpg'
                            }}

                            width={100}
                            height={100}
                        />

                        <TouchableOpacity onPress={openImagePicker} className='w-44 flex items-center rounded-lg justify-center bg-boldColor'><Text className='font-bold text-center text-lg text-white'>Trocar foto do serviço</Text></TouchableOpacity>

                    </View>

                    <View className='w-full flex px-4 flex-col items-start justify-start gap-y-8'>
                        <View className='w-full flex flex-col items-start justify-start gap-y-2'>
                            <Text className='text-xl font-semibold'>Nome do Serviço:</Text>
                            <View className='w-full flex flex-col items-center justify-center '>
                                <Input
                                    className="bg-borderColor rounded-lg w-full h-12 p-2"
                                    onChangeText={setName}
                                />
                            </View>
                        </View>

                        <View className='w-full flex flex-col items-start justify-start gap-y-2'>
                            <Text className='text-xl font-semibold'>Valor a ser cobrado:</Text>
                            <View className='w-full flex flex-col items-center justify-center '>
                                <Input
                                    className="bg-borderColor rounded-lg w-full h-12 p-2"
                                    onChangeText={setPrice}
                                    keyboardType="number-pad"
                                />
                            </View>
                        </View>

                        <View className='w-full flex flex-col items-start justify-start gap-y-2'>
                            <Text className='text-xl font-semibold'>Tipo de Serviço:</Text>
                            <View className='w-full flex flex-col items-center justify-center '>
                                <Select backgroundColor={'#D9D9D9'}
                                    accessibilityLabel="Selecione a categoria"
                                    placeholder="Selecione a categoria"
                                    borderWidth={0}
                                    borderRadius={8}
                                    width={'341'}
                                    _selectedItem={{
                                        bg: "teal.600",
                                        endIcon: <CheckIcon size={8} />
                                    }} mt="1" onValueChange={(itemValue: any) => getCategory(itemValue)}>
                                    {data.map(e => {
                                        return (
                                            <Select.Item label={e.NameCategory} value={e.id} />
                                        )
                                    })}
                                </Select>
                            </View>
                        </View>

                        <View className='w-full flex flex-col items-start justify-start gap-y-2'>
                            <Text className='text-xl font-semibold'>Descrição do Serviço</Text>
                            <View className='w-full flex flex-col items-center justify-center '>
                                <Input
                                    className="bg-borderColor w-full h-44 rounded-lg"
                                    onChangeText={setDesc}
                                />
                            </View>
                        </View>

                        <View className="w-full pb-4 flex flex-col items-center justify-center gap-y-4">
                            <TouchableOpacity onPress={ProductOrService} className='bg-boldColor w-full h-12 rounded-lg flex items-center justify-center'><Text className='font-bold text-lg text-white'>Salvar Alterações</Text></TouchableOpacity>
                            <TouchableOpacity className='bg-[#D14747A3] w-full h-12 rounded-lg flex items-center justify-center'>
                                <Text className='font-bold text-lg text-white' onPress={() => navigation.goBack()}>Descartar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </FormControl>
    )
}