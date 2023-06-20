import { Home } from '../screens/Home'
import { Client } from '../screens/registerClient'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from '../screens/registerProvider';
import { Initial } from '../screens/Initial';
import { Login } from '../screens/Login';
import { Store } from '../screens/storeInfo';
import { HomeChange } from '../screens/HomeClient';
import { NewProduct } from '../screens/RegisterProduct';
import { Schedule } from '../screens/Schedule';
import { Hours } from '../screens/Hours';
import { Payment } from '../screens/Payment';
import { PastService } from '../screens/pastServices';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (

        <Navigator>
            <Screen name='/' component={Home} options={{ headerShown: false }} />
            <Screen name='Client' component={Client} options={{ headerShown: false }} />
            <Screen name='Provider' component={Provider} options={{ headerShown: false }} />
            <Screen name='auth' component={Login} options={{ headerShown: false }} />
            <Screen name='store' component={Store} options={{ headerShown: false }} />
            <Screen name="change" component={HomeChange} options={{ headerShown: false }} />
            <Screen name="initial" component={Initial} options={{ headerShown: false }} />
            <Screen name="NewProduct" component={NewProduct} options={{ headerShown: false }} />
            <Screen name="Schedule" component={Schedule} options={{ headerShown: false }} />
            <Screen name="Hours" component={Hours} options={{ headerShown: false }} />
            <Screen name='payment' component={Payment} options={{ headerShown: false }} />
            <Screen name='pastService' component={PastService} options={{ headerShown: false }} />
        </Navigator>
    )
}