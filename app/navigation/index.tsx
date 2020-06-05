/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/Home'
import { Image, TouchableOpacity, Text } from 'react-native'
import { theme } from '../../utils/theme'
import Icon from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux'
import { toggleMenu } from '../../redux/menu/menu.actions'
import Products from '../screens/Products'
import Recept from '../screens/Recept'
import Store from '../screens/Store'
import RecipeInfo from '../screens/RecipeInfo'
import { selectCartItemCount } from '../../redux/cart/cart.selector'

import About from '../screens/About'
import Category from '../screens/Category'

const RootStack = createStackNavigator<RootStackParamList>()
const TabStack = createBottomTabNavigator<MyTabsStackParamList>()

const MainNavigation: React.FC = () => {
  const dispatch = useDispatch()

  const cartItemCount = useSelector((state: AppState) =>
    selectCartItemCount(state),
  )

  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: theme.colors.dark,
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
          headerTitle: 'Our Products',
          headerRight: () => (
            <TouchableOpacity style={{ position: 'relative' }}>
              <Icon
                name="shoppingcart"
                size={40}
                style={{ marginRight: 10 }}
                color="#fff"
              ></Icon>
              <Text
                style={{
                  color: '#333',
                  fontSize: 14,
                  position: 'absolute',
                  left: 19,
                  top: 8,
                }}
              >
                {cartItemCount}
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <RootStack.Screen
        name="Recept"
        component={Recept}
        options={(props) => ({
          headerRight: () => (
            <TouchableOpacity
              style={{ position: 'relative' }}
              onPress={() => props.navigation.navigate('Store')}
            >
              <Icon
                name="shoppingcart"
                size={40}
                style={{ marginRight: 10 }}
                color="#fff"
              ></Icon>
              <Text
                style={{
                  color: '#333',
                  fontSize: 14,
                  position: 'absolute',
                  left: 19,
                  top: 8,
                }}
              >
                {cartItemCount}
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <RootStack.Screen
        name="About"
        component={About}
        options={{ headerTitle: 'We mad this App' }}
      />
      <RootStack.Screen
        name="Store"
        component={Store}
        options={{
          headerTitle: 'Cart',
          headerRight: () => (
            <TouchableOpacity style={{ position: 'relative' }}>
              <Icon
                name="shoppingcart"
                size={40}
                style={{ marginRight: 10 }}
                color="#fff"
              ></Icon>
              <Text
                style={{
                  color: '#333',
                  fontSize: 14,
                  position: 'absolute',
                  left: 19,
                  top: 8,
                }}
              >
                {cartItemCount}
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <RootStack.Screen
        name="RecipeInfo"
        component={RecipeInfo}
        options={(props) => ({
          headerRight: () => (
            <TouchableOpacity
              style={{ position: 'relative' }}
              onPress={() => props.navigation.navigate('Store')}
            >
              <Icon
                name="shoppingcart"
                size={40}
                style={{ marginRight: 10 }}
                color="#fff"
              ></Icon>
              <Text
                style={{
                  color: '#333',
                  fontSize: 14,
                  position: 'absolute',
                  left: 19,
                  top: 8,
                }}
              >
                {cartItemCount}
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <RootStack.Screen
        name="Category"
        component={Category}
        options={{
          headerTitle: 'Category',
          headerRight: () => (
            <TouchableOpacity style={{ position: 'relative' }}>
              <Icon
                name="shoppingcart"
                size={40}
                style={{ marginRight: 10 }}
                color="#fff"
              ></Icon>
              <Text
                style={{
                  color: '#333',
                  fontSize: 14,
                  position: 'absolute',
                  left: 19,
                  top: 8,
                }}
              >
                {cartItemCount}
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
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
                  style={{
                    width: 25,
                    tintColor: props.focused ? props.color : theme.colors.dark,
                  }}
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
