import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.route'
import {Client} from '../screens/registerClient'


export function Routes() {
    return (
        <NavigationContainer>
            <Client/>
        </NavigationContainer>
    )
}