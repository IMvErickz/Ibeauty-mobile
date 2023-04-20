import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const drawer = createDrawerNavigator();

export  function Drawer() {
  return (
    <NavigationContainer>
      <drawer.Navigator initialRouteName="Home">
        <drawer.Screen name="Home" component={HomeScreen} />
        <drawer.Screen name="Notifications" component={NotificationsScreen} />
      </drawer.Navigator>
    </NavigationContainer>
  );
}