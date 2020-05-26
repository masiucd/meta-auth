export interface ProductsState {
  products: Products[]
  isLoading: boolean
  error: string | null
}

export enum ActionTypes {
  GET_PRODUCTS = 'GET_PRODUCTS',
  ADD_PRODUCT = 'ADD_PRODUCTS',
  SET_ERROR = 'SET_ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR',
}

export interface GetProductsAction {
  type: ActionTypes.GET_PRODUCTS
  payload: Products[]
}

export interface AddProductsAction {
  type: ActionTypes.ADD_PRODUCT
  payload: Products
}
export interface SetErrorAction {
  type: ActionTypes.SET_ERROR
  payload: string
}
export interface ClearErrorAction {
  type: ActionTypes.CLEAR_ERROR
}

export type ProductAction =
  | GetProductsAction
  | AddProductsAction
  | SetErrorAction
  | ClearErrorAction
