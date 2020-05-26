/* eslint-disable react/prop-types */
import * as React from 'react'
import styled from 'styled-components/native'
import { FlatList } from 'react-native-gesture-handler'
import { menuData } from '../../utils/data'
import { theme } from '../../utils/theme'
import { Animated, View } from 'react-native'
import MenuItem from './MenuItem'
import { StackNavigationProp } from '@react-navigation/stack'

type ScreenNavigationProp =
  | StackNavigationProp<RootStackParamList, 'Home'>
  | StackNavigationProp<RootStackParamList, 'Products'>
  | StackNavigationProp<RootStackParamList, 'Recept'>
  | StackNavigationProp<RootStackParamList, 'RecipeInfo'>
  | StackNavigationProp<RootStackParamList, 'Search'>
  | StackNavigationProp<RootStackParamList, 'Store'>

interface Props {
  onNavigation: ScreenNavigationProp
}

const StyledMenu = styled.SafeAreaView`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 20px;
  z-index: 3;
`

const Menu: React.FC<Props> = ({ onNavigation }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current // Initial value for opacity: 0
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
    }).start()
  }, [])

  return (
    <StyledMenu>
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
        <FlatList
          data={menuData}
          renderItem={({ item }) => (
            <MenuItem item={item} onNavigation={onNavigation} />
          )}
          keyExtractor={(item, index) => item.id}
        />
      </Animated.View>
    </StyledMenu>
  )
}
export default Menu
