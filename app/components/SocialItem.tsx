import * as React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Entypo'
interface Props {
  item: SocialMedia
}

const SocialItemStyles = styled.View`
  padding: 15px 5px;
  flex-direction: row;
  border: 2px solid red;
  align-items: center;
`

const SocialText = styled.Text`
  text-transform: capitalize;
  width: 20%;
`

const SocialTextSecondary = styled(SocialText)`
  width: 40%;
  margin-left: auto;
`

const SocialItem: React.FC<Props> = ({ item }) => {
  return (
    <SocialItemStyles>
      <Icon name={item.icon} size={30} style={{ marginLeft: 10, width: 40 }} />
      <SocialText>{item.name}</SocialText>
      <SocialTextSecondary>{item.text}</SocialTextSecondary>
    </SocialItemStyles>
  )
}
export default SocialItem
