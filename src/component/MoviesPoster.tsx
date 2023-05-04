import React from 'react'

import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Movie } from '../interfaces/movieDB'
import { useNavigation } from '@react-navigation/native';


interface Props{
    movie:Movie;
    height?:number;
    width?:number;
    
}



const MoviesPoster = ({movie}:Props) => {
  
    const navigation = useNavigation();
 

    return (
    
   <>

 <TouchableOpacity activeOpacity={0.8} 
 style={{marginHorizontal:2,paddingBottom:20,paddingHorizontal:5}} onPress={()=>navigation.navigate('DetailsScreen',movie)}> 
     
     <View style={styles.card}>
   <Image source={{uri:`https://image.tmdb.org/t/p/w500${movie.poster_path}`}} style={styles.image}/> 
   </View>
  

   </TouchableOpacity>
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