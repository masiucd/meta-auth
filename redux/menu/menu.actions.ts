import { ToggleMenuAction, ActionTypes } from './menu.types'

export const toggleMenu = (): ToggleMenuAction => {
  return {
    type: ActionTypes.TOGGLE_MENU,
  }
}
