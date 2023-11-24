import { Tabs } from "expo-router";
import { ClipboardText, MapPin } from "phosphor-react-native";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="home/[tittle]"
                options={{
                    tabBarIcon: () => {
                        return (
                            <MapPin size={30} color="#6A8E86" weight="fill" />
                        )
                    },
                    tabBarShowLabel: false
                }}
            />

            <Tabs.Screen name='past/[id]'
                options={{
                    tabBarIcon: () => {
                        return (
                            <ClipboardText size={30} color="#6A8E86" weight="fill" />
                        )
                    },
                    tabBarShowLabel: false
                }}
            />
        </Tabs>
    )
}