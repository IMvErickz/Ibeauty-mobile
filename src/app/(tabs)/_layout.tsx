import { Tabs } from "expo-router";
import { MapPin } from "phosphor-react-native";
import { MaterialIcons } from '@expo/vector-icons'

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name='home'
                options={{
                    title: "Home",
                    tabBarIcon: () => {
                        return (
                            <MapPin size={68} color="#0ecd2e" weight="fill" />
                        )
                    }
                }}
            />

            <Tabs.Screen name='past/:id'
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: () => {
                        return (
                            <MapPin size={68} color="#0ecd2e" weight="fill" />
                        )
                    }
                }}
            />
        </Tabs>
    )
}