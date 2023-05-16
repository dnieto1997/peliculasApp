import React, { useContext } from 'react'
import { View, ActivityIndicator, Dimensions,FlatList, Text,ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';

interface Props{
    children: JSX.Element | JSX.Element[]
}
const GradienteBackground = ({children}:Props) => {
  
  const {colors} = useContext(GradientContext)
  

  colors.primary
  
  return (
  <View style={{flex:1}}>
    <LinearGradient
    colors={[colors.primary,colors.secundary,'white']}
    style={{...StyleSheet.absoluteFillObject}}
    start={{x:0.1,y:0.1}}
    end={{x:0.5,y:0.5}}
    />
    {children}
    
    </View>
  )
}

export default GradienteBackground