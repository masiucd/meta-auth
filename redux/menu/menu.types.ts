export interface MenuState {
  hidden: boolean
}

export enum ActionTypes {
  TOGGLE_MENU = 'TOGGLE_MENU',
}

export interface ToggleMenuAction {
  type: ActionTypes.TOGGLE_MENU
}

export type MenuAction = ToggleMenuAction
