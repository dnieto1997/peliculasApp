import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect,useState} from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { Movie, MoviesdbResponse } from '../interfaces/movieDB';
import { RootStackParams } from '../navigation/Navigation';


import  Icon from 'react-native-vector-icons/Ionicons'
import { useMoviesDetails } from '../hooks/useMoviesDetails';
import { useMoviesCredits } from '../hooks/UseMoviesCredits';
import MovieDetails from '../component/MovieDetails';

const Screenheight = Dimensions.get('screen').height
interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> { };


interface Detalles {
  detalles: Movie[];
  
}


const DetailScreen = ({ route }: Props) => {

  const movie = route.params
  
 const {isLoading,movieFull,cast}=useMoviesDetails(movie.id)

console.log({cast})


  return (
    <>
      <ScrollView>
        <View style={styles.imageContainer}>
          <View style={styles.imageBorder}>
          <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles.posterImage} />
          </View>
        
        </View>

        <View style={styles.marginContainer}>
          <Text style={styles.title}>{movie.original_title}</Text>
          <Text style={styles.subTitle} >{movie.title}</Text>
        </View>
        
        <View>
        
          {
            isLoading?<ActivityIndicator size={30} color="grey" style={{marginTop:20}}/>
          :<MovieDetails movieFull={movieFull!} cast={cast}/>
          }
         </View> 

        
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  posterImage: {
    flex: 1,



  },
  imageContainer: {
    overflow:'hidden',
    width: '100%',
    height: Screenheight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
    borderBottomEndRadius:25,
    borderBottomStartRadius:25
  },
  marginContainer:{
    marginHorizontal:20,
    marginTop:20
  },
  subTitle:{
 fontSize:16,
 opacity:0.8
  },
  title:{
    fontSize:18,
    fontWeight:'bold'
    
  },
  imageBorder:{
  borderBottomEndRadius:25,
  borderBottomStartRadius:25,
  flex:1,
  overflow:'hidden'
  }
})

export default DetailScreen