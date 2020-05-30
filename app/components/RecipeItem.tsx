/* eslint-disable react/prop-types */
import * as React from 'react'
import styled from 'styled-components/native'
import { theme } from '../../utils/theme'
import { StackNavigationProp } from '@react-navigation/stack'

type RecipeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Recept'
>

interface Props {
  item: Sweet
  navigation: RecipeScreenNavigationProp
}

const StyledRecipe = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;

  margin: 8px;
  border: 2px solid ${theme.colors.dark};
`

const Text = styled.Text`
  font-size: 25px;
  font-family: 'Chewy';
  text-transform: capitalize;
  position: absolute;
  z-index: 3;
  color: ${(props) => props.theme.colors.primary};
`

const Image = styled.Image`
  width: 100%;
  height: 200px;
  position: relative;
`

const OverLay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  /* right: 0;
  bottom: 0; */
  background: ${(props) => props.theme.colors.darkShadow};
  height: 200px;
  width: 100%;
`

const RecipeItem: React.FC<Props> = ({ item, navigation }) => {
  return (
    <StyledRecipe onPress={() => navigation.navigate('RecipeInfo', { item })}>
      <Image source={{ uri: item.image }} />
      <OverLay />
      <Text>{item.name}</Text>
    </StyledRecipe>
  )
}
export default RecipeItem
