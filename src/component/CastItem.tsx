import React from 'react'
import { Cast } from '../interfaces/movieDB'
import { Image, StyleSheet, Text, View } from 'react-native'


interface Props{
    actor:Cast
}
const CastItem = ({actor}:Props) => {
  
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`
    return (
    <View style={styles.container}>
        {
            actor.profile_path && (<Image source={{uri}} style={{width:60,height:60,borderRadius:10}}/>)
        }
        
        
        <View style={styles.actorInfo}>
        <Text style={{fontSize:18,fontWeight:'bold'}}>
            {actor.name}
        </Text>
        <Text style={{fontSize:18,opacity:0.7}}>
            {actor.character}
        </Text>
        </View>
    </View>
  )
}

const styles =StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:10,
        height:70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        marginRight:30,
        paddingRight:10,
        paddingTop:6

    },
    actorInfo:{
        marginLeft:10,
        marginTop:5
    }
})

export default CastItem