import 'styled-components'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryLight: string
      secondary: string
      light: string
      dark: string
    }
    boxShadow: {
      main: string
      secondary: string
      common: string
    }
    size: {
      textSize: string
      h1: string
      h2: string
      h3: string
      h4: string
    }
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary: '#F9C6DC',
    primaryLight: 'rgba(249, 198, 220, .5)',
    light: '#fff',
    dark: '#333',
    secondary: '#fe33ee32',
  },
  boxShadow: {
    main: '2px 3px rgba(0,0,0,0.2)',
    secondary: '2px 3px rgba(0,0,0,0.2)',
    common: '2px 3px rgba(0,0,0,0.2)',
  },
  size: {
    textSize: '18px',
    h1: '36px',
    h2: '30px',
    h3: '25px',
    h4: '20px',
  },
}
