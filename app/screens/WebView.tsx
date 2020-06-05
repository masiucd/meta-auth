import * as React from 'react'
import { WebView } from 'react-native-webview'
import { View } from 'react-native'
import { RouteProp } from '@react-navigation/native'

type WebViewScreenRouteProp = RouteProp<RootStackParamList, 'WebView'>

interface Props {
  route: WebViewScreenRouteProp
}

const WebViewComponent: React.FC<Props> = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: route.params.url }} />
    </View>
  )
}
export default WebViewComponent
