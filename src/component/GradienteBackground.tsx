import React from 'react'
import { View, ActivityIndicator, Dimensions,FlatList, Text,ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props{
    children: JSX.Element | JSX.Element[]
}
const GradienteBackground = ({children}:Props) => {
  return (
  <View style={{flex:1}}>
    <LinearGradient
    colors={['#084F6A','#75CEDB','white']}
    style={{...StyleSheet.absoluteFillObject}}
    start={{x:0.1,y:0.1}}
    end={{x:0.5,y:0.5}}
    />
    {children}
    
    </View>
  )
}

export default GradienteBackground