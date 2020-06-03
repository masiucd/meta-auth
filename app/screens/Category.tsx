/* eslint-disable react/prop-types */
import * as React from 'react'
import { Text } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux'
import { selectSweets } from '../../redux/recipes/recipes.selector'
import { getSweetByCategory } from '../../redux/recipes/recipes.actions'

type CategoryScreenRouteProp = RouteProp<RootStackParamList, 'Category'>
interface Props {
  route: CategoryScreenRouteProp
}

const Category: React.FC<Props> = ({ route }) => {
  const dispatch = useDispatch()
  const sweets = useSelector((state: AppState) => selectSweets(state))

  React.useEffect(() => {
    dispatch(getSweetByCategory(sweets, route.params?.category))
  }, [])
  return (
    <>
      {sweets.map((x) =>
        x.category === route.params.category ? (
          <Text>{x.category}</Text>
        ) : (
          <Text>{x.category}</Text>
        ),
      )}
      <Text>Category</Text>
    </>
  )
}
export default Category
