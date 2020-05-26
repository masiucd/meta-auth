import * as React from 'react'
import { Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux'
import { selectCart } from '../../redux/cart/cart.selector'
import { getCart } from '../../redux/cart/cart.actions'
import styled from 'styled-components/native'
import { FlatList } from 'react-native-gesture-handler'
import CartItem from '../components/CartItem'
interface Props {}

const StyledStore = styled.View`
  flex: 1;
`

const Store: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state: AppState) => selectCart(state))
  React.useEffect(() => {
    dispatch(getCart())
  }, [])

  return (
    <StyledStore>
      {cart.length === 0 ? (
        <Text>Cart is empty</Text>
      ) : (
        <Text>
          You have {cart.length} item{cart.length > 1 && "'s"} in your cart{' '}
        </Text>
      )}
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={(item) => item.id + Math.random()}
      />
    </StyledStore>
  )
}
export default Store
