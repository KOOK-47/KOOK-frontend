/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, useState, useContext } from "react";

// creating auth context
const AuthContext = createContext()


// function to serve context to child comps
export function userAuth(){
    return useContext(AuthContext)
}

function AuthContextProvider({children}) {

    const [user, setUser] = useState(null)

    function register(body){
        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
            };
        return fetch("https://kook-api.onrender.com/auth/register", options)
    }


    async function login(details){
        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
            };
        const response = await fetch("https://kook-api.onrender.com/auth/login", options);
        const data = await response.json();
        setUser(data);
        return data; 
    }



    const value = {
        register,
        login,
        user
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
      )
}


export default AuthContextProvider