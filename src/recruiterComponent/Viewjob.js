import React, { useState, useEffect } from 'react'
import Loader from '../Loader';

const Viewjob = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // simulate an API call with a delay of 3 seconds
        setTimeout(() => {
            setData("Some data");
            setIsLoading(false);
        }, 3000);
    }, []);
    return (
        <>
            {isLoading ? <Loader /> : <div>
                <>

                </>
            </div>}
        </>
    )
}

export default Viewjob
