import { useEffect, useState } from "react"
import movieDb from "../api/movieDb";
import { Cast,Credits } from "../interfaces/movieDB";

interface Creditos{
    isLoading:boolean
   Credits:Credits
    cast:Cast[]

}

export const useMoviesCredits = (movieId:number) => {
  const [state,setState]=useState<Creditos>();

  const getMoviesCredits = async ()=>{
    const resp = await movieDb.get<Creditos>(`/${movieId}/credits`)
    
  }

  useEffect(()=>{
    getMoviesCredits()
  },[])


  return{state}
}
