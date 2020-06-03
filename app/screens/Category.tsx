/* eslint-disable react/prop-types */
import * as React from 'react'
import { Text, View } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux'
import {
  getSweetByCategory,
  getSweets,
  getSweetByAPICategory,
} from '../../redux/recipes/recipes.actions'
import { selectFilteredSweets } from '../../redux/recipes/recipes.selector'

type CategoryScreenRouteProp = RouteProp<RootStackParamList, 'Category'>
interface Props {
  route: CategoryScreenRouteProp
}

const Category: React.FC<Props> = ({ route }) => {
  const dispatch = useDispatch()
  const sweetsByCategory = useSelector((state: AppState) =>
    selectFilteredSweets(state),
  )

  console.log(sweetsByCategory)

  const { category } = route.params

  React.useEffect(() => {
    // dispatch(getSweetByCategory(category))
    // dispatch(getSweets())
    dispatch(getSweetByAPICategory(category))
  }, [])

  return (
    <>
      <Text>{category}</Text>
    </>
  )
}
export default Category
