import { FormControl, VStack, Text, Checkbox, ScrollView, Input  } from "native-base";
import { FormEvent, useState, } from "react";
import {TextInput} from 'react-native'
import { api } from "../../lib/axios";
import { Buttoon } from "../components/Button";
import { Header } from "../components/header";
import { Inpuut } from "../components/input";
import { Selection } from "../components/Select";

export function Provider() {

    const [CNPJ, setCNPJ] = useState('')
    const [Nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [Senha, setSenha] = useState('')
    const [confSenha, setConfSenha] = useState('')
    const [img, setImg] = useState('')
    const [telefone, setTel] = useState('')
    const [cep, setCep] = useState('')
    const [numero, setNumero] = useState('')

    async function setProvider() {

        try {
            if (Senha != confSenha) {
                alert("por favor verifique a senha")
            } else {
                const provider = await api.post('/provider/register', {
                    CNPJ,
                    Nome,
                    email,
                    Senha,
                    img,
                    telefone,
                    cep, 
                    numero
                })
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
                            onChangeText={setNome}
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
                            onChangeText={setTel}
                    />

                     <Inpuut
                    width={'190'}
                            placeholder='CEP'
                            onChangeText={setCep}
                        />
                         
                </VStack>
                
                <VStack className="w-full flex flex-col items-center justify-center p-5">
                    <Selection/>
                </VStack>
                
                <VStack className=' w-full flex flex-col items-start justify-start'>
                    <Text className="text-black font-semibold text-4xl">Dados de login:</Text>
                </VStack>
                
                    <VStack className="w-full flex flex-col items-center justify-center p-5 ">
                    <Inpuut
                    width={'190'}
                            placeholder='Número'
                            onChangeText={setNumero}
                    />
                    <VStack className="w-full flex flex-col items-start, justify-start">
                        <Text>Email</Text>
                    </VStack>
                        <Inpuut onChangeText={setEmail} />
                    <VStack className="w-full flex flex-col items-start, justify-start">
                        <Text>Senha</Text>
                    </VStack>
                    <Inpuut onChangeText={setSenha}/>
                    <VStack className="w-full flex flex-col items-start, justify-start">
                        <Text>Confirme sua senha</Text>
                    </VStack>
                        <Inpuut onChangeText={setConfSenha}/>
                    </VStack>
                    <Inpuut placeholder="img" onChangeText={setImg} />

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
            </VStack>
            </ScrollView>
        </FormControl>
    )
}