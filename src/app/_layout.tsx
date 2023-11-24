import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";

export default function Layout() {
    return (
        <>
            <NativeBaseProvider>
                <StatusBar style="light" />

                <Stack screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: 'transparent'
                    },
                    animation: 'fade_from_bottom',
                }} >
                    <Stack.Screen name="register/client" />
                    <Stack.Screen name="register/provider" />
                    <Stack.Screen name="login/:title" />
                    <Stack.Screen name="(tabs)" />
                    <Stack.Screen name="schedule/create" />
                    <Stack.Screen name="schedule/hour" />
                    <Stack.Screen name="schedule/index" />
                    <Stack.Screen name="product/register" />
                    <Stack.Screen name="payment/index" />
                </Stack>
            </NativeBaseProvider>
        </>
    )
}