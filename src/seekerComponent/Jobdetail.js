import React, { useEffect, useState } from 'react'
import Footer from '../Footer'

import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import Seekerfooter from './Seekerfooter';
import SeekHeader from "./SeekHeader";
import loadjs from 'loadjs'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Typewriter from 'typewriter-effect'
import Loader from '../Loader';
import { toast } from "react-toastify";
function Jobdetail() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        // simulate an API call with a delay of 3 seconds
        setTimeout(() => {
            setData("Some data");
            setIsLoading(false);
        }, 3000);
    }, []);
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const id = location.state;
    const [jobdata, setJobdata] = useState('');
    const [accesstoken] = useState(localStorage.getItem('seekerToken'))
    useEffect(() => {
        call();
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

        const response = await fetch('http://localhost:5000/checkprofile', configOption);
        const result = await response.json();
        console.log(`Profile check ${JSON.stringify(result)}`);
        if (result.status !== 0) {
        } else {
            toast.error(result.msg);
            navigate('/seditprofile');

        }
    }
    const call = async () => {
        const configOption = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${accesstoken}`
            }
        }
        const response = await fetch(`http://localhost:5000/jobdetail/${id}`, configOption)
        const result = await response.json()

        setJobdata(result.data);
        console.log(`jainam :--${jobdata}`)
    }
    const applyHandle = (id) => {
        console.log("id from the job detrail", id)
        navigate('/apply', { state: id })
    }
    return (
        <>
            {isLoading ? <Loader /> : <div>
                <>
                    <loadjs />
                    <SeekHeader />
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
                                            .typeString("Job Detail")
                                            .pauseFor(2000)
                                            .start()
                                    }}

                                /></h2>
                                <p>
                                    <Link to="/seekerhome" title="Home">
                                        Home
                                    </Link>{" "}
                                    <i className="ti-angle-double-right" /> Job Detail
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ======================= End Page Title ===================== */}
                    {/* ================ Profile Settings ======================= */}
                    <section className="padd-top-80 padd-bot-60">
                        <div className="container">
                            {/* row */}
                            <div className="row">
                                <div className="col-md-8 col-sm-7">
                                    <div className="detail-wrapper">
                                        <div className="detail-wrapper-body">
                                            <div className="row">
                                                <div className="col-md-4 text-center user_profile_img">
                                                    {" "}
                                                    <img
                                                        src={`http://localhost:5000/public/uploads1/companylogo/${jobdata?.postedby.cmp_logo}`}
                                                        className="width-100"
                                                        alt="No image"
                                                    />
                                                    <h4 className="meg-0">{jobdata?.jobtitle}</h4>
                                                    <span>512 Big Tower, New Delhi</span>
                                                    <div className="text-center">
                                                        <button
                                                            onClick={() => { applyHandle(id) }}
                                                            type="button"
                                                            data-toggle="modal"
                                                            data-target="#signin"
                                                            className="btn-job theme-btn job-apply"
                                                        >
                                                            Apply Now
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 user_job_detail">
                                                    <div className="col-sm-12 mrg-bot-10">
                                                        {" "}
                                                        <i className="ti-credit-card padd-r-10" />
                                                        {jobdata?.salaryrange}/Month{" "}
                                                    </div>
                                                    <div className="col-sm-12 mrg-bot-10">
                                                        {" "}
                                                        <i className="ti-mobile padd-r-10" />
                                                        {jobdata?.postedby.rec_mno}{" "}
                                                    </div>
                                                    <div className="col-sm-12 mrg-bot-10">
                                                        {" "}
                                                        <i className="ti-email padd-r-10" />
                                                        {jobdata?.postedby.cmp_email}{" "}
                                                    </div>
                                                    <div className="col-sm-12 mrg-bot-10">
                                                        {" "}
                                                        <i className="ti-calendar padd-r-10" />
                                                        <span className={
                                                            jobdata.jobtype === "Part Time" ? "job-type part-type" : jobdata?.jobtype === "Full Time" ? "job-type full-type " : jobdata?.jobtype === "Freelancer" ? "job-type internship-type" : jobdata?.jobtype === "WorkFromHome" ? "job-type workFromHome" : ''}>{jobdata?.jobtype}</span>{" "}
                                                    </div>
                                                    <div className="col-sm-12 mrg-bot-10">
                                                        {" "}
                                                        <i className="ti-user padd-r-10" />
                                                        <span className="cl-danger">{jobdata?.vacancy} Open Position</span>{" "}
                                                    </div>
                                                    <div className="col-sm-12 mrg-bot-10">
                                                        {" "}
                                                        <i className="ti-shield padd-r-10" />{jobdata?.experience}  Exp.{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="detail-wrapper">
                                        <div className="detail-wrapper-header">
                                            <h4>Job Skill</h4>
                                        </div>
                                        <div className="detail-wrapper-body">
                                            <ul className="detail-list">

                                                <li>{jobdata?.skill}</li>

                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                {/* Sidebar */}
                                <div className="col-md-4 col-sm-5">
                                    <div className="sidebar">
                                        {/* Start: Job Overview */}
                                        <div className="widget-boxed">
                                            <div className="widget-boxed-header">
                                                <h4>
                                                    <i className="ti-location-pin padd-r-10" />
                                                    Location
                                                </h4>
                                            </div>
                                            <div className="widget-boxed-body">
                                                <div className="side-list no-border">
                                                    <ul>
                                                        <li>
                                                            <i className="ti-credit-card padd-r-10" />
                                                            Package: {jobdata?.salaryrange}/Month
                                                        </li>
                                                        <li>
                                                            <i className="ti-world padd-r-10" />
                                                            {jobdata?.postedby?.linkdin}
                                                        </li>
                                                        <li>
                                                            <i className="ti-mobile padd-r-10" />
                                                            {jobdata?.postedby?.twitter}
                                                        </li>
                                                        <li>
                                                            <i className="ti-email padd-r-10" />
                                                            {jobdata?.postedby?.google}
                                                        </li>
                                                        <li>
                                                            <i className="ti-pencil-alt padd-r-10" />
                                                            Bachelor Degree
                                                        </li>
                                                        <li>
                                                            <i className="ti-shield padd-r-10" />3 Year Exp.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End: Job Overview */}
                                        {/* Start: Opening hour */}
                                        <div className="widget-boxed">
                                            <div className="widget-boxed-header">
                                                <h4>
                                                    <i className="ti-time padd-r-10" />
                                                    Opening Hours
                                                </h4>
                                            </div>
                                            <div className="widget-boxed-body">
                                                <div className="side-list">
                                                    <ul>
                                                        <li>
                                                            Monday <span>{jobdata?.postedby?.worktime}</span>
                                                        </li>
                                                        <li>
                                                            Tuesday <span>{jobdata?.postedby?.worktime}</span>
                                                        </li>
                                                        <li>
                                                            Wednesday <span>{jobdata?.postedby?.worktime}</span>
                                                        </li>
                                                        <li>
                                                            Thursday <span>{jobdata?.postedby?.worktime}</span>
                                                        </li>
                                                        <li>
                                                            Friday <span>{jobdata?.postedby?.worktime}</span>
                                                        </li>
                                                        <li>
                                                            Saturday <span>10:00 AM - 3:00 PM</span>
                                                        </li>
                                                        <li>
                                                            Sunday <span>Closed</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* End Row */}

                        </div>
                    </section>
                    <Seekerfooter />
                </>
            </div>}
        </>
    )
}

export default Jobdetail