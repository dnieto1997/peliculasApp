import React from 'react'
import { Movie } from '../interfaces/movieDB';
import {View,FlatList,Text, StyleSheet} from 'react-native'

import MoviesPoster from '../component/MoviesPoster';

interface Props{
    title?:string;
    movies: Movie[];
   
}


const HorizantalSlider = ({title,movies}:Props) => {
    
  return (
    <View >
{
  title && <Text style={{fontSize:28,fontWeight:'bold',marginLeft:20}}>{title}</Text>
}

   

<View >
<FlatList
   data={movies}
   renderItem={({item}:any)=> (
   <MoviesPoster movie={item} width={100} height={200} />
     
   )}
   
   keyExtractor={(item)=>item.id.toString()}
   horizontal={true}
   showsVerticalScrollIndicator={false}

   
   />
   </View>
   
   </View>
  )
}


export default HorizantalSlider