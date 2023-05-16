import React, { useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator, Dimensions,FlatList, Text,ScrollView} from 'react-native';
import { useMovies } from '../hooks/useMovies';
import MoviesPoster from '../component/MoviesPoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import HorizantalSlider from '../component/HorizantalSlider';
import GradienteBackground from '../component/GradienteBackground';
import ImageColors from 'react-native-image-colors'
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

const {width:windowWidth}=Dimensions.get('window')




const  HomeScreen =() => {
 

   const {isLoading,nowPlaying,popular,topRated,upcoming}= useMovies()
  const {top}=useSafeAreaInsets()
  const {SetMainColors} = useContext(GradientContext)
 
  const getPosterColors =  async(index:number)=>{
    const movie = nowPlaying[index]
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
    
    const {primary='green',secundary='orange'} = await getImageColors(uri)
    SetMainColors({primary,secundary})

 
  }

useEffect(()=>{

if(nowPlaying?.length>0){
  getPosterColors(0)
}

},[nowPlaying])
  

 if(isLoading){
  return(
  <View style={{flex:1,justifyContent:'center',alignContent:'center'}}> 
    <ActivityIndicator color="red" size={100}/>
  
  </View>)
 }




  return (
 
 <GradienteBackground >
 <ScrollView >
 <View style={{marginTop:top + 20}}>

<View style={{height:440}}>
 <Carousel 

data={nowPlaying!}
renderItem={({item}:any)=> <MoviesPoster movie={item} height={300} width={200}/> }
sliderWidth={windowWidth}
itemWidth={250}
layout={'default'} 
inactiveSlideOpacity={0.9}
onSnapToItem={index =>getPosterColors(index)}



/>
</View>
   
   
   <HorizantalSlider title='Populares' movies={popular!} />
   <HorizantalSlider title='Top Rated' movies={topRated!}/>
   <HorizantalSlider title='Upcoming' movies={upcoming!}/>
   </View> 
 





   </ScrollView>
   </GradienteBackground>
  )
}

export default HomeScreen