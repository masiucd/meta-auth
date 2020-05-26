import { MenuState, MenuAction, ActionTypes } from './menu.types'

const initialState: MenuState = {
  hidden: false,
}

export default (state: MenuState = initialState, action: MenuAction) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_MENU:
      return {
        ...state,
        hidden: !state.hidden,
      }
    default:
      return state
  }
}
