import { Outlet } from "react-router-dom";
import React from 'react'
import { useState } from "react";
import { Navigate } from 'react-router-dom'


const SekUnProtected = () => {
    const [sektoken] = useState(localStorage.getItem('seekerToken'));

    if (sektoken) {
        return <Navigate to='/seekerhome' />
    }
    else {
        return <Outlet />
    }
}

export default SekUnProtected;