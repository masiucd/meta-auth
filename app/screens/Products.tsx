/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import styled from 'styled-components/native'
import { Title } from '../components/styled/Common'
import { FlatList } from 'react-native-gesture-handler'
import ProductItem from '../components/ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux'
import { selectSweets } from '../../redux/recipes/recipes.selector'
import { getSweets } from '../../redux/recipes/recipes.actions'
import { StackNavigationProp } from '@react-navigation/stack'

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
  margin-top: 80px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`

const Products: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch()
  const sweets = useSelector((state: AppState) => selectSweets(state))

  React.useEffect(() => {
    dispatch(getSweets())
  }, [])

  return (
    <ScreenWrapper>
      <ProductsTitle>Products</ProductsTitle>
      <ProductsStyled>
        <FlatList
          data={sweets}
          renderItem={({ item }) => (
            <ProductItem product={item} onNavigation={navigation} />
          )}
          keyExtractor={(item) => item.name}
        />
      </ProductsStyled>
    </ScreenWrapper>
  )
}
export default Products
