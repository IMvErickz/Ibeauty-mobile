import { Tabs, useLocalSearchParams } from "expo-router";
import { ClipboardText, MapPin, AddressBook, Storefront, CalendarBlank } from "phosphor-react-native";

export default function TabsLayout() {

    const local = useLocalSearchParams()

    const { tittle } = local

    return (
        tittle == 'Cliente'
            ?
            (
                <Tabs screenOptions={{
                    tabBarActiveBackgroundColor: '#cbd5e1',
                    headerShown: false
                }}>

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
            :
            (
                <Tabs screenOptions={{ headerShown: false, tabBarActiveBackgroundColor: '#cbd5e1', }}>
                    <Tabs.Screen name="home/[tittle]"
                        options={{
                            tabBarIcon: () => {
                                return (
                                    <Storefront size={30} color="#6A8E86" weight="fill" />
                                )
                            },
                            tabBarShowLabel: false
                        }}
                    />

                    <Tabs.Screen name='past/[id]'
                        options={{
                            tabBarIcon: () => {
                                return (
                                    <CalendarBlank size={30} color="#6A8E86" weight="fill" />
                                )
                            },
                            tabBarShowLabel: false
                        }}
                    />
                </Tabs>
            )
    )
}