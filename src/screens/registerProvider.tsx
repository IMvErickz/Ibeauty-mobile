import { FormControl, VStack, Text, Checkbox  } from "native-base";
import { Buttoon } from "../components/Button";
import { Header } from "../components/header";
import { Inpuut } from "../components/input";
import { Selection } from "../components/Select";

export function Provider() {
    return (
        <FormControl>
            <VStack className="w-screen h-screen flex flex-col items-center justify-center">
                <VStack className="w-full flex flex-col itens-center justify-center">
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
                    />

                     <Inpuut
                    width={'190'}
                    placeholder='CPF ou CNPJ'
                    />
                </VStack>

                <VStack className="w-60 flex flex-row items-center justify-center p-5">
                    <Inpuut
                        width={'190'}
                        marginRight={'2'}
                        placeholder='Telefone'
                    />

                     <Inpuut
                    width={'190'}
                    placeholder='CEP'
                    />
                </VStack>
                
                <VStack className="w-full flex flex-col items-center justify-center p-5">
                    <Selection/>
                </VStack>
                
                <VStack className=' w-full flex flex-col items-start justify-start'>
                    <Text className="text-black font-semibold text-4xl">Dados de login:</Text>
                </VStack>
                
                <VStack className="w-full flex flex-col items-center justify-center p-5 ">
                    <VStack className="w-full flex flex-col items-start, justify-start">
                        <Text>Email</Text>
                    </VStack>
                    <Inpuut />
                    <VStack className="w-full flex flex-col items-start, justify-start">
                        <Text>Senha</Text>
                    </VStack>
                    <Inpuut />
                    <VStack className="w-full flex flex-col items-start, justify-start">
                        <Text>Confirme sua senha</Text>
                    </VStack>
                    <Inpuut/>
                </VStack>

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
                <VStack className="w-full flex flex-col items-center justify-center">
                    <Buttoon
                        tittle="Confirmar cadastro"
                        bg='#4D4D4D'
                    />
                </VStack>
            </VStack>
        </FormControl>
    )
}