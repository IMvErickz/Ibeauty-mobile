import { VStack, Text, Button } from "native-base";
import React from "react";
import { View } from 'react-native'

export interface HeaderProps {
    text?: string
    ButtonBack?: JSX.Element
    List?: JSX.Element
    ListNavigation?: () => void
}

export function Header(props: HeaderProps) {
    return (
        <View className='w-full flex flex-col items-start justify-start bg-backGround py-10'>
            <Text className='text-boldColor font-extrabold text-6xl'>
                {props.text}
            </Text>
            <View className="w-full flex flex-col items-start justify-start mb-0">
                {props.ButtonBack}
            </View>
            <View>
                {props.List}
            </View>
        </View>
    )
}