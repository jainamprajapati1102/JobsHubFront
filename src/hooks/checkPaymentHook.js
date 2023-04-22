import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const useCheckpayment = () => {
    const [accesstoken, setAccesstoken] = useState("")
    useEffect(() => {
        setAccesstoken(localStorage.getItem('recruiterToken'))
    }, [])

    const navigate = useNavigate();
    const checkPayment = async () => {
        const config = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                credentials: "includes",
                'Authorization': `Bearer ${accesstoken}`
            }
        }

        const response = await fetch('http://localhost:5000/checkpayment', config);
        const result = await response.json()
        if (result.status == 0) {
        } else if (result.status == 1) {
            navigate('/editprofile')
        } else if (result.status == 2) {
            navigate('/payment')
        }
    }
    return {
        checkPayment
    }
}

export default useCheckpayment