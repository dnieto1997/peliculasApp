import React, { useEffect, useRef } from 'react'
import { View,Animated, Button } from 'react-native'
import useFade from '../hooks/useFade'




const FadeScreen = () => {
 
   const {Fadein,FadeOut,opacity} =useFade()

  return (
    <View style={{flex:1,backgroundColor:'grey',justifyContent:'center',alignItems:'center'}}>
 <Animated.View 
  style={{backgroundColor:'#084f6A', width:150,height:150
  ,borderColor:'white',borderWidth:10,opacity:opacity,marginBottom:10}}
 
 />

<Button title='FadeIn' onPress={Fadein}/>
<Button title='FadeOut' onPress={FadeOut}/>
    </View>
  )
}

export default FadeScreen