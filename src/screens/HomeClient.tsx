import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MapPin, ClipboardText } from "phosphor-react-native"
import { Initial } from "./Initial"
import { Store } from "./storeInfo"

export function HomeChange() {
    const {Navigator, Screen} = createBottomTabNavigator()
    return (
        <Navigator>
                <Screen name="Teste" component={Initial} options={{
                tabBarIcon: () => <MapPin style={{backgroundColor: "#7FFFD4"}}/>,
                headerShown: false,
                title: '',
                tabBarActiveBackgroundColor: "#D9D9D9"
            }} />

            <Screen name="Teste2" component={Store} options={{
                tabBarIcon: () => <ClipboardText style={{backgroundColor: "#7FFFD4"}} />,
                headerShown: false,
                title: '',
                tabBarActiveBackgroundColor: "#D9D9D9"
            }} />
            </Navigator>
    )
}