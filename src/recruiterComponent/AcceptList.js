import React, { useState, useEffect } from 'react'

import RecHeader from './RecHeader';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Recruiterfooter from './Recruiterfooter';
import Typewriter from 'typewriter-effect'
import Loader from '../Loader';
const AcceptList = () => {

    useEffect(() => {
        getAcceptList();
    }, []);

    const [accesstoken] = useState(localStorage.getItem('recruiterToken'));
    const [userdata, setuserData] = useState([])
    const requestoption = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${accesstoken}`//.replace(/"/g, '')}`,
        }
    }

    const getAcceptList = async () => {
        const response = await fetch('https://jobshubback-bry5.onrender.com/acceptlist', requestoption);
        const result = await response.json();
        console.log("ACCEPTlIST--->", result)
        setuserData(result)
    }

    console.log("userdata=====>", userdata);


    const exportcsv = async () => {
        const d1 = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }

        const response = await fetch('https://jobshubback-bry5.onrender.com/exportcsv', d1)
        console.log(response)
        if (response.status === 200) {
            window.open(response.url, "blank")
            // toast.success('CSV Download Complete')
        } else {
            toast.error('Please Try After Some Time')
        }


    }




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

            <>
                {/*< RecHeader />*/}
                { /* ======================= Page Title ===================== */}

                {/*<div className="page-title">
                    <div className="container">
                        <div className="page-caption">
                            <h2><Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Accept List")
                                        .pauseFor(2000)
                                        .start()
                                }}

                            /></h2>
                            <p>
                                <Link to="/home" title="Home">
                                    Home
                                </Link>{" "}
                                <i className="ti-angle-double-right" /> AcceptList
                            </p>
                        </div>
                    </div>
                </div>*/}
                {/* ======================= End Page Title ===================== */}


                {/* ======================== Manage Job ========================= */}

                <section className="utf_manage_jobs_area padd-top-50 padd-bot-50">
                    <div className="container">
                        <div className="table-responsive">
                            <table className="table table-lg table-hover">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Contact</th>
                                        <th>Gender</th>
                                        {/* <th>Action</th> */}
                                    </tr>
                                </thead>
                                <tbody>

                                    {userdata.map((item) => (
                                        <tr key={item?._id}>
                                            <td>
                                                <a href="job-detail.html">
                                                    {" "}
                                                    <img
                                                        src={`https://jobshubback-bry5.onrender.com/public/uploads1/seekerprofile/${item?.js_id?.js_profile}`}
                                                        className="avatar-lg"
                                                        alt="Avatar"
                                                    />

                                                    {item?.js_id?.js_name}
                                                </a>
                                            </td>
                                            <td>
                                                {item?.js_id?.js_email}
                                            </td>

                                            <td>
                                                {item?.js_id?.js_mno}
                                            </td>

                                            <td>
                                                {item?.js_id?.js_gender}
                                            </td>

                                            <td>

                                                {/* {item?.accept == 1 ? <Button variant="success" > Accepted </Button> : */}
                                                {/* <Button onClick={() => resumeview(item?.resume)} variant="info" data-toggle="tooltip"  > viewDetail </Button> */}



                                                {/* <Button variant="info" data-toggle="tooltip" onClick={window.open().location.href = {`https://jobshubback-bry5.onrender.com/public/uploads/resume/${item?.resume}`}> view Resume</Button> */}

                                                {/* 
                                            <a href={`https://jobshubback-bry5.onrender.com/public/uploads/resume/${item?.resume}`} target="_blank"
                                                rel="noreferrer">
                                                Open First PDF
                                            </a> */}
                                            </td>
                                        </tr>
                                    ))
                                    }




                                </tbody>
                            </table>
                            {/*<div className="utf_flexbox_area padd-10">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            {" "}
                                            <a className="page-link" href="#" aria-label="Previous">
                                                {" "}
                                                <span aria-hidden="true">«</span>{" "}
                                                <span className="sr-only">Previous</span>{" "}
                                            </a>{" "}
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            {" "}
                                            <a className="page-link" href="#" aria-label="Next">
                                                {" "}
                                                <span aria-hidden="true">»</span>{" "}
                                                <span className="sr-only">Next</span>{" "}
                                            </a>{" "}
                                        </li>
                                    </ul>
                                </div>*/}
                        </div>
                    </div>
                </section>
                {
                }
                <div className='container' style={{ display: "flex", justifyContent: "center" }}>
                    {

                        userdata != "" ? < Button onClick={exportcsv} className="btn btn-primary" style={{ width: "20rem" }}> Export To CSV </Button> : ''
                    }
                </div>
                {/* ====================== End Manage Company ======  ========== */}
            </>

            {/*<Recruiterfooter />*/}
        </>
    )
}

export default AcceptList;