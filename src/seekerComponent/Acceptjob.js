

// import React from 'react'
import Seekerfooter from './Seekerfooter';
import SeekHeader from "./SeekHeader";
import { toast } from "react-toastify";
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import loadjs from 'loadjs';
import Typewriter from 'typewriter-effect'
import moment from 'moment';
import Loader from '../Loader';
function Acceptjob() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // simulate an API call with a delay of 3 seconds
        setTimeout(() => {
            setData("Some data");
            setIsLoading(false);
        }, 3000);
    }, []);
    useEffect(() => {
        callhistory();
        check();
    }, [])
    const check = async () => {
        const configOption = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                credentials: "includes",
                'Authorization': `Bearer ${accesstoken}`,
            }
        }

        const response = await fetch('https://jobshubback-bry5.onrender.com/checkprofile', configOption);
        const result = await response.json();
        console.log(`Profile check ${JSON.stringify(result)}`);
        if (result.status !== 0) {
        } else {
            toast.error(result.msg);
            navigate('/seditprofile');

        }
    }
    const { id } = useParams();
    const navigate = useNavigate();
    const [accesstoken] = useState(localStorage.getItem('seekerToken'))
    const [seeker, setSeeker] = useState([]);
    const callhistory = async () => {
        const configOption = {
            methodP: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${accesstoken}`
            }
        };

        const data = await fetch('https://jobshubback-bry5.onrender.com/jobhistoryaccept', configOption);

        const result = await data.json()

        console.log(result)

        setSeeker(result)
        console.log(seeker)
    }


    return (

        <>
            {isLoading ? <Loader /> : <div>
                <loadjs />
                <>

                    {/* ======================= Start Page Title ===================== */}
                    {/* <div className="page-title">
                    <div className="container">
                        <div className="page-caption">
                            <h2><Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Job History")
                                        .pauseFor(2000)
                                        .start()
                                }}

                            /></h2>
                            <p>
                                <a href="#" title="Home">
                                    Home
                                </a>{" "}
                                <i className="ti-angle-double-right" /> Job History
                            </p>
                        </div>
                    </div>
                </div>*/}
                    {/* ======================= End Page Title ===================== */}

                    <section className="utf_manage_jobs_area padd-top-80 padd-bot-80">
                        <div className="container">
                            <div className="table-responsive">
                                <table className="table table-lg table-hover">
                                    <thead>
                                        <tr>
                                            <th>Company Name</th>
                                            <th>Accepted Date</th>
                                            <th>status</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            seeker.map((item) => (
                                                <tr>
                                                    <td><i className="ti-user" />{item?.rec_id?.cmp_name}</td>
                                                    <td>{moment(item?.rec_id?.createdAt).format("DD/MM/YYYY")}</td>
                                                    <td>
                                                        {/* {((item) => {
                                                        if (item?.accept == 1) {
                                                            return (
                                                                <p style={{ color: "green" }}>Accepted</p>
                                                            )
                                                        }
                                                        else if (item?.accept == 2) {
                                                            return (
                                                                <p style={{ color: "red" }}>Reject</p>
                                                            )
                                                        }
                                                        else {
                                                            return (
                                                                <p style={{ color: "blue" }}>Pending</p>
                                                            )
                                                        } */}

                                                        {/* })()} */}

                                                        {item?.accept === 1 ?
                                                            <div> <p style={{ color: "#0fb76b" }}>Accepted</p></div> :
                                                            item?.accept === 2 ?
                                                                <div>
                                                                    {/* <p style={{ color: "green" }}>Accepted</p> */}
                                                                    <p style={{ color: "red" }}>Rejected</p>
                                                                </div>
                                                                : item?.accept === 0 ?
                                                                    <div>
                                                                        {/* <p style={{ color: "green" }}>Accepted</p> */}
                                                                        {/* <p style={{ color: "red" }}>Rejected</p> */}
                                                                        <p style={{ color: "blue" }}>Pending</p>
                                                                    </div>
                                                                    : ''
                                                        }


                                                        {/* {item?.accept === 1 ? <p style={{ color: "green" }}>Accepted</p> : <p style={{ color: "red" }}>Pending</p>} */}

                                                    </td>

                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                                <div className="utf_flexbox_area padd-10">
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
                                </div>
                            </div>
                        </div>
                    </section>



                </>
            </div>}
        </>

    )
}

export default Acceptjob
