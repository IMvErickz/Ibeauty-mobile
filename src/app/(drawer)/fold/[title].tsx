import { Link, useRouter } from 'expo-router'
import { useLocalSearchParams } from 'expo-router/src/hooks'
import { X, SignOut } from 'phosphor-react-native'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Index() {
    const { title } = useLocalSearchParams()
    const router = useRouter()

    function closeDrawer() {
        router.back()
    }
    return (
        <View className='h-full w-56 flex bg-[#D7FFF8E5]'>
            <View className='w-full flex pt-20 px-4'>
                <TouchableOpacity onPress={closeDrawer}>
                    <X size={30}/>
                </TouchableOpacity>
            </View>
            <View>
                <Link href={{ pathname: title == 'Cliente' ? '/login/Cliente' : '/login/Profissional' }} asChild>
                    <TouchableOpacity className='w-full h-12 gap-x-2 flex flex-row items-center justify-start px-3 border-t-2 border-t-black border-b-2 border-b-black'>
                        <SignOut />
                        <Text className='text-base font-semibold flex'> 
                            Sair
                        </Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}