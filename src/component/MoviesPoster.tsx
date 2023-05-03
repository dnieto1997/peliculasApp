import React from 'react'

import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { Movie } from '../interfaces/movieDB'


interface Props{
    movie:Movie;
    height?:number;
    width?:number;
    
}



const MoviesPoster = ({movie,height=300,width=140}:Props) => {
  
 

    return (
    
   <>

 <ScrollView horizontal={true}> 
     
     <View style={styles.card}>
   <Image source={{uri:`https://image.tmdb.org/t/p/w500${movie.poster_path}`}} style={styles.image}/> 
   </View>
  

   </ScrollView>
   </>  
     
  )
}


const styles =StyleSheet.create({
image:{
    flex:1,
    borderRadius:20,


    
    
},card:{
    margin:10,
    width:200,
    height:420,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
}
})
export default MoviesPoster