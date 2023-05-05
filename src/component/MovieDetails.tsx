import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Cast, MovieFull } from '../interfaces/movieDB'
import Icon from 'react-native-vector-icons/Ionicons'
import currencyFormatter from 'currency-formatter'
import CastItem from './CastItem'
import { FlatList } from 'react-native-gesture-handler'


interface Props{
    movieFull:MovieFull
    cast:Cast[]
}


const MovieDetails = ({movieFull,cast}:Props) => {
  return (
    <>
    
    <View style={{marginHorizontal:20}}>
      <View style={style.container}>
      <Icon 
      name="star-outline"
      color='grey'
      size={16}
      
      />
        <Text>{movieFull.vote_average}</Text>
        <Text style={{marginLeft:6}}>

            - {movieFull.genres.map(g=>g.name).join(', ')}
        </Text>
        </View>


     <Text style={{fontSize:23,marginTop:10,fontWeight:'bold',textAlign:'center'}}>
    Historia
    
    </Text>

    <Text style={{fontSize:16,textAlign:'justify'}}> {movieFull.overview}</Text>
    <Text style={{fontSize:23,marginTop:10,fontWeight:'bold',textAlign:'center'}}>
    Presupuesto
    
    </Text>
    <Text style={{fontSize:16}}> {currencyFormatter.format(movieFull.budget,{code:'USD'})}</Text>
    </View>

      <View style={{ marginTop:10,marginBottom:20}}>
            
            <Text style={{fontSize:23,marginTop:10,fontWeight:'bold',marginHorizontal:20,textAlign:'center'}}>
   Actores
    
    </Text>

        
      </View>

    <FlatList 
    data={cast}
    keyExtractor={(item)=>item.id.toString()}
    renderItem={({item})=> <CastItem actor={item}/>}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    style={{marginTop:20,height:70}}
    
    />
    
     



    </>
  )
}

const style =StyleSheet.create({
    container:{
        flexDirection:'row',
        

    }
})

export default MovieDetails