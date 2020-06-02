/* eslint-disable react/prop-types */
import * as React from 'react'
import styled from 'styled-components/native'
import { RouteProp } from '@react-navigation/native'
import SweetInfo from '../components/SweetInfo'

type RecipeInfoScreenRouteProp = RouteProp<RootStackParamList, 'RecipeInfo'>

interface Props {
  route: RecipeInfoScreenRouteProp
}

const StyledRecipeInfo = styled.ScrollView`
  flex: 1;
`

const RecipeInfo: React.FC<Props> = ({ route }) => {
  return (
    <StyledRecipeInfo>
      <SweetInfo item={route.params.item} />
    </StyledRecipeInfo>
  )
}
export default RecipeInfo
