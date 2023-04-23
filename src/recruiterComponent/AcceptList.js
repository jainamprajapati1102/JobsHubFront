import React, { useState, useEffect } from 'react'

import RecHeader from './RecHeader';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Recruiterfooter from './Recruiterfooter';
import Typewriter from 'typewriter-effect'
import Loader from '../Loader';
import nodata from "../img/nodata.png"
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
            'Authorization': `Bearer ${accesstoken}`
        }
    }

    const getAcceptList = async () => {
        const response = await fetch('https://jobshubback-19af.onrender.com/acceptlist', requestoption);
        const result = await response.json();
        setuserData(result)
    }
    const exportcsv = async () => {
        const d1 = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
        const response = await fetch(`https://jobshubback-19af.onrender.com/exportcsv/${accesstoken}`, d1)
        if (response.status === 200) {
            window.open(response.url, "self")
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
        }, 1000);
    }, []);

    return (
        <>
            <>
                {/* ======================== Manage Job ========================= */}
                <section className="utf_manage_jobs_area padd-top-50 padd-bot-50 text-success">
                    <div className="container">
                        <div className="table-responsive">
                            <table className="table table-lg table-hover">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Contact</th>
                                        <th>Gender</th>
                                    </tr>
                                </thead>
                                {userdata.length > 0 ?
                                    <tbody>

                                        {userdata.map((item) => (
                                            <tr key={item?._id}>
                                                <td>
                                                    <a href="job-detail.html">
                                                        {" "}
                                                        <img
                                                            src={`https://jobshubback-19af.onrender.com/public/uploads1/seekerprofile/${item?.js_id?.js_profile}`}
                                                            className="avatar-lg"
                                                            alt="Avatar"
                                                        />
                                                        {item?.js_id?.js_name}
                                                    </a>
                                                </td>
                                                <td>{item?.js_id?.js_email}</td>
                                                <td>{item?.js_id?.js_mno}</td>
                                                <td>{item?.js_id?.js_gender}</td>
                                            </tr>
                                        ))
                                        }
                                    </tbody>
                                    :
                                    (
                                        <td colSpan="5" style={{ textAlign: "center" }}>
                                            <img src={nodata} style={{ width: "400px" }} />
                                        </td>
                                    )
                                }
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