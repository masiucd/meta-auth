/* eslint-disable react/prop-types */
import * as React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign'
interface Props {
  item: Recipe
}

export const StyledCartItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`

const Image = styled.Image`
  width: 150px;
  height: 100px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`

const Text = styled.Text`
  font-size: 17px;
`

const CartItem: React.FC<Props> = ({ item }) => {
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
        <TouchableOpacity onPress={() => alert('decrease')}>
          <Icon name="left" size={20} color="#333" />
        </TouchableOpacity>
        <Text>qty:</Text>
        <Text>2</Text>
        <TouchableOpacity onPress={() => alert('increase')}>
          <Icon name="right" size={20} color="#333" />
        </TouchableOpacity>
      </View>
      <Text>{item.title}</Text>
      <Text>{item.price}$</Text>
    </StyledCartItem>
  )
}
export default CartItem
