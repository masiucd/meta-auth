import { Dispatch } from 'react'
import {
  GetProductsAction,
  ActionTypes,
  SetErrorAction,
} from './products.types'

export const getProducts = () => async (
  dispatch: Dispatch<GetProductsAction | SetErrorAction>,
) => {
  try {
    const response = await fetch('http://localhost:5000/products')
    const data = await response.json()
    dispatch({
      type: ActionTypes.GET_PRODUCTS,
      payload: data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: ActionTypes.SET_ERROR,
      payload: 'Something went wrong',
    })
  }
}
