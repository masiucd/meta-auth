/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Dispatch } from 'react'
import { ActionTypes, AddCartAction } from './cart.types'

export const addToCart = (cartItem: Recipe): AddCartAction => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: cartItem,
  }
}
