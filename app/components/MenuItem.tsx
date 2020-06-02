/* eslint-disable react/prop-types */
import * as React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import styled from 'styled-components/native'
import { theme } from '../../utils/theme'

const StyledMenuItem = styled.TouchableOpacity`
  background: ${theme.colors.primary};
  margin: 10px;
  border-radius: 16px;
  box-shadow: ${theme.boxShadow.main};
`

const Text = styled.Text`
  color: ${theme.colors.light};
  padding: 10px;
  font-size: 21px;
  font-weight: 600;
  text-align: center;
  font-family: 'Chewy';
`

type ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

interface Props {
  item: MenuData
  onNavigation: ScreenNavigationProp
}

const MenuItem: React.FC<Props> = ({ item, onNavigation }) => {
  const sendToScreen = () => {
    onNavigation.navigate(item.path)
  }

  return (
    <StyledMenuItem onPress={sendToScreen}>
      <Text>{item.text}</Text>
    </StyledMenuItem>
  )
}
export default MenuItem
