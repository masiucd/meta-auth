import { createSelector } from 'reselect'
import { AppState } from '..'
import { ProductsState } from './products.types'

const productsState = (state: AppState) => state.products

export const selectProducts = createSelector(
  [productsState],
  (product: ProductsState) => product.products,
)
