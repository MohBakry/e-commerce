import { createContext, useState } from "react";

export let CounterContext= createContext()
export default function CounterContextProvider(props){

    let [count,setCount]=useState(10)

    return <CounterContext.Provider  value={{count,setCount}}>
    {props.children}    
    </CounterContext.Provider>
    


}