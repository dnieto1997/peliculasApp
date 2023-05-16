import React ,{ createContext, useState } from "react";



interface ImageColors{
    primary:string
    secundary:string
}
interface ContextProps{
    colors:ImageColors
    previousColors:ImageColors
    SetMainColors :(colors:ImageColors)=>void
    SetPrevColors :(colors:ImageColors)=>void
}


export const GradientContext =createContext({} as ContextProps  )


export const GradientProvider = ({children}:any)=>{

    const [colors, setColors] = useState<ImageColors>({
        primary:'transparent',
        secundary:'transparent'

    })


  
    const [previousColors, setPreviouscolors] = useState<ImageColors>({
        primary:'tranparent',
        secundary:'transparent'
        
            })


const SetMainColors = (colors:ImageColors)=>{
 setColors(colors)
}

const SetPrevColors = (colors:ImageColors)=>{
    setPreviouscolors(colors)
   }


    return(
        <GradientContext.Provider value={{
colors,
previousColors,
SetMainColors,
SetPrevColors

        }}>
            {children}
        </GradientContext.Provider>
    )
}