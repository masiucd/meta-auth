import * as React from 'react'
import styled from 'styled-components/native'
import { FlatList } from 'react-native-gesture-handler'
import IngredientItem from './IngredientItem'
interface Props {
  ingredients: Ingredient[]
}

const Title = styled.Text`
  font-size: 24px;
  padding: 10px 0;
  text-align: center;
  font-family: 'Chewy';
`
const IngredientListStyles = styled.View`
  padding: 30px 15px;
`

const IngredientList: React.FC<Props> = ({ ingredients }) => {
  return (
    <IngredientListStyles>
      <Title>Ingredients</Title>
      <FlatList
        data={ingredients}
        renderItem={({ item }) => <IngredientItem onItem={item} />}
        keyExtractor={(item) => item.name}
      />
    </IngredientListStyles>
  )
}
export default IngredientList
