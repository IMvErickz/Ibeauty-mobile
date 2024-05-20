import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { AuthContextProvider } from "../context/AuthContext";

export default function Layout() {
    return (
        <>
            <NativeBaseProvider>
                <AuthContextProvider>
                <StatusBar style="light" />

                    <Stack screenOptions={{
                        headerShown: false,
                        contentStyle: {
                            backgroundColor: 'transparent'
                        },
                        animation: 'fade_from_bottom',
                    }} >
                        <Stack.Screen name="register/client/index" />
                        <Stack.Screen name="register/provider/index" />
                        <Stack.Screen name="login/[title]" />
                        <Stack.Screen name="(tabs)" />
                        <Stack.Screen name="(drawer)" />
                        <Stack.Screen name="schedule/create/index" />
                        <Stack.Screen name="schedule/hour/index" />
                        <Stack.Screen name="schedule/index" />
                        <Stack.Screen name="product/register/index" />
                        <Stack.Screen name="payment/index" />
                    </Stack>
               </AuthContextProvider>
            </NativeBaseProvider>
        </>
    )
}