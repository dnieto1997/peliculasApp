import { useEffect, useState } from "react"
import movieDb from "../api/movieDb";
import { MovieFull } from "../interfaces/movieDB";

interface MovieDetails{
    isLoadin:boolean
    //movieFull:
    cast:any[]

}

export const useMoviesDetails = (movieId:number) => {
  const [state,setState]=useState<MovieDetails>();

  const getMoviesDetails =async ()=>{
    const resp = await movieDb.get<MovieFull>(`/${movieId}`)
    console.log(resp.data.overview)
  }

  useEffect(()=>{
      getMoviesDetails()
  },[])


  return{state}
}
