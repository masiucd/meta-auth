import { CartAction, CartState, ActionTypes } from './cart.types'

const initialState: CartState = {
  cart: [],
  isLoading: true,
  error: null,
}

export default (state: CartState = initialState, action: CartAction) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        isLoading: false,
      }
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    case ActionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null,
        isLoading: false,
      }
    default:
      return state
  }
}
