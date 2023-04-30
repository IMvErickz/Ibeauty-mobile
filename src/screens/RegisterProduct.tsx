import { Text, VStack, ScrollView, Image, Button, FormControl, Input, Select, CheckIcon } from "native-base";
import { Header } from "../components/header";
import { Buttoon } from "../components/Button";
import { Inpuut } from "../components/input";
import { ButtonBack } from "../components/buttonBack";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { useQuery } from 'react-query'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'

interface SelectionProps{
    nomeCategoria: string
    id: string
}

export function NewProduct() {

    const navigation = useNavigation()
    
    const [id, getId] = useState('')
        async function StoreServices() {
        let nameLocal = await AsyncStorage.getItem('StoreName')
            getId(nameLocal as string)
    }

    const {data} = useQuery<SelectionProps[]>('Category', async () => {
        const response = await api.get('/categorys')

        return response.data.getCategory
    })

    const [NomeServico, setName] = useState('')
    const [preco, setPrice] = useState('')
    const [descricao, setDesc] = useState('')
    const [img, setImg] = useState('')
    const [category, getCategory] = useState('')

    useEffect(() => {
        setImg('https://douxclair.com.br/blog/wp-content/uploads/2019/11/CURLY-DICAS-BLOG.png')
     }, [])

    async function ProductOrService() {
        try {
            const product = await api.post('/service/register', {
                NomeServico,
                preco,
                descricao,
                img,
                category,
                CNPJ: id
            })

            navigation.navigate('initial')
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
                        ButtonBack={<ButtonBack/>}
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

                    <VStack className='w-full flex flex-row items-center justify-center py-12'>
                        <Image
                            alt='Imagem não encontrada'
                            source={{
                            uri: "https://douxclair.com.br/blog/wp-content/uploads/2019/11/CURLY-DICAS-BLOG.png"
                          }} />
                        
                        <Button className='bg-boldColor'><Text className='font-bold text-lg text-white'>Trocar foto do serviço</Text></Button>
                        <Input className="hidden" onChangeText={setImg}/>
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
                                endIcon: <CheckIcon size={8}/>
                            }} mt="1" onValueChange={(itemValue: any) => getCategory(itemValue)}>
                                        {data?.map(e => {
                                            return (
                                                <Select.Item label={e.nomeCategoria} value={e.id}/>
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