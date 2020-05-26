/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BlurView } from 'expo-blur'
import HomeScreen from '../screens/Home'
import { Image, TouchableOpacity, View } from 'react-native'
import { theme } from '../../utils/theme'
import useToggle from '../hooks/useToggle'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux'
import { toggleMenu } from '../../redux/menu/menu.actions'
import Products from '../screens/Products'
import Recept from '../screens/Recept'
import Search from '../screens/Search'
import Store from '../screens/Store'
import RecipeInfo from '../screens/RecipeInfo'

const RootStack = createStackNavigator<RootStackParamList>()
const TabStack = createBottomTabNavigator<MyTabsStackParamList>()

const MainNavigation: React.FC = () => {
  const dispatch = useDispatch()
  const isHidden = useSelector((state: AppState) => state.menu.hidden)

  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: theme.colors.light,
        headerTitleStyle: {
          fontFamily: 'Chewy',
          fontSize: 30,
        },
      }}
    >
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Cookie bookie',

          headerLeft: () => (
            <TouchableOpacity onPress={() => dispatch(toggleMenu())}>
              <Image
                source={require('../../assets/menuicon.png')}
                style={{ width: 35, height: 30, tintColor: '#fff' }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <RootStack.Screen
        name="Products"
        component={Products}
        options={{
          headerTitle: 'Cookie bookie',

          headerRight: () => (
            <TouchableOpacity onPress={() => dispatch(toggleMenu())}>
              <Image
                source={require('../../assets/menuicon.png')}
                style={{ width: 35, height: 30, tintColor: '#fff' }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <RootStack.Screen name="Recept" component={Recept} />
      <RootStack.Screen name="Search" component={Search} />
      <RootStack.Screen name="Store" component={Store} />
      <RootStack.Screen name="RecipeInfo" component={RecipeInfo} />
    </RootStack.Navigator>
  )
}

const TabsNav: React.FC = () => {
  return (
    <TabStack.Navigator
      tabBarOptions={{
        style: { backgroundColor: theme.colors.primary },
        activeTintColor: theme.colors.light,
        inactiveTintColor: theme.colors.primary,
      }}
    >
      <TabStack.Screen
        name="Current"
        component={MainNavigation}
        options={(props) => {
          // console.log(props)

          return {
            title: 'Cookie Bookie',
            tabBarLabel: 'Cookie Bookie',
            tabBarIcon: (props) => {
              const image = require('../../assets/cookie.png')
              return (
                <Image
                  source={image}
                  resizeMode="contain"
                  style={{ width: 25, tintColor: props.color }}
                />
              )
            },
          }
        }}
      />
    </TabStack.Navigator>
  )
}

const NavigatorWrapper: React.FC = () => {
  return (
    <NavigationContainer>
      <TabsNav />
    </NavigationContainer>
  )
}

export default NavigatorWrapper
