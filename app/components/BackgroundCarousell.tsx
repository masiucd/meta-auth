/* eslint-disable react/prop-types */
import * as React from 'react'
import styled from 'styled-components/native'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  NativeSyntheticEvent,
  SafeAreaView,
} from 'react-native'

const DEVICE_WIDTH = Dimensions.get('window').width

const StyledView = styled.View`
  height: 40%;
  width: 100%;
`

const StyledImg = styled.Image`
  height: 100%;
  width: ${DEVICE_WIDTH};
`

const CircleWrapper = styled.View`
  position: absolute;
  bottom: 15px;
  height: 15px;
  width: 100%;
  padding: 21px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const styles = StyleSheet.create({
  whiteCircle: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 5,
  },
})

interface Props {
  images: any[]
}

const BgCarousel: React.FC<Props> = ({ images }) => {
  const scrollRef = React.useRef<any>(null)
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0)

  // React.useEffect(() => {
  //   // setInterval(() => {
  //   // setSelectedIndex(
  //   //   (pevState) => (pevState === images.length - 1 ? 0 : +1),
  //   //   () =>
  //   //     scrollRef.current.scrollTo({
  //   //       animated: true,
  //   //       y: 0,
  //   //       x: DEVICE_WIDTH * selectedIndex,
  //   //     }),
  //   // )
  //   // setSelectedIndex(selectedIndex + 1)
  //   // return scrollRef.current.scrollTo({
  //   //   animated: true,
  //   //   y: 0,
  //   //   x: DEVICE_WIDTH * selectedIndex,
  //   // })

  //   // setSelectedIndex((prevState) => (prevState === images.length - 1 ? 0 : prevState + 1))
  //   setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1)
  //   //   scrollRef.current.scrollTo({
  //   //     animated: true,
  //   //     y: 0,
  //   //     x: DEVICE_WIDTH * selectedIndex,
  //   //   })

  //   // }, 12000)
  // }, [selectedIndex])

  const updateIndex = (event: any) => {
    // get width of the view size
    const viewSize = event.nativeEvent.layoutMeasurement.width
    // get current position of scroll view
    const contentOfSet = event.nativeEvent.contentOffset.x

    const newIndex = Math.floor(contentOfSet / viewSize)
    setSelectedIndex(newIndex)
  }

  return (
    <StyledView>
      <ScrollView
        horizontal
        pagingEnabled
        onMomentumScrollEnd={updateIndex}
        ref={scrollRef}
      >
        {images.map((image) => (
          <StyledImg key={image} source={{ uri: image }} />
        ))}
      </ScrollView>
      <CircleWrapper>
        {images.map((img, index) => (
          <View
            key={img}
            style={[
              styles.whiteCircle,
              { opacity: index === selectedIndex ? 0.3 : 1 },
            ]}
          />
        ))}
      </CircleWrapper>
    </StyledView>
  )
}
export default BgCarousel
