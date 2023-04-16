import { Outlet } from "react-router-dom";
import React from 'react'
import { useState } from "react";
import { Link, Navigate } from 'react-router-dom'

const SekProtected = () => {
    const [sektoken] = useState(localStorage.getItem('seekerToken')) //: useState(localStorage.getItem('seekerGoogle'))
    if (sektoken) {
        return <Outlet />
    }
    else {
        return <Navigate to='/seekerlogin' />
    }
}

export default SekProtected;