import { useState } from "react";
import { Drawer } from "../components/Drawer";
import { useNavigation } from "@react-navigation/native";
import { VStack } from "native-base";

export function SideBar() {

    const navigation = useNavigation()
    return (
        <VStack className="w-full h-full">
            <Drawer close={() => navigation.navigate('change')} />
        </VStack>
    )
}