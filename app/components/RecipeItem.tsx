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
  item: Recipe
  navigation: RecipeScreenNavigationProp
}

const StyledRecipe = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin: 8px;
  border: 2px solid ${theme.colors.primary};
  padding: 6px;
`

const Text = styled.Text`
  font-size: 16px;
  text-transform: capitalize;
`

const Image = styled.Image`
  width: 100%;
  height: 120px;
`

const RecipeItem: React.FC<Props> = ({ item, navigation }) => {
  return (
    <StyledRecipe onPress={() => navigation.navigate('RecipeInfo', { item })}>
      <Image source={{ uri: item.image }} />
      <Text>{item.title}</Text>
    </StyledRecipe>
  )
}
export default RecipeItem
