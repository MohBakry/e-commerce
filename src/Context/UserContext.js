import { createContext, useState } from "react";

export let UserContext=createContext()
export default function UserContextProvider(props){
    let [UserToken,SetUserToken ]=useState(null)

    return <UserContext.Provider value={{UserToken,SetUserToken}}>
        {props.children}
    </UserContext.Provider>

}