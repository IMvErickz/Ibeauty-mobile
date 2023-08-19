import { Drawer } from "./Drawer";
import { useNavigation } from "@react-navigation/native";
import { View } from 'react-native'

export function SideBar() {

    const navigation = useNavigation()
    return (
        <View className="w-full h-full">
            <Drawer close={() => navigation.navigate('change')} />
        </View>
    )
}