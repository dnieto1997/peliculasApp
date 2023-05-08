
import React, { useEffect, useRef } from 'react'
import { View,Animated, Button } from 'react-native'


const useFade = () => {
    
  const opacity =useRef(new Animated.Value(0)).current
    const Fadein = ()=>{
  
      Animated.timing(
        opacity,
        {
          toValue : 1,
          duration:1000,
          useNativeDriver:true
        }
      ).start();
    }
    
  
  
  const FadeOut = ()=>{
    Animated.timing(
      opacity,
      {
        toValue : 0,
        duration:300,
        useNativeDriver:true
      }
    ).start();
  }
 
 
    return (
    {
        Fadein,
        FadeOut,
        opacity
    }
  )
}

export default useFade