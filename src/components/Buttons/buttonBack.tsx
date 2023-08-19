import { useNavigation } from '@react-navigation/native'
import { ArrowFatLeft } from 'phosphor-react-native'
import * as React from "react"
import { TouchableOpacity } from 'react-native'

export function ButtonBack() {
    const navigation = useNavigation()
    return (
        <TouchableOpacity className='bg-transparent' onPress={() => navigation.goBack()}>
            <ArrowFatLeft size={32} color="#6A8E86" weight="fill" />
        </TouchableOpacity>
    )
}