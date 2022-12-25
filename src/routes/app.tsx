import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.route'
import {Provider} from '../screens/registerProvider'


export function Routes() {
    return (
        <NavigationContainer>
            <Provider/>
        </NavigationContainer>
    )
}