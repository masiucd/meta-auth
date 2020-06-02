import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux'
import {
  selectRecipes,
  selectSweets,
  selectFilteredSweets,
} from '../../redux/recipes/recipes.selector'
import { getRecipes, getSweets } from '../../redux/recipes/recipes.actions'
import styled from 'styled-components/native'
import { FlatList } from 'react-native-gesture-handler'
import RecipeItem from '../components/RecipeItem'
import { StackNavigationProp } from '@react-navigation/stack'
import FilterInput from '../components/SearchFilter'

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
  const sweets = useSelector((state: AppState) => selectSweets(state))
  const filteredSweets = useSelector((state: AppState) =>
    selectFilteredSweets(state),
  )

  React.useEffect(() => {
    dispatch(getSweets())
  }, [])

  return (
    <StyledRecipeList>
      <FilterInput placeHolder="...Search" />
      <FlatList
        style={{ marginTop: 40 }}
        data={filteredSweets.length > 0 ? filteredSweets : sweets}
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
