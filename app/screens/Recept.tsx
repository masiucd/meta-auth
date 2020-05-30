import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux'
import {
  selectRecipes,
  selectSweets,
} from '../../redux/recipes/recipes.selector'
import { getRecipes, getSweets } from '../../redux/recipes/recipes.actions'
import styled from 'styled-components/native'
import { FlatList } from 'react-native-gesture-handler'
import RecipeItem from '../components/RecipeItem'
import { StackNavigationProp } from '@react-navigation/stack'
import { Text } from 'react-native'

type RecipeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Recept'
>

interface Props {
  navigation: RecipeScreenNavigationProp
}

const StyledRecipeList = styled.View`
  flex: 1;
  justify-content: center;
`

const Recept: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch()
  // const recipes = useSelector((state: AppState) => selectRecipes(state))
  const sweets = useSelector((state: AppState) => selectSweets(state))
  console.log(sweets)

  React.useEffect(() => {
    // dispatch(getRecipes())
    dispatch(getSweets())
  }, [])

  return (
    <StyledRecipeList>
      <FlatList
        style={{ marginTop: 40 }}
        data={sweets}
        renderItem={({ item }) => (
          <RecipeItem navigation={navigation} item={item} />
        )}
        keyExtractor={(item: Sweet) => item.name}
        numColumns={2}
      />
    </StyledRecipeList>
  )
}
export default Recept
