/* eslint-disable react/prop-types */
import * as React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Button } from 'react-native-elements'
import styled from 'styled-components/native'
import { theme } from '../../utils/theme'
import OverLay from './styled/Overlay'
import useToggle from '../hooks/useToggle'
import { Text } from 'react-native'
interface Props {
  product: Products
}

const StyledProduct = styled.TouchableOpacity`
  /* padding: 10px 15px; */
  flex-basis: 200px;
  flex: 1;
  border: 2px solid ${theme.colors.primary};
  align-self: center;
  margin: 10px;
`

const Image = styled.Image`
  width: 350px;
  height: 180px;
  position: relative;
`

const ProductItem: React.FC<Props> = ({ product }) => {
  const [on, toggle] = useToggle(false)
  return (
    <StyledProduct activeOpacity={0.6} onPress={toggle}>
      <Image source={{ uri: product.image }} />

      <OverLay text={product.title} on={on} toggle={toggle} />
    </StyledProduct>
  )
}
export default ProductItem
