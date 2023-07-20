import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from '../constants'


const Carousel = () => {
    const slides =[
        "https://images2.imgix.net/p4dbimg/p20395/images/lptouch.jpg?trim=color&trimcolor=FFFFFF&trimtol=5&w=1024&h=768&fm=pjpg",
        "https://th.bing.com/th/id/OIP.YhZTDrceVC9wF9DDeGtzigHaEw?pid=ImgDet&rs=1",
        "https://th.bing.com/th/id/R.bbe73a931a0d70f69ecdc8e0764cd387?rik=IsOm6dPqBDAOTA&pid=ImgRaw&r=0"
    ]

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
      images={slides}
      dotColor={COLORS.primary}
      inactiveColor={COLORS.secondary}
      ImageComponentStyle={{borderRadius:15, width:"95%", marginTop:15}}
      autoplay
      circleLoop
      />
    </View>
  )
}

export default Carousel


const styles = StyleSheet.create({
    carouselContainer:{
        flex: 1,
        alignItems: 'center',
    }
})