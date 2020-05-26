/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Dispatch } from 'react'
import {
  GetCartAction,
  SetErrorAction,
  ActionTypes,
  AddCartAction,
} from './cart.types'

type GetActionType = GetCartAction | SetErrorAction

export const getCart = () => async (dispatch: Dispatch<GetActionType>) => {
  try {
    const res = await fetch('http://localhost:5000/cart')
    const data = await res.json()
    dispatch({
      type: ActionTypes.GET_CART,
      payload: data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: ActionTypes.SET_ERROR,
      payload: 'ooops something went wrong',
    })
  }
}

type AddToCartActionType = AddCartAction | SetErrorAction

export const addToCart = (cartItem: Recipe) => async (
  dispatch: Dispatch<AddToCartActionType>,
) => {
  try {
    const res = await fetch('http://localhost:5000/cart', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    })
    const data = await res.json()
    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: ActionTypes.SET_ERROR,
      payload: 'Could not add to cart',
    })
  }
}
