import { createSelector } from 'reselect'
import { AppState } from '..'
import { CartState } from './cart.types'

const cartState = (state: AppState) => state.cart

export const selectCart = createSelector(
  [cartState],
  (cart: CartState) => cart.cart,
)

export const selectCartTotal = createSelector(
  [selectCart],
  (cartItems: Recipe[]) =>
    cartItems.reduce((qty, item) => qty + item.qty * item.price, 0),
)

// For the cart icon
export const selectCartItemCount = createSelector(
  [selectCart],
  (cartItems: Recipe[]) => cartItems.reduce((qty, item) => qty + item.qty, 0),
)
