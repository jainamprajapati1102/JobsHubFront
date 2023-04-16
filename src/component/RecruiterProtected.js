import { Outlet } from "react-router-dom";
import React from 'react'
import { useState } from "react";
import { Navigate } from 'react-router-dom'

const RecruterProtected = () => {

    const [rectoken] = useState(localStorage.getItem('recruiterToken'));

    if (rectoken) {
        return <Outlet />
    }
    else {
        return <Navigate to='/recruiterlogin' />

    }
}

export default RecruterProtected;