import * as React from 'react'
import styled from 'styled-components/native'

interface Props {}

const ImageStyle = styled.Image`
  height: 300px;
  width: 100%;
  position: relative;
`

const OverLay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 300px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
`

const HeaderImage: React.FC<Props> = () => {
  return (
    <>
      <ImageStyle
        source={{
          uri:
            'https://images.pexels.com/photos/4099126/pexels-photo-4099126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        }}
      />
      <OverLay />
    </>
  )
}
export default HeaderImage
