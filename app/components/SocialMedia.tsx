import * as React from 'react'
import styled from 'styled-components/native'
import { FlatList } from 'react-native-gesture-handler'
import SocialItem from './SocialItem'

interface Props {}

const SocialStyles = styled.View``

const SocialMedia: React.FC<Props> = () => {
  const [state, setState] = React.useState<SocialMedia[]>([
    {
      name: 'blog',
      text: 'visit our blog',
      webUrl: 'something',
      icon: 'book',
    },
    {
      name: 'mail',
      text: 'send us a mail',
      webUrl: 'something',
      icon: 'mail',
    },
    {
      name: 'instagram',
      text: 'visit our blog',
      webUrl: 'something',
      icon: 'instagram',
    },
    {
      name: 'facebook',
      text: 'visit our blog',
      webUrl: 'something',
      icon: 'facebook',
    },
    {
      name: 'twitter',
      text: 'visit our blog',
      webUrl: 'something',
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
        <SocialItem key={item.name} item={item} />
      ))}
    </SocialStyles>
  )
}
export default SocialMedia
