/* eslint-disable react/prop-types */
import * as React from 'react'
import { Text } from 'react-native'

interface Props {
  item: Recipe
}

const CartItem: React.FC<Props> = ({ item }) => {
  return (
    <>
      <Text>{item.title}</Text>
    </>
  )
}
export default CartItem
