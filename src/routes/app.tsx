import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.route'
import { Provider } from '../screens/Register/registerProvider'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../../lib/query'


export function Routes() {
    return (
        <NavigationContainer>
            <QueryClientProvider client={queryClient}>
                <AppRoutes />
            </QueryClientProvider>
        </NavigationContainer>
    )
}