import { VStack, Text } from "native-base";
import React from "react";
import { ButtonBack } from "./buttonBack";

export interface HeaderProps{
    text?: string
    ButtonBack?: JSX.Element
}

export function Header(props: HeaderProps) {
    return (
        <VStack className='w-full flex flex-col items-start justify-start bg-backGround py-10'>
                <Text className='text-boldColor font-extrabold text-6xl'>
                    {props.text}
                </Text>
                <VStack className="w-full flex flex-col items-start justify-start mb-0">
                    {props.ButtonBack}
                </VStack>
            </VStack>
    )
}