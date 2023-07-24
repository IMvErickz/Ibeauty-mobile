import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MapPin, Notepad, Storefront, CalendarBlank } from "phosphor-react-native"
//import LocalIncon from "../styles/LocalIncon"
import { Initial } from "../screens/Home/Initial"
import { Store } from "../screens/Services/storeInfo"
import { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

export function TabBar() {
    const { Navigator, Screen } = createBottomTabNavigator()

    const [localType, setLocalType] = useState('')

    console.log(localType)

    async function setButtonsIcon() {
        const local = await AsyncStorage.getItem('LocalAuth')
        setLocalType(local as string)
    }

    setButtonsIcon()


    return (
        <>
            {localType == 'Cliente'
                ?
                <Navigator screenOptions={{
                    tabBarStyle: { alignItems: 'center', justifyContent: 'center', display: 'flex' },
                    tabBarIconStyle: { alignItems: 'baseline' }
                }}>
                    <Screen name="Teste" component={Initial} options={{
                        tabBarIcon: () => <MapPin color="#6A8E86C9" weight="fill" size={32} />,
                        headerShown: false,
                        title: '',
                        tabBarActiveBackgroundColor: "#D9D9D9"
                    }} />

                    <Screen name="Teste2" component={Store} options={{
                        tabBarIcon: () => <Notepad color="#6A8E86C9" weight="fill" size={32} />,
                        headerShown: false,
                        title: '',
                        tabBarActiveBackgroundColor: "#D9D9D9",
                    }} />
                </Navigator>
                :
                <Navigator screenOptions={{
                    tabBarStyle: { alignItems: 'center', justifyContent: 'center', display: 'flex' },
                    tabBarIconStyle: { alignItems: 'baseline' }
                }}>
                    <Screen name="Teste" component={Initial} options={{
                        tabBarIcon: () => <Storefront color="black" weight="bold" size={32} />,
                        headerShown: false,
                        title: '',
                        tabBarActiveBackgroundColor: "#D9D9D9"
                    }} />

                    <Screen name="Teste2" component={Store} options={{
                        tabBarIcon: () => <CalendarBlank color="black" weight="bold" size={32} />,
                        headerShown: false,
                        title: '',
                        tabBarActiveBackgroundColor: "#D9D9D9",
                    }} />
                </Navigator>

            }
        </>

    )
}