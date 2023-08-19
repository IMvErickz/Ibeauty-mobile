import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'
import { AppRoutes } from './app.route'

export function Routes() {
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}