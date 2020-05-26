/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import styled from 'styled-components/native'
import { Title } from '../components/styled/Common'
import { FlatList } from 'react-native-gesture-handler'
import ProductItem from '../components/ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux'
import { getProducts } from '../../redux/products/products.actions'
import { selectProducts } from '../../redux/products/products.selector'
import Menu from '../components/Menu'

import { StackNavigationProp } from '@react-navigation/stack'
import { toggleMenu } from '../../redux/menu/menu.actions'
type ProductsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Products'
>

interface Props {
  navigation: ProductsScreenNavigationProp
}

const ScreenWrapper = styled.View`
  flex: 1;
`

const ProductsTitle = styled(Title)`
  left: 35%;
  top: 20px;
`

const ProductsStyled = styled.View`
  /* flex: 2; */
  /* flex-wrap: wrap; */
  margin-top: 80px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`

const Products: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch()
  const products = useSelector((state: AppState) => selectProducts(state))
  const isOpen = useSelector((state: AppState) => state.menu.hidden)

  React.useEffect(() => {
    dispatch(getProducts())
    dispatch(toggleMenu())
  }, [])

  return (
    <ScreenWrapper>
      {isOpen && <Menu onNavigation={navigation} />}
      <ProductsTitle>Products</ProductsTitle>
      <ProductsStyled>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductItem product={item} />}
          keyExtractor={(item) => item.title}
        />
      </ProductsStyled>
    </ScreenWrapper>
  )
}
export default Products
