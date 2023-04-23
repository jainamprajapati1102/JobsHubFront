import React, { useEffect, useState } from "react";
import RecHeader from "./RecHeader";
import Footer from "../Footer";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Recruiterfooter from "./Recruiterfooter";
import Typewriter from 'typewriter-effect'
import Loader from "../Loader";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
function Addjob() {

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

  const check = async (req, res) => {
    const config = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        credentials: "includes",
        'Authorization': `Bearer ${accesstoken}`
      }
    }
    const response = await fetch('https://jobshubback-19af.onrender.com/checkpayment', config);
    const result = await response.json()
    if (result.status == 1) {
      navigate('/payment')
    }
  }

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
    description: "",
    designation: ""
  });

  const requestOptions = {
    method: 'GET',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      credentials: "includes",
      'Authorization': `Bearer ${accesstoken}`
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

  const selectQuali = ({ name, value }) => {
    setjobdata({
      ...jobdata,
      [name]: value
    })
  }
  const [show, setShow] = useState(true);
  const alshow = () => {
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      );
    }
  }

  const jobPostHandler = async () => {
    if (jobdata.jobtitle && jobdata.gender && jobdata.degree && jobdata.salaryrange && jobdata.vacancy && jobdata.experience && jobdata.jobtype && jobdata.qualification && jobdata.skill && jobdata.languageknown && jobdata.interviewtype && jobdata.description && jobdata.designation) {
      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "includes",
          'Authorization': `Bearer ${accesstoken}`
        },
        body: JSON.stringify(jobdata),
      };
      const response = await fetch('https://jobshubback-19af.onrender.com/jobpost', requestOptions);
      const result = await response.json();
      if (result.status === 200) {
        toast.success("job post successfully");
        navigate("/Managejob");
      } else if (result.status === 400) {
        toast.error(result.msg)
        navigate('/payment')
      } else if (result.status === 101) {
        toast.error(result.msg)
        navigate("/editprofile")
      } else if (result.status === 100) {
        alshow();
        toast.error(result.msg)
        navigate("/payment")
      } else {
        toast.error("Try After Some Time")
      }

    } else {
      toast.error("All Fields Required")
    }
  };

  /* **** gender option ****  */
  const genderOption = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Both', label: 'Both' },
  ]

  /* **** salary option ****  */
  const salaryoption = [
    { value: '5000 - 15,000', label: '5000 - 15,000' },
    { value: '15,001 - 30,000', label: '15,001 - 30,000' },
    { value: '30,001 - 50,000', label: '30,001 - 50,000' },
    { value: '50,001 - 70,000', label: '50,001 - 70,000' },
    { value: '70,001 - 90,000', label: '70,001 - 90,000' },
    { value: '90,001 - 1,10,000', label: '90,001 - 1,10,000' },
  ]

  /* **** experinnce option ****  */
  const experienceOption = [
    { value: '0  - 1 years ', label: '0  - 1 years ' },
    { value: '1 years - 3 years', label: '1 years - 3 years' },
    { value: '3 years - 5 years', label: '3 years - 5 years' },
    { value: '5 years - a bove ', label: '5 years - above' },
  ]
  const qualificationOption = [
    { value: 'High School', label: 'High School' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Graduation', label: 'Graduation' },
    { value: 'Master Degree', label: 'Master Degree' },
    { value: 'M.Phil', label: 'M.Phil' },
  ]

  /* **** job option ****  */
  const jobtypeOption = [

    { value: 'Full Time', label: 'Full Time' },
    { value: 'Part Time', label: 'Part Time' },
    { value: 'Contract Base', label: 'Contract Base' },
    { value: 'WorkFromHome', label: 'WorkFromHome' },
    { value: 'Freelancer', label: 'Freelancer' },
    { value: 'Intership', label: 'Intership' },
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
                      <div className="form-group">
                        <label>Gender</label>
                        <Select
                          className="wide "
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
                      <Select
                        className="wide form-control"
                        name="jobtype"
                        onChange={({ value }) => selectQuali({ name: 'qualification', value })}
                        options={qualificationOption}
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