import React from 'react'
import { useState } from "react";
import { Navigate, Outlet } from 'react-router-dom'


const RecruterUnprotected = () => {
    const [rectoken] = useState(localStorage.getItem('recruiterToken'));

    if (rectoken) {

        return <Navigate to='/recruiterhome' />
    }
    return <Outlet />
}

export default RecruterUnprotected;