import React from 'react'
import { useFonts } from '@use-expo/font'
import NavigatorWrapper from './app/navigation'
import { AppLoading } from 'expo'
import { Provider } from 'react-redux'
import configureStore from './redux'
import { ThemeProvider } from 'styled-components'
import { theme } from './utils/theme'
const store = configureStore()

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Chewy: require('./assets/fonts/Chewy-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <NavigatorWrapper />
          </Provider>
        </ThemeProvider>
      </>
    )
  }
}
