import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { userAuth } from "../context/AuthContext.jsx"

function Private() {

    const location = useLocation()
    const { user } =  userAuth()

        if(user === null || undefined){
           return <Navigate to='login' replace state={{from: location}}/>;
        }
        return user.userId ? <Outlet /> : <Outlet/>;
       

}

export default Private 