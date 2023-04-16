import React, { useEffect, useState } from "react";
import RecHeader from "./RecHeader";
import Footer from "../Footer";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Recruiterfooter from "./Recruiterfooter";
import { Dropdown } from "bootstrap";
import Typewriter from 'typewriter-effect'
import Loader from "../Loader";
function Addjob() {
  useEffect(() => {
    fetchcategory();

  }, [])

  const navigate = useNavigate();
  const [accesstoken] = useState(localStorage.getItem("recruiterToken"));
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    // simulate an API call with a delay of 3 seconds
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
  }, []);

  const [categorydata, setcategorydata] = useState();
  // const [salarydata, setsalarydata] = useState();
  // const [experiencedata, setexperiencedata] = useState();
  // const [jobtypedata, setjobtypedata] = useState();
  // const [file, setFile] = useState();
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


  const jobPostHandler = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        credentials: "includes",
        'Authorization': `Bearer ${accesstoken.replace(/"/g, '')}`,
      },
      body: JSON.stringify(jobdata),
    };
    const response = await fetch('https://jobshubback-bry5.onrender.com/jobpost', requestOptions);
    const result = await response.json();
    console.log('result===>', result)
    if (result.status === 200) {
      toast.success("job post successfully");
      navigate("/Managejob");
    }
    else {
      if (result.status === 400) {
        toast.error(result?.msg);
      }
    }
  };


  /* **** fetch category ****  */
  const fetchcategory = async () => {
    const response = await fetch('https://jobshubback-bry5.onrender.com/industry', requestOptions);
    const categoryres = await response.json();
    const category_list = [];
    categoryres.map((item) => { category_list.push({ value: item._id, label: item.ind_name }) })
    setcategorydata(category_list)
  }


  /* **** gender option ****  */
  const genderOption = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ]

  /* **** salary option ****  */
  const salaryoption = [
    { value: '5000 - 15000', label: '5000 - 15000' },
    { value: '15001 - 30000', label: '15001 - 30000' },
    { value: '30001 - 50000', label: '30001 - 50000' },
  ]

  /* **** experinnce option ****  */
  const experienceOption = [
    { value: '0  - 1 years ', label: '0  - 1 years ' },
    { value: '1 years - 3 years', label: '1 years - 3 years' },
    { value: '3 years - 5 years', label: '3 years - 5 years' },
    { value: '5 years - a bove ', label: '5 years - above' },
  ]

  /* **** job option ****  */
  const jobtypeOption = [

    { value: 'FullTime', label: 'FullTime' },
    { value: 'WorkFromHome', label: 'WorkFromHome' },
    { value: 'Freelancer', label: 'Freelancer' },
  ]

  /* **** interview option ****  */
  const interviewtypeOption = [
    { value: 'In Office', label: 'In Office' },
    { value: 'TelePhonic', label: 'TelePhonic' },
    { value: 'Online Platform', label: 'Online Platform' },
  ]

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
                    .typeString("Add Job")
                    .pauseFor(2000)
                    .start()
                }}

              /></h2>
              <p>
                <Link to="/recruiterhome" title="Home">
                  Home
                </Link>{" "}
                <i className="ti-angle-double-right" /> Add Job
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
                        placeholder="Designation"
                        name="designation"
                        value={jobdata.designation}
                        onChange={(e) => inputHandler(e)}
                        autoComplete="off"
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
                        placeholder="High School , Intermediate , Graduation , Master Degree"
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
                        jobPostHandler();
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



        <Recruiterfooter />
      </div>}
    </>
  );
}

export default Addjob;