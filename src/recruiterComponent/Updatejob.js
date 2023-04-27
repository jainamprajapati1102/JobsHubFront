
import React, { useEffect, useState } from "react";
import RecHeader from "./RecHeader";
import Recruiterfooter from './Recruiterfooter';
import Select from "react-select";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Typewriter from 'typewriter-effect'
import Loader from "../Loader";
function Updatejob() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const id = location.state;
    useEffect(() => {
        // simulate an API call with a delay of 3 seconds
        setTimeout(() => {
            setData("Some data");
            setIsLoading(false);
        }, 1000);
    }, []);
    useEffect(() => {
        fetchcategory();
        fetchjobData();
    }, [])
    const navigate = useNavigate();
    const [accesstoken] = useState(localStorage.getItem("recruiterToken"));
    const [categorydata, setcategorydata] = useState();
    const [jobdata, setjobdata] = useState({
        jobtitle: "",
        gender: "",
        degree: "",
        salaryrange: "",
        vacancy: "",
        experience: "",
        jobtype: "",
        qualification: "",
        skill: "",
        languageknown: "",
        interviewtype: "",
        joblocation: "",
        description: "",
        designation: ""
    });
    const requestOptions = {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            credentials: "includes",
            'Authorization': `Bearer ${accesstoken.replace(/"/g, '')}`,
        }
    }

    const inputHandler = (e) => {
        setjobdata({
            ...jobdata,
            [e.target.name]: e.target.value
        })
    }

    const selectHandler = ({ name, value }) => {
        setjobdata({
            ...jobdata,
            [name]: value
        })
    }

    const jobUpdateHandler = async () => {

        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jobdata),
        };
        const response = await fetch(`https://jobshubback-19af.onrender.com/updatejob/${id}`, requestOptions);
        const result = await response.json();

        if (result.status === 200) {
            toast.success('Update successfully');
            navigate('/Managejob')
        }
        else {
            toast.error("something wrong")
        }

    }


    /* *********** fetch jobdata *********  */
    const fetchjobData = async () => {
        const response = await fetch(`https://jobshubback-19af.onrender.com/getperticularjob/${id}`, requestOptions);
        const result = await response.json();
        setjobdata(result.data);

    }
    /* *********** fetch category *********  */
    const fetchcategory = async () => {
        const response = await fetch('https://jobshubback-19af.onrender.com/industry', requestOptions);
        const categoryres = await response.json();
        const category_list = [];
        categoryres.map((item) => { category_list.push({ value: item.ind_name, label: item.ind_name }) })
        setcategorydata(category_list)
    }


    /* *********** gender option *********  */
    const genderOption = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Both', label: 'Both' },
    ]

    /* *********** salary option *********  */
    const salaryoption = [
        { value: '5000 - 15,000', label: '5000 - 15,000' },
        { value: '15,001 - 30,000', label: '15,001 - 30,000' },
        { value: '30,001 - 50,000', label: '30,001 - 50,000' },
        { value: '50,001 - 70,000', label: '50,001 - 70,000' },
        { value: '70,001 - 90,000', label: '70,001 - 90,000' },
        { value: '90,001 - 1,10,000', label: '90,001 - 1,10,000' },
    ]

    /* *********** experinnce option *********  */
    const experienceOption = [
        { value: '0 TO 1years ', label: '0 TO 1years ' },
        { value: '1years TO 3years', label: '1years TO 3years' },
        { value: '3years TO 5years', label: '3years TO 5years' },
        { value: '5years TO above ', label: '5years TO above' },
    ]

    /* *********** job option *********  */
    const jobtypeOption = [
        { value: 'PartTime', label: 'PartTime' },
        { value: 'FullTime', label: 'FullTime' },
        { value: 'WorkFromHome', label: 'WorkFromHome' },
        { value: 'Freelancer', label: 'Freelancer' },
    ]

    /* *********** interview option *********  */
    const interviewtypeOption = [
        { value: 'In Office', label: 'In Office' },
        { value: 'TelePhonic', label: 'TelePhonic' },
        { value: 'Online Platform', label: 'Online Platform' },
    ]

    const qualificationOption = [
        { value: 'High School', label: 'High School' },
        { value: 'Intermediate', label: 'Intermediate' },
        { value: 'Graduation', label: 'Graduation' },
        { value: 'Master Degree', label: 'Master Degree' },
        { value: 'M.Phil', label: 'M.Phil' },
    ]
    const selectQuali = ({ name, value }) => {
        setjobdata({
            ...jobdata,
            [name]: value
        })
    }
    return (
        <>
            {isLoading ? <Loader /> : <div>
                <RecHeader />
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
                                        .typeString("Update Job")
                                        .pauseFor(2000)
                                        .start()
                                }}

                            /></h2>
                            <p>
                                <Link to="/home" title="Home">
                                    Home
                                </Link>{" "}
                                <i className="ti-angle-double-right" />
                                <Link to="/managejob" title="Home">
                                    Manage Job Post
                                </Link>{" "}
                                <i className="ti-angle-double-right" /> Update Job
                            </p>
                        </div>
                    </div>
                </div>
                {/* ======================= End Page Title ===================== */}
                {/* ======================= Create Job ===================== */}
                <section className="create-job padd-top-80 padd-bot-80">
                    <div className="container">
                        <form className="c-form">
                            {/* General Information */}
                            <div className="box">
                                <div className="box-header">
                                    <h4>General Information</h4>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <label>Job Title</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Job Title"
                                                name="jobtitle"
                                                value={jobdata.jobtitle}
                                                onChange={(e) => inputHandler(e)}
                                            />
                                        </div>

                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <label>Designation</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Job Title"
                                                name="designation"
                                                value={jobdata.designation}
                                                onChange={(e) => inputHandler(e)}
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <label>Gender</label>
                                                <Select
                                                    className="wide form-control"
                                                    name="gender"
                                                    onChange={({ value }) => selectHandler({ name: 'gender', value })}
                                                    options={genderOption}
                                                    value={{ value: jobdata.gender, label: jobdata.gender }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <label>Salary Range</label>
                                            <Select
                                                className="wide form-control"
                                                name="salaryrange"
                                                onChange={({ value }) => selectHandler({ name: 'salaryrange', value })}
                                                options={salaryoption}
                                                value={{ value: jobdata.salaryrange, label: jobdata.salaryrange }}
                                            />
                                        </div>

                                        <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
                                            <label>No. Of Vacancy</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="No. Of Vacancy"
                                                name="vacancy"
                                                value={jobdata.vacancy}
                                                onChange={(e) => inputHandler(e)}
                                            />
                                        </div>

                                        <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
                                            <label>Experience</label>
                                            <Select
                                                className="wide form-control"
                                                name="experience"
                                                onChange={({ value }) => selectHandler({ name: 'experience', value })}
                                                options={experienceOption}
                                                value={{ value: jobdata.experience, label: jobdata.experience }}
                                            />
                                        </div>

                                        <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
                                            <label>Job Type</label>
                                            <Select
                                                className="wide form-control"
                                                name="jobtype"
                                                onChange={({ value }) => selectHandler({ name: 'jobtype', value })}
                                                options={jobtypeOption}
                                                value={{ value: jobdata.jobtype, label: jobdata.jobtype }}
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <label>Language known</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Language known"
                                                name="languageknown"
                                                value={jobdata.languageknown}
                                                onChange={(e) => inputHandler(e)}
                                            />
                                        </div>

                                        <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
                                            <label>Qualification Required</label>
                                            <Select
                                                className="wide form-control"
                                                name="qualification"
                                                onChange={({ value }) => selectQuali({ name: 'qualification', value })}
                                                options={qualificationOption}
                                                value={{ value: jobdata.qualification, label: jobdata.qualification }}
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <label>Degree</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your Degree"
                                                name="degree"
                                                value={jobdata.degree}
                                                onChange={(e) => inputHandler(e)}
                                            />

                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <label>Skills(Seperate with Comma)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Skills"
                                                name="skill"
                                                value={jobdata.skill}
                                                onChange={(e) => inputHandler(e)}
                                            />
                                        </div>



                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <label>Types of Interview</label>
                                            <Select
                                                className="wide form-control"
                                                name="interviewtype"
                                                onChange={({ value }) => selectHandler({ name: 'interviewtype', value })}
                                                options={interviewtypeOption}
                                                value={{ value: jobdata.interviewtype, label: jobdata.interviewtype }}
                                            />
                                        </div>



                                        <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
                                            <label>Description</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Description"
                                                name="description"
                                                value={jobdata.description}
                                                onChange={(e) => inputHandler(e)}
                                            />
                                        </div>

                                    </div>


                                    <div className="col-md-6 padd-top-10 text-center">
                                        {" "}
                                        <button type='button' className="btn btn-m them-btn  full-width" onClick={() => { navigate('/managejob') }} >
                                            Cancle
                                        </button>
                                    </div>

                                    <div className="col-md-6 padd-top-10 text-center">
                                        <button
                                            type="button"
                                            className="btn btn-m theme-btn full-width"
                                            onClick={(e) => {
                                                jobUpdateHandler();
                                            }}
                                        >
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section >
                {/* ====================== End Create Job ================ */}
                <Recruiterfooter />

            </div>}
        </>
    );
}

export default Updatejob;