export interface CartState {
  cart: Recipe[]
  isLoading: boolean
  error: string | null
}

export enum ActionTypes {
  GET_CART = 'GET_CART',
  ADD_TO_CART = 'ADD_TO_CART',
  SET_ERROR = 'SET_ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR',
}

export interface GetCartAction {
  type: ActionTypes.GET_CART
  payload: Recipe[]
}

export interface AddCartAction {
  type: ActionTypes.ADD_TO_CART
  payload: Recipe
}
export interface SetErrorAction {
  type: ActionTypes.SET_ERROR
  payload: string
}
export interface ClearAction {
  type: ActionTypes.CLEAR_ERROR
}

export type MenuAction =
  | AddCartAction
  | GetCartAction
  | SetErrorAction
  | ClearAction
