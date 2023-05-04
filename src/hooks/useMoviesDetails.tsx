import { useEffect, useState } from "react"
import movieDb from "../api/movieDb";
import { Cast, Credits, MovieFull } from "../interfaces/movieDB";

interface MovieDetails{
    isLoading:boolean
   movieFull?:MovieFull;
    cast:Cast[]

}

export const useMoviesDetails = (movieId:number) => {
  const [state,setState]=useState<MovieDetails>({
    isLoading:true,
    movieFull:undefined,
    cast:[]
  });

  const getMoviesDetails = async ()=>{
    const movieDetailsPromise= movieDb.get<MovieFull>(`/${movieId}`)
    const castPromise =  movieDb.get<Credits>(`/${movieId}/credits`)
 
    const [movieDetailsResp,castCreditsResp] =await Promise.all([movieDetailsPromise,castPromise]) 
     

    setState({
      isLoading:false,
      movieFull:movieDetailsResp.data,
      cast:castCreditsResp.data.cast
    })


  }

  useEffect(()=>{
      getMoviesDetails()
  },[])


  return{
    ...state
    
    
    }
}
