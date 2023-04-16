
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

    
    console.log("id====>", id);


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
    console.log(jobdata)
    console.log(accesstoken);
    // const [salarydata, setsalarydata] = useState();
    // const [experiencedata, setexperiencedata] = useState();
    // const [jobtypedata, setjobtypedata] = useState();
    // const [file, setFile] = useState();


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
        const response = await fetch(`http://localhost:5000/updatejob/${id}`, requestOptions);
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
        const response = await fetch(`http://localhost:5000/getperticularjob/${id}`, requestOptions);
        const result = await response.json();
        setjobdata(result.data);

    }

    console.log("jobdataa====>", jobdata);

    /* *********** fetch category *********  */
    const fetchcategory = async () => {
        const response = await fetch('http://localhost:5000/industry', requestOptions);
        const categoryres = await response.json();
        const category_list = [];
        categoryres.map((item) => { category_list.push({ value: item.ind_name, label: item.ind_name }) })
        setcategorydata(category_list)
    }


    /* *********** gender option *********  */
    const genderOption = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'LGBT', label: 'LGBT' },
    ]

    /* *********** salary option *********  */
    const salaryoption = [
        { value: '5000 TO 15000', label: '5000 TO 15000' },
        { value: '15001 TO 30000', label: '15001 TO 30000' },
        { value: '30001 TO 50000', label: '30001 TO 50000' },
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

    return (
        <>
            {isLoading ? <Loader /> : <div>
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
                                            <label>Gender</label>
                                            <Select
                                                className="wide form-control"
                                                name="gender"
                                                onChange={({ value }) => selectHandler({ name: 'gender', value })}
                                                options={genderOption}
                                            />

                                        </div>


                                        {/*<div className="col-md-6 col-sm-6 col-xs-12">
                          <label>Category</label>
                          <Select
                            className="wide form-control"
                            name="category"
                            onChange={({ value }) => selectHandler({ name: 'category', value })}
                            options={categorydata}
                          />
                        </div>*/}


                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <label>Salary Range</label>
                                            <Select
                                                className="wide form-control"
                                                name="salaryrange"
                                                onChange={({ value }) => selectHandler({ name: 'salaryrange', value })}
                                                options={salaryoption}
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
                                            />
                                        </div>

                                        <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
                                            <label>Job Type</label>
                                            <Select
                                                className="wide form-control"
                                                name="jobtype"
                                                onChange={({ value }) => selectHandler({ name: 'jobtype', value })}
                                                options={jobtypeOption}
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
                                            <input
                                                type="text"
                                                name="qualification"
                                                className="form-control"
                                                placeholder="High Sachool , Intermediate , Graduation , Master Degree"
                                                value={jobdata.qualification}
                                                onChange={(e) => inputHandler(e)}
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <label>Degree</label>
                                            {/* <Select
                              className="wide form-control"
                              name="category"
                              onChange={({ value }) => selectHandler({ name: 'category', value })}
                              options={categorydata}
                            />*/}
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

                                    &nbsp;
                                    <div className="text-center">
                                        <button
                                            type="button"
                                            className="btn btn-m theme-btn full-width"
                                            onClick={(e) => {
                                                jobUpdateHandler();
                                            }}
                                        >
                                            Job Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section >
                {/* ====================== End Create Job ================ */}


            </div>}
        </>
    );
}

export default Updatejob;