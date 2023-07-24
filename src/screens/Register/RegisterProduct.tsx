import { Text, VStack, ScrollView, Image, Button, FormControl, Input, Select, CheckIcon } from "native-base";
import { Header } from "../../components/header";
import { Buttoon } from "../../components/Buttons/Button";
import { Inpuut } from "../../components/Input/input";
import { ButtonBack } from "../../components/Buttons/buttonBack";
import * as ImagePicker from 'expo-image-picker';
import { api } from "../../../lib/axios";
import { useEffect, useState } from "react";
import { useQuery } from 'react-query'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import sizes from "native-base/lib/typescript/theme/base/sizes";


interface SelectionProps {
    NameCategory: string
    id: string
}

export function NewProduct() {

    const [preview, setPreview] = useState('')

    console.log("URL PREVIEW: ", preview)

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
    console.log(id)
    async function StoreServices() {
        let nameLocal = await AsyncStorage.getItem('ProviderId')
        getId(nameLocal as string)
    }

    const { data } = useQuery<SelectionProps[]>('Category', async () => {
        const response = await api.get('/categorys')

        return response.data.getCategory
    })

    const [NameService, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDesc] = useState('')
    const [category, getCategory] = useState('')

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

            console.log('IMAGE URL: ', coverUrl)

        }


        try {
            const product = await api.post('/service/register', {
                NameService,
                price,
                description,
                img: coverUrl,
                category,
                CNPJ: id
            })

            navigation.goBack()
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    StoreServices()

    return (
        <FormControl>
            <ScrollView>
                <VStack w="100%" h="100%" alignItems={"center"} justifyContent={"center"} display={"flex"}>
                    <VStack w="full" alignItems={"center"} justifyContent={'center'}>
                        <Header
                            text="Novo Produto"
                            ButtonBack={<ButtonBack />}
                        />
                    </VStack>
                    <VStack className='w-full flex flex-col items-start justify-start ml-8 py-8'>
                        <Text className='text-2xl font-semibold'>Adição de produto/serviço</Text>
                    </VStack>
                    <VStack className='w-full flex flex-row items-center justify-center gap-x-4'>
                        <VStack className='rounded-full bg-borderColor w-16 h-16 flex flex-col items-center justify-center'>
                            <Text className='text-black font-bold text-xl'>Foto</Text>
                        </VStack>
                        <Text className='text-black font-semibold text-xl'>Nome do serviço</Text>
                        <Text className='text-black font-semibold text-xl'>valor Cobrado</Text>
                    </VStack>

                    <VStack className='bg-borderColor w-full h-1'><Text className='text-white'>oi</Text></VStack>

                    <VStack className='w-full flex flex-row items-center justify-center py-12 gap-x-4'>
                        <Image
                            alt='Imagem não encontrada'
                            source={{
                                uri: preview
                            }}
                            size={24}
                        />

                        <Button onPress={openImagePicker} className='bg-boldColor'><Text className='font-bold text-lg text-white'>Trocar foto do serviço</Text></Button>

                    </VStack>

                    <VStack className='w-full flex flex-col items-start justify-start gap-y-8'>
                        <VStack className='w-full flex flex-col items-start justify-start gap-y-2'>
                            <Text className='text-xl font-semibold'>Nome do Serviço:</Text>
                            <VStack className='w-full flex flex-col items-center justify-center '>
                                <Inpuut
                                    width={'341'}
                                    marginRight={'4'}
                                    backgroundColor={'#F1F1F1'}
                                    className="bg-borderColor"
                                    onChangeText={setName}
                                />
                            </VStack>
                        </VStack>

                        <VStack className='w-full flex flex-col items-start justify-start gap-y-2'>
                            <Text className='text-xl font-semibold'>Valor a ser cobrado:</Text>
                            <VStack className='w-full flex flex-col items-center justify-center '>
                                <Inpuut
                                    width={'341'}
                                    marginRight={'4'}
                                    backgroundColor={'#F1F1F1'}
                                    className="bg-borderColor"
                                    onChangeText={setPrice}
                                    keyboardType="number-pad"
                                />
                            </VStack>
                        </VStack>

                        <VStack className='w-full flex flex-col items-start justify-start gap-y-2'>
                            <Text className='text-xl font-semibold'>Tipo de Serviço:</Text>
                            <VStack className='w-full flex flex-col items-center justify-center '>
                                <Select backgroundColor={'#D9D9D9'}
                                    accessibilityLabel="Selecione a categoria"
                                    placeholder="Selecione a categoria"
                                    borderWidth={0}
                                    width={'341'}
                                    _selectedItem={{
                                        bg: "teal.600",
                                        endIcon: <CheckIcon size={8} />
                                    }} mt="1" onValueChange={(itemValue: any) => getCategory(itemValue)}>
                                    {data?.map(e => {
                                        return (
                                            <Select.Item label={e.NameCategory} value={e.id} />
                                        )
                                    })}
                                </Select>
                            </VStack>
                        </VStack>

                        <VStack className='w-full flex flex-col items-start justify-start gap-y-2'>
                            <Text className='text-xl font-semibold'>Descrição do Serviço</Text>
                            <VStack className='w-full flex flex-col items-center justify-center '>
                                <Inpuut
                                    width={'341'}
                                    height={'200'}
                                    marginRight={'4'}
                                    backgroundColor={'#F1F1F1'}
                                    className="bg-borderColor"
                                    onChangeText={setDesc}
                                />
                            </VStack>
                        </VStack>

                        <VStack className="w-full flex flex-col items-center justify-center gap-y-4">
                            <Button onPress={ProductOrService} className='bg-boldColor w-80'><Text className='font-bold text-lg text-white'>Salvar Alterações</Text></Button>
                            <Button className='bg-[#D14747A3] w-80'>
                                <Text className='font-bold text-lg text-white' onPress={() => navigation.goBack()}>Descartar</Text>
                            </Button>
                        </VStack>
                    </VStack>
                </VStack>
            </ScrollView>
        </FormControl>
    )
}