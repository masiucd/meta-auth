import { useState } from 'react'
export default (initialState = false): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState)

  const toggle = (): void => {
    setState(!state)
  }
  return [state, toggle]
}
