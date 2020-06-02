import * as React from 'react'
import { Text, View, Button } from 'react-native'

import useToggle from '../hooks/useToggle'
import styled from 'styled-components/native'

interface Props {}

const AboutStyles = styled.View`
  flex: 1;
`

const About: React.FC<Props> = () => {
  const [on, toggle] = useToggle()

  return (
    <AboutStyles>
      <Text>About page</Text>
    </AboutStyles>
  )
}
export default About
