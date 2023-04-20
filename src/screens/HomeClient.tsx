import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MapPin, Notepad } from "phosphor-react-native"
//import LocalIncon from "../styles/LocalIncon"
import { Initial } from "./Initial"
import { Store } from "./storeInfo"

export function HomeChange() {
    const {Navigator, Screen} = createBottomTabNavigator()
    return (
        <Navigator screenOptions={{
            tabBarStyle: { alignItems: 'center', justifyContent: 'center', display: 'flex' },
            tabBarIconStyle: {alignItems: 'baseline'}
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
    )
}