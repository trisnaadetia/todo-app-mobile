import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { Provider } from 'react-redux'
import store from './store/index'
import HomeScreen from './src/screens/HomeScreen'
import NewTaskScreen from './src/screens/NewTaskScreen'
import DetailScreen from './src/screens/DetailScreen'
import ProfileScreen from './src/screens/ProfileScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <StatusBar
            barStyle="dark-content"
          />
          <Stack.Navigator screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="NewTask" component={NewTaskScreen} />
              <Stack.Screen name="Detail" component={DetailScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  )
}

