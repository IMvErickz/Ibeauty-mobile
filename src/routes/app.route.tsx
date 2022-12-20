import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import {Client} from '../screens/registerClient'


const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
    return (
        <Client/>
    )
}