import * as React from 'react'
import styled from 'styled-components/native'
import { FlatList } from 'react-native-gesture-handler'
import SocialItem from './SocialItem'
import { StackNavigationProp } from '@react-navigation/stack'

type AboutScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'About'
>
interface Props {
  onNavigation: AboutScreenNavigationProp
}

const SocialStyles = styled.View``

const SocialMedia: React.FC<Props> = ({ onNavigation }) => {
  const [state, setState] = React.useState<SocialMedia[]>([
    {
      name: 'blog',
      text: 'visit our blog',
      webUrl: 'https://blog.logrocket.com/',
      icon: 'book',
    },
    {
      name: 'mail',
      text: 'send us a mail',
      webUrl: 'https://www.hmailserver.com/',
      icon: 'mail',
    },
    {
      name: 'instagram',
      text: 'check new images',
      webUrl: 'https://www.instagram.com/',
      icon: 'instagram',
    },
    {
      name: 'facebook',
      text: 'Like us',
      webUrl: 'https://facebook.com/',
      icon: 'facebook',
    },
    {
      name: 'twitter',
      text: 'tweet us',
      webUrl: 'https://twitter.com/home',
      icon: 'twitter',
    },
  ])
  return (
    <SocialStyles>
      {/* <FlatList
        data={state}
        renderItem={({ item }) => <SocialItem item={item} />}
        keyExtractor={(item) => item.name}
      /> */}
      {state.map((item) => (
        <SocialItem key={item.name} item={item} onNavigation={onNavigation} />
      ))}
    </SocialStyles>
  )
}
export default SocialMedia
