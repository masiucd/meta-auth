import { ProductsState, ProductAction, ActionTypes } from './products.types'

const initialState: ProductsState = {
  products: [],
  isLoading: true,
  error: null,
}
export default (state: ProductsState = initialState, action: ProductAction) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
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
