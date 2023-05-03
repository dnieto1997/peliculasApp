import { useEffect, useState } from "react";
import { MoviesdbResponse,Movie } from "../interfaces/movieDB";
import movieDb from "../api/movieDb";


interface MoviesState{
    nowPlaying:Movie[];
    popular:Movie[];
    topRated:Movie[];
    upcoming:Movie[];
}


export  const useMovies = () => {
const [isLoading,setIsLoading]=useState(true)
 const [moviesState,setmoviesState]= useState <MoviesState>()
 

const getMovies = async ()=>{
   const nowPlayingPromise= movieDb.get<MoviesdbResponse>('/now_playing')
   const popularPromise= movieDb.get<MoviesdbResponse>('/popular')
   const topRatedPromise= movieDb.get<MoviesdbResponse>('/top_rated')
   const upcomingPromise= movieDb.get<MoviesdbResponse>('/upcoming')

    
  const resps = await Promise.all([nowPlayingPromise,popularPromise,topRatedPromise,upcomingPromise])
   
     setmoviesState({
        nowPlaying: resps[0].data.results,
        popular: resps[1].data.results,
        topRated: resps[2].data.results,
        upcoming: resps[3].data.results
     })






  setIsLoading(false)
}


    useEffect(()=>{
      getMovies()
       },[])
 
       return{ isLoading,...moviesState }
}


