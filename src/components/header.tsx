import { Link } from "expo-router";
import { VStack, Text, Button } from "native-base";
import React from "react";
import { View } from 'react-native'

export interface HeaderProps {
    text?: string
    ButtonBack?: JSX.Element
    List?: JSX.Element
    ListNavigation?: () => void
    title?: string
}

export function Header(props: HeaderProps) {
    return (
        <View className='w-full flex flex-col items-start px-4 justify-start bg-backGround py-10'>
            <Text className='text-boldColor font-extrabold text-6xl'>
                {props.text}
            </Text>
            <View className="w-full flex flex-col items-start justify-start mb-0">
                {props.ButtonBack}
            </View>
            <View>
                <Link href={`/fold/${props.title}`} asChild>
                    {props.List}
                </Link>
            </View>
        </View>
    )
}