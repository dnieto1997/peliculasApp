import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieDB';


export type RootStackParams ={
  HomeScreen:undefined;
  DetailsScreen:Movie;
}



const Stack = createStackNavigator<RootStackParams>();

const  Navigation =() => {
  return (
    
    <Stack.Navigator screenOptions={{
        headerShown:false,
        cardStyle:{
            backgroundColor:'white'
        }
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailScreen} />
    
  
    </Stack.Navigator>
  );
}

export default Navigation