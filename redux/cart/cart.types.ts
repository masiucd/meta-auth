export interface CartState {
  cart: Sweet[]
  isLoading: boolean
  error: string | null
}

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  SET_ERROR = 'SET_ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR',
  CLEAR_CART = 'CLEAR_CART',
}

export interface AddCartAction {
  type: ActionTypes.ADD_TO_CART
  payload: Sweet
}
export interface RemoveFromCartAction {
  type: ActionTypes.REMOVE_FROM_CART
  payload: Sweet
}

export interface SetErrorAction {
  type: ActionTypes.SET_ERROR
  payload: string
}
export interface ClearAction {
  type: ActionTypes.CLEAR_ERROR
}
export interface ClearCartAction {
  type: ActionTypes.CLEAR_CART
}

export type CartAction =
  | AddCartAction
  | RemoveFromCartAction
  | SetErrorAction
  | ClearAction
  | ClearCartAction
