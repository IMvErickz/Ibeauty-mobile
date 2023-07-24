import { useNavigation } from '@react-navigation/native'
import { Button, Image, VStack } from 'native-base'
import { ArrowFatLeft } from 'phosphor-react-native'
import * as React from "react"

export function ButtonBack() {
    const navigation = useNavigation()
    return (
        <Button className='bg-transparent' onPress={() => navigation.goBack()}>
            <ArrowFatLeft size={32} color="#6A8E86" weight="fill" />
        </Button>
    )
}