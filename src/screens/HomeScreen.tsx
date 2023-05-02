import React, { useState } from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import MoviesPoster from '../component/MoviesPoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

const {width:windowWidth}=Dimensions.get('window')




const  HomeScreen =() => {
 

   const {peliculasEnCine,isLoading}= useMovies()
  const {top}=useSafeAreaInsets()


 if(isLoading){
  return(
  <View style={{flex:1,justifyContent:'center',alignContent:'center'}}> 
    <ActivityIndicator color="red" size={100}/>
  
  </View>)
 }


  console.log(peliculasEnCine[0]?.title)

  return (
  <>
 <View style={{marginTop:top+20}}>


 <Carousel 

data={peliculasEnCine}
renderItem={()=> <MoviesPoster movie={peliculasEnCine[0]}/> }
sliderWidth={windowWidth}
itemWidth={300}



/>
   
   
   
   </View> 
 





   </>
  )
}

export default HomeScreen