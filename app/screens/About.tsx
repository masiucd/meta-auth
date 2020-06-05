import * as React from 'react'
import useToggle from '../hooks/useToggle'
import styled from 'styled-components/native'
import HeaderImage from '../components/HeaderImage'
import SocialMedia from '../components/SocialMedia'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

type AboutScreenRouteProp = RouteProp<RootStackParamList, 'About'>

type AboutScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'About'
>

interface Props {
  route: AboutScreenRouteProp
  navigation: AboutScreenNavigationProp
}

const AboutStyles = styled.View`
  flex: 1;
`

const ContentWrapper = styled.ScrollView``

const IntroText = styled.Text`
  padding: 10px 15px;
  line-height: 25px;
  font-weight: 700;
  font-size: 16px;
`

const ContentText = styled(IntroText)`
  font-weight: 400;
  font-size: 14px;
`

const About: React.FC<Props> = ({ route, navigation }) => {
  const [on, toggle] = useToggle()

  return (
    <AboutStyles>
      <HeaderImage />
      <ContentWrapper>
        <IntroText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          harum exercitationem quae culpa obcaecati, incidunt fugiat architecto
          sed nulla natus tempora facere, dignissimos omnis reprehenderit cumque
          dicta modi nihil, enim quasi voluptatem reiciendis dolorem! Rem et
          velit odio accusantium sapiente. Sunt repellendus eius quisquam
          assumenda!
        </IntroText>
        <ContentText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          itaque dignissimos consequatur consectetur repellat nesciunt sequi
          quas error natus dolores!
        </ContentText>
        <ContentText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
          doloremque ratione provident fugiat nihil placeat deserunt ad.
          Adipisci facilis harum debitis? Qui impedit earum hic laborum eos
          explicabo repudiandae provident cum iusto aspernatur. Recusandae natus
          assumenda fuga nisi rerum consectetur at vero. Inventore sapiente
          atque id consequuntur error blanditiis doloremque sint distinctio
          necessitatibus rem, similique iste delectus, soluta est vel! Deleniti
          ipsum et eum officia fuga error, earum dolore ut provident pariatur
          facilis quod quibusdam, voluptatem ducimus sed quae.
        </ContentText>
        <ContentText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
          doloremque ratione provident fugiat nihil placeat deserunt ad.
          Adipisci facilis harum debitis? Qui impedit earum hic laborum eos
          explicabo
        </ContentText>
        <SocialMedia onNavigation={navigation} />
      </ContentWrapper>
    </AboutStyles>
  )
}
export default About
