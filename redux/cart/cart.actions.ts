/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Dispatch } from 'react'
import { ActionTypes, AddCartAction, RemoveFromCartAction } from './cart.types'

export const addToCart = (cartItem: Sweet): AddCartAction => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: cartItem,
  }
}

export const removeFromCartAction = (cartItem: Sweet): RemoveFromCartAction => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: cartItem,
  }
}
