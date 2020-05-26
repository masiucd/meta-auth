import { Dispatch } from 'react'
import { GetCartAction, SetErrorAction, ActionTypes } from './cart.types'

type GetActionType = GetCartAction | SetErrorAction

export const getCart = () => async (dispatch: Dispatch<GetActionType>) => {
  try {
    const res = await fetch('https://localhost:5000/cart')
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
