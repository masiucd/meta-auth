import { createSelector } from 'reselect'
import { AppState } from '..'
import { CartState } from './cart.types'

const cartState = (state: AppState) => state.cart

export const selectCart = createSelector(
  [cartState],
  (cart: CartState) => cart.cart,
)
