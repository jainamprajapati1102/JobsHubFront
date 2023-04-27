// import React from 'react'
import Seekerfooter from './Seekerfooter';
import SeekHeader from "./SeekHeader";
import { toast } from "react-toastify";
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import loadjs from 'loadjs';
import Typewriter from 'typewriter-effect'
import moment from 'moment';
import Acceptjob from './Acceptjob';
import Rejectjob from './Rejectjob';
import Loader from '../Loader';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import nodata from "../img/nodata.png"
function Jobhistory() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // simulate an API call with a delay of 3 seconds
        setTimeout(() => {
            setData("Some data");
            setIsLoading(false);
        }, 1000);
    }, []);
    useEffect(() => {
        callhistory();
    }, [])
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

        const data = await fetch('https://jobshubback-19af.onrender.com/jobhistory', configOption);

        const result = await data.json()
        setSeeker(result)
    }

    const [del, setDel] = useState();
    const delHandle = (item) => {
        setDel({
            ...del, _id: item
        })

    }

    const deleteJobHandler = async () => {
        const configOption = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${accesstoken}`
            }
        };
        const data = await fetch(`https://jobshubback-19af.onrender.com/jobbackup/${del._id}`, configOption);
        const result = await data.json()
        if (result.status === 201) {
            toast.success("Your Application In Trash")
            callhistory();
            navigate('/seekerhome')
        }
    }
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    return (

        <>
            {isLoading ? <Loader /> : <div>
                <loadjs />
                <>

                    <SeekHeader />
                    <Modal
                        open={open} onClose={onCloseModal} center
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <span>
                                <h3>Are You Sure Want To Trash? </h3>
                            </span>
                        </div>

                        <div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    margin: "0 10px 0 10px",
                                }}
                            >
                                <span>
                                    <button className="btn btn-m theme-btn3"
                                        onClick={() => {
                                            deleteJobHandler();
                                            onCloseModal()
                                        }}

                                    >
                                        {" "}
                                        <i className="glyphicon glyphicon-ok" />
                                    </button>
                                    &nbsp;
                                    <button className="btn btn-m theme-btn2"
                                        onClick={() => {
                                            onCloseModal();
                                        }}>
                                        {" "}
                                        <i className=" ti-close" />
                                    </button>
                                </span>
                            </div>
                        </div>
                    </Modal>
                    {/* ======================= Start Page Title ===================== */}
                    <div className="page-title">
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
                                    <Link to="/seekerhome" title="Home">
                                        Home
                                    </Link>{" "}
                                    <i className="ti-angle-double-right" /> Job History
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ======================= End Page Title ===================== */}

                    <section className="utf_manage_jobs_area padd-top-80 padd-bot-80">
                        <div className="container">
                            <div className="table-responsive">
                                <table className="table table-lg table-hover">
                                    <thead>
                                        <tr>
                                            <th>Company Name</th>
                                            <th>Applied Date</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    {seeker.length > 0 ?
                                        <tbody>
                                            {

                                                seeker.map((item) => (
                                                    <tr>
                                                        <td>
                                                            <img
                                                                src={`https://jobshubback-19af.onrender.com/public/uploads1/companylogo/${item?.rec_id?.cmp_logo}`}
                                                                className="avatar-lg"
                                                                alt="Avatar"
                                                            />
                                                            {item?.rec_id?.cmp_name}
                                                        </td>
                                                        <td>{moment(item?.rec_id?.updatedAt).format("DD/MM/YYYY")}</td>
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
                                                        <td>

                                                            {
                                                                item?.accept ? "" :
                                                                    <Link to="/jobhistory" className="cl-danger mrg-5" data-toggle="tooltip" onClick={() => { onOpenModal(); delHandle(item._id) }} ><i className="fa fa-trash-o" /></Link>
                                                            }
                                                        </td>
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
                                {
                                    seeker.length > 10 ? <div className="utf_flexbox_area padd-10">
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
                                    </div> : ""

                                }

                            </div>
                        </div>
                    </section>

                    {/* ====================== Resume Detail ================ */}

                    {/* ====================== End Resume Detail ================ */}
                </>
                <Seekerfooter />
            </div>}
        </>

    )
}

export default Jobhistory