import { useEffect, useState } from "react";
import { MoviesdbPlaying,Movie } from "../interfaces/movieDB";
import movieDb from "../api/movieDb";





export  const useMovies = () => {
const [isLoading,setIsLoading]=useState(true)
 const [peliculasEnCine,setpeliculasEnCine]= useState <Movie[]>([])


const getMovies = async ()=>{
    const resp = await movieDb.get<MoviesdbPlaying>('/now_playing')
    
    setpeliculasEnCine(resp.data.results)

    setIsLoading(false)
}


    useEffect(()=>{
      getMovies()
       },[])
 
       return{ peliculasEnCine,isLoading }
}


