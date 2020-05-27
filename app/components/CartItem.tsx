/* eslint-disable react/prop-types */
import * as React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign'
import { useDispatch } from 'react-redux'
import { removeFromCartAction, addToCart } from '../../redux/cart/cart.actions'
interface Props {
  item: Recipe
}

export const StyledCartItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 0 10px;
`

const Image = styled.Image`
  width: 150px;
  height: 100px;
  /* border: 2px solid ${({ theme }) => theme.colors.primary}; */
`

const Text = styled.Text`
  font-size: 17px;
  text-transform: capitalize;
`

const TitleAndPrice = styled.View`
  align-items: flex-end;
`

const CartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <StyledCartItem
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
      }}
    >
      <Image source={{ uri: item.image }} />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => dispatch(removeFromCartAction(item))}>
          <Icon name="left" size={20} color="#333" />
        </TouchableOpacity>
        <Text>qty:</Text>
        <Text>{item.qty}</Text>
        <TouchableOpacity onPress={() => dispatch(addToCart(item))}>
          <Icon name="right" size={20} color="#333" />
        </TouchableOpacity>
      </View>
      <TitleAndPrice>
        <Text>{item.title}</Text>
        <Text>{(item.price * item.qty).toFixed(2)}$</Text>
      </TitleAndPrice>
    </StyledCartItem>
  )
}
export default CartItem
