import { useContext,useState,createContext } from "react";


const AuthContext=createContext(null)

export const AuthProvider=({children})=>{

    const [CurrentUser, setCurrentUser] = useState("");
    
    const login=(userName)=>{
        setCurrentUser(userName)
        localStorage.setItem("email",userName)

    }
    
    return <AuthContext.Provider value={{CurrentUser,login,}}>
        {children}
    </AuthContext.Provider>
}


export const useFn=()=>{
    return useContext(AuthContext)
}
