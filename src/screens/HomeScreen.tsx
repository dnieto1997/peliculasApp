import React, { useState } from 'react';
import { View, ActivityIndicator, Dimensions,FlatList, Text,ScrollView} from 'react-native';
import { useMovies } from '../hooks/useMovies';
import MoviesPoster from '../component/MoviesPoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import HorizantalSlider from '../component/HorizantalSlider';
import GradienteBackground from '../component/GradienteBackground';


const {width:windowWidth}=Dimensions.get('window')




const  HomeScreen =() => {
 

   const {isLoading,nowPlaying,popular,topRated,upcoming}= useMovies()
  const {top}=useSafeAreaInsets()


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