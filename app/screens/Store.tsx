import * as React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux'
import { selectCart, selectCartTotal } from '../../redux/cart/cart.selector'
import Stripe from '../components/Stripe'
import styled from 'styled-components/native'
import { FlatList } from 'react-native-gesture-handler'
import CartItem from '../components/CartItem'
import StripeCheckout from 'react-stripe-checkout'

interface Props {}

const StyledStore = styled.View`
  flex: 1;
`

const Text = styled.Text`
  font-size: 20px;
  padding: 15px 10px;
  text-align: center;
  text-shadow: 2px 1px ${(props) => props.theme.colors.primary};
`

const CheckoutBtn = styled.TouchableOpacity`
  padding: 6px 8px;
  border: 4px solid ${(props) => props.theme.colors.primary};
  border-radius: 16px;
  background: ${(props) => props.theme.colors.primaryLight};
  width: 200px;
`

const BtnText = styled.Text`
  color: ${(props) => props.theme.colors.dark};
  text-align: center;
  font-size: 20px;
`

const TotalPrice = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
`

const TotalPriceText = styled.Text`
  font-size: 25px;
`

const Store: React.FC<Props> = () => {
  const cart = useSelector((state: AppState) => selectCart(state))
  const totalPrice = useSelector((state: AppState) => selectCartTotal(state))

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

      {cart.length > 0 && (
        <TotalPrice>
          <TotalPriceText>Total: {totalPrice.toFixed(2)}$</TotalPriceText>
          <CheckoutBtn onPress={() => alert('checkout')}>
            <BtnText>Checkout</BtnText>
          </CheckoutBtn>
        </TotalPrice>
      )}
    </StyledStore>
  )
}
export default Store
