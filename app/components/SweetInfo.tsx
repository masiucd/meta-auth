/* eslint-disable react/prop-types */
import * as React from 'react'
import styled from 'styled-components/native'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart/cart.actions'
import IngredientList from './IngredientList'

interface Props {
  item: Sweet
}
const StyledSweetInfo = styled.View``

const Image = styled.Image`
  width: 100%;
  height: 300px;
  position: relative;
`

const Button = styled.TouchableOpacity`
  padding: 10px 15px;
  margin: 40px auto;
  border: 4px solid ${(props) => props.theme.colors.primary};
  border-radius: 16px;
  background: ${(props) => props.theme.colors.primaryLight};
`

const Title = styled.Text`
  font-size: 50px;
  text-align: center;
  text-transform: capitalize;
  padding: 5px;
  font-family: 'Chewy';
  color: ${(props) => props.theme.colors.primary};
  width: 60%;

  position: absolute;
  left: 20%;
  top: 10%;
  text-shadow: 2px 2px ${(props) => props.theme.colors.dark};
`

const Text = styled.Text`
  font-size: 18px;
  padding: 5px;
`

const Description = styled.View`
  padding: 15px;
  margin: 0 auto;

  justify-content: center;
  align-items: center;
  width: 90%;
`

const OverLayImg = styled.View`
  position: absolute;
  top: 0;
  height: 300px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
`

const SweetInfo: React.FC<Props> = ({ item }) => {
  const { name, image, description, ingredients } = item
  const dispatch = useDispatch()

  return (
    <StyledSweetInfo>
      <Image source={{ uri: image }} />
      <OverLayImg />
      <Title>{name}</Title>
      <IngredientList ingredients={ingredients} />
      <Description>
        <Text style={{ fontSize: 30 }}>Description</Text>
        <Text style={{ lineHeight: 26, fontSize: 14 }}>{description}</Text>
      </Description>

      <Button onPress={() => dispatch(addToCart(item))}>
        <Text
          style={{ fontSize: 25, textTransform: 'capitalize', color: '#333' }}
        >
          Add to Cart
        </Text>
      </Button>
    </StyledSweetInfo>
  )
}
export default SweetInfo
