import * as React from 'react'
import styled from 'styled-components/native'

interface Props {
  onItem: Ingredient
}
const StyledIngredient = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
`
const TextStyles = styled.Text`
  font-size: 18px;
  padding: 5px;
  font-weight: bold;
`

const IngredientItem: React.FC<Props> = ({ onItem }) => {
  return (
    <StyledIngredient
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <TextStyles>{onItem.name}</TextStyles>
      <TextStyles>{onItem.volume}</TextStyles>
      <TextStyles>{onItem.measure}</TextStyles>
    </StyledIngredient>
  )
}
export default IngredientItem
