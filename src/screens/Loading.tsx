import {Image,VStack} from 'native-base'

export function Load() {
    return (
        <VStack className='flex-1'>
            <Image
            source={{
                uri: "../../assets/Carregamento.png"
            }}
            alt="Alternate Text" size="xl"
        />
        </VStack>
    )
}