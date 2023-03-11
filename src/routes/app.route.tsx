import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { Client } from '../screens/registerClient'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListViewBase } from 'react-native';
import { Provider } from '../screens/registerProvider';
import { Initial } from '../screens/Initial';
import { Login } from '../screens/Login';
import { Store } from '../screens/storeInfo'; 
import { HomeChange } from '../screens/HomeClient';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
    return (
        
        <Navigator>
            <Screen name='/' component={Home} options={{ headerShown: false }} />
            <Screen name='Client' component={Client} options={{ headerShown: false }} />
            <Screen name='Provider' component={Provider} options={{ headerShown: false }} />
            <Screen name='auth' component={Login} options={{ headerShown: false }} />
            <Screen name='store' component={Store} options={{ headerShown: false }} />
            <Screen name="change" component={HomeChange} options={{headerShown: false}}/>
        </Navigator>
    )
}