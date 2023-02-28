import { StatusBar } from 'react-native';
import React from 'react';
import { COLOR_CODES } from '@utils';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './authStack';
import { BottomTabs } from './bottomTabs';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLOR_CODES.WHITE} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ gestureEnabled: true }}>
        <Stack.Screen name="Auth" options={{ header: () => null }} component={AuthStack} />
        <Stack.Screen name="Tabs" options={{ header: () => null }} component={BottomTabs} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;