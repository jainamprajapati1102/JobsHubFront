import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Seekerfooter from './Seekerfooter';
import SeekHeader from "./SeekHeader";
import Typewriter from 'typewriter-effect'
import loadjs from 'loadjs';
import Select from "react-select";
import { Modal } from 'react-responsive-modal';
import pic from "../img/company_logo_1.png"
import 'react-responsive-modal/styles.css';
import { toast } from 'react-toastify';
import Loader from '../Loader';
function Searchjob() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate an API call with a delay of 3 seconds
    check();
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
  }, []);

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

    const response = await fetch('https://jobshubback-19af.onrender.com/checkprofile', configOption);
    const result = await response.json();
    if (result.status !== 0) {
    } else {
      toast.error(result.msg);
      navigate('/seditprofile');

    }
  }

  const [seekerData, setSeekerdata] = useState([]);
  const [search, setSearch] = useState('')
  const [gender, setgender] = useState('')
  const [sort, setSort] = useState('')
  const [salary, setSalary] = useState('');
  const [qualification, setqualification] = useState('');
  const [apply, setApply] = useState({ js_name: '', js_email: '', js_mno: '', resume: '' });
  const navigate = useNavigate();
  const [accesstoken] = useState(localStorage.getItem('seekerToken'));
  const [accesstoken1] = useState(localStorage.getItem('recruiterToken'));
  const [jobtype, setJobtype] = useState('');
  // const { id } = useParams();
  useEffect(() => {
    getpostedjob();
    Profile();

    // fetchcategory();
  }, [search, gender, jobtype, qualification, salary, sort]);

  const timeOption = [
    { value: '1', label: 'Most Recent' },
    { value: '-1', label: 'Old' },
  ]

  const getpostedjob = async () => {
    try {
      const res = await fetch(`https://jobshubback-19af.onrender.com/getjobpost?search=${search}&gender=${gender}&jobtype=${jobtype}&qualification=${qualification}&salaryrange=${salary}&sort=${JSON.stringify(sort)}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${accesstoken}`
        }
      });
      const data = await res.json();
      setSeekerdata(data);

    } catch (err) {

    }
  }

  const Profile = async (e) => {
    try {
      const token = JSON.stringify(localStorage.getItem('seekerToken'));
      const res = await fetch('https://jobshubback-19af.onrender.com/getseeker', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "includes",
          'Authorization': `Bearer ${accesstoken}`,
        }
      });
      const data = await res.json();
      setApply({
        ...apply,
        js_name: data.js_name,
        js_mno: data.js_mno,
        js_email: data.js_email,

      });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      navigate('/seekerlogin')
    }
  }

  const applyHandle = (_id) => {
  }

  const [categorydata, setCategorydata] = useState();
  const selectHandler = ({ value }) => {
    setSort({ sort: value.value })
  }

  // apply job 
  const inputHandle = (e) => {
    setApply({
      ...apply,
      [e.target.name]: e.target.type == 'file' ? e.target.files[0] : e.target.value
    })
  }

  const [rec, setRec] = useState();
  const jobinput = (item, e) => {
    // e.preventDefault();
    navigate('/apply', { state: item })
  }
  const detailinput = (item, e) => {
    // e.preventDefault();
    navigate('/jobdetail', { state: item })
  }

  const [cv, setCv] = useState({ resume: "" });
  const resumeinputHandle = (event, val) => {
    setCv({
      ...cv, resume: event.target.files[0]
    })
  }
  const applyFrom = async () => {
    try {
      const data = new FormData();
      data.append('js_name', apply.js_name);
      data.append('js_email', apply.js_email);
      data.append('js_mno', apply.js_mno);
      data.append('resume', cv.resume);
      data.append('rec_id', rec.recid);

      const confiOption = {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "includes",
          'Authorization': `Bearer ${accesstoken}`,
        },
        body: data,
      };
      const response = await fetch(`https://jobshubback-19af.onrender.com/applyjob`, confiOption);
      const result = await response.json();
      if (result.status === 201) {
        toast.success('Job Apply ');
        navigate('/seekerhome')
      } else {
        toast.error('Job Not Apply ')
      }
    } catch (error) {
    }
  }

  const [open, setOpen] = useState(false);

  const onOpenModal = (id) => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const jobtypeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setJobtype({
      [name]: value
    })
  }

  const clears = () => {
    setSearch('')
    setgender('')
    setSort('')
    setgender('')
    setqualification('')
  }
  return (
    <>
      {
        isLoading ? <Loader /> : <div>
          <>
            <Modal open={open} onClose={onCloseModal} center>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: 20
                }}
              >
                <span>
                  <h3>APPLY HERE...</h3>
                </span>
                <span></span>
              </div>
              <hr />
              <div className="scr" style={{ height: "350px", overflow: "auto" }}>
                <div className="profile_detail_block">
                  <div className="text-center mrg-bot-20">
                  </div>
                  <form method='post'>
                    <div className="col-md-6 col-sm-6">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"

                        value={apply.js_name}
                        placeholder="Name"
                        name="js_name"
                        onChange={inputHandle}
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <label>Email</label>
                      <input
                        type="email"
                        name='js_email'
                        className="form-control"
                        value={apply.js_email}
                        placeholder="Email"
                        onChange={inputHandle}
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <label>Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone No"
                        name="js_mno"
                        value={apply.js_mno}
                        onChange={inputHandle}
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <label>Upload CV</label>
                      <div className="custom-file-upload">
                        <input
                          type="file"
                          id="file"
                          name="resume"
                          onChange={(e, val) => resumeinputHandle(e, val)}
                        />
                      </div>
                    </div>

                    <div className="col-md-12 text-center">
                      <button
                        onClick={() => {
                          applyFrom();
                          onCloseModal();
                        }}
                        type="button"
                        className="btn theme-btn btn-m full-width"
                      >
                        APPLY JOB
                      </button>
                    </div>
                    <div className="clearfix" />
                  </form>
                </div>
              </div>
            </Modal>
            <SeekHeader />
            <>
              {/* ======================= Page Title ===================== */}
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
                          .typeString("Browse Job")
                          .pauseFor(2000)
                          .start()
                      }}

                    /></h2>
                    <p>
                      <Link to="/seekerhome" title="Home">
                        Home
                      </Link>{" "}
                      <i className="ti-angle-double-right" /> Browse Job
                    </p>
                  </div>
                </div>
              </div>
              {/* ======================= End Page Title ===================== */}
              {/* ====================== Start Job Detail 2 ================ */}
              <section className="padd-top-80 padd-bot-80">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3 col-sm-5">
                      <button className="btn-job light-gray-btn" onClick={clears}>Clear</button>
                      <div className="widget-boxed padd-bot-0">
                        <div className="widget-boxed-header">
                          <h4>Offerd Salary</h4>
                        </div>
                        <div className="widget-boxed-body">
                          <div className="side-list no-border">
                            <ul>
                              <li>
                                {" "}
                                <span className="checkbox">
                                  <input type="radio" id={1} className='custom-checkbox' name='salaryrange' value={'5000 - 15,000'} onChange={(e) => setSalary(e.target.value)} />
                                  <label htmlFor={1} />
                                </span>{" "}
                                5000 - 15,000 <span className="pull-right"> </span>
                              </li>
                              <li>
                                {" "}
                                <span className="checkbox">
                                  <input type="radio" name='salaryrange' onChange={(e) => setSalary(e.target.value)} value={'15,001 - 30,000'} id={2} />
                                  <label htmlFor={2} />
                                </span>{" "}
                                15,001 - 30,000 <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="checkbox">
                                  <input type="radio" name='salaryrange' onChange={(e) => setSalary(e.target.value)} value={'30,001 - 50,000'} id={3} />
                                  <label htmlFor={3} />
                                </span>{" "}
                                30,001 - 50,000 <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="checkbox">
                                  <input type="radio" name='salaryrange' onChange={(e) => setSalary(e.target.value)} value={'50,001 - 70,000'} id={4} />
                                  <label htmlFor={4} />
                                </span>{" "}
                                50,001 - 70,000 <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="checkbox">
                                  <input type="radio" name='salaryrange' onChange={(e) => setSalary(e.target.value)} value={'70,001 - 90,000'} id={5} />
                                  <label htmlFor={5} />
                                </span>{" "}
                                70,001 - 90,000 <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="checkbox">
                                  <input type="radio" name='salaryrange' onChange={(e) => setSalary(e.target.value)} value={'90,001 - 1,10,000'} id={6} />
                                  <label htmlFor={6} />
                                </span>{" "}
                                90,001 - 1,10,000 <span className="pull-right"></span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="widget-boxed padd-bot-0">
                        <div className="widget-boxed-header">
                          <h4>Job Type</h4>
                        </div>
                        <div className="widget-boxed-body">
                          <div className="side-list no-border">
                            <ul>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="All Jobs" onChange={(e) => setJobtype("")} id="j1" />
                                  <label htmlFor="j1" />
                                </span>{" "}
                                All Jobs <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="Full Time" onChange={(e) => setJobtype(e.target.value)} id="a1" />
                                  <label htmlFor="a1" />
                                </span>{" "}
                                Full Time <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="Part Time" onChange={(e) => setJobtype(e.target.value)} id="b1" />
                                  <label htmlFor="b1" />
                                </span>{" "}
                                Part Time <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="Internship" onChange={(e) => setJobtype(e.target.value)} id="c1" />
                                  <label htmlFor="c1" />
                                </span>{" "}
                                Internship <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="Freelancer" onChange={(e) => setJobtype(e.target.value)} id="d1" />
                                  <label htmlFor="d1" />
                                </span>{" "}
                                Freelancer <span className="pull-right">{seekerData.jobtype == "Freelancer" ? seekerData.jobtype.length : ""}</span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="Contract Base" onChange={(e) => setJobtype(e.target.value)} id="e1" />
                                  <label htmlFor="e1" />
                                </span>{" "}
                                Contract Base <span className="pull-right"> </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="widget-boxed padd-bot-0">
                        <div className="widget-boxed-header">
                          <h4>qualification</h4>
                        </div>
                        <div className="widget-boxed-body">
                          <div className="side-list no-border">
                            <ul>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="qualification" value="All" onChange={(e) => setqualification("")} id="q1" />
                                  <label htmlFor="q1" />
                                </span>{" "}
                                All qualification <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="qualification" value="High School" onChange={(e) => setqualification(e.target.value)} id="q2" />
                                  <label htmlFor="q2" />
                                </span>{" "}
                                High School <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="qualification" value="Intermediate" onChange={(e) => setqualification(e.target.value)} id="q3" />
                                  <label htmlFor="q3" />
                                </span>{" "}
                                Intermediate <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="qualification" value="Graduation" onChange={(e) => setqualification(e.target.value)} id="q4" />
                                  <label htmlFor="q4" />
                                </span>{" "}
                                Graduation<span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="qualification" value="Master Degree" onChange={(e) => setqualification(e.target.value)} id="q5" />
                                  <label htmlFor="q5" />
                                </span>{" "}
                                Master Degree <span className="pull-right"></span>
                              </li>

                            </ul>
                          </div>
                        </div>
                      </div>

                    </div>



                    {/* Start Job List */}
                    <div className="col-md-9 col-sm-7">
                      <div className="row mrg-bot-20">
                        <form>
                          <fieldset className="utf_home_form_one" style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className="col-md-12 col-sm-12 padd-0">
                              <input
                                type="text"
                                className="form-control "
                                placeholder="Search Keywords..."
                                onChange={(e) => setSearch(e.target.value)}
                              />
                            </div>
                          </fieldset>
                        </form>
                        <div className="col-md-4 col-sm-12 col-xs-12 browse_job_tlt">

                          <h4 className="job_vacancie">{seekerData?.length} Jobs &amp; Vacancies</h4>
                        </div>

                        <div className="col-md-8 col-sm-12 col-xs-12">
                          <ul style={{ display: "flex", position: "relative", top: "29px", left: "50%", paddingBottom: "15px" }}>

                            <li style={{ listStyle: "none", margin: "10px" }}>
                              <span className="custom-radio">
                                <input type="radio" name="gender" style={{ listStyleType: "none" }} value="Male" onChange={(e) => setgender(e.target.value)} id="g1" />
                                <label htmlFor="g1" />
                              </span>
                              Male
                            </li>
                            <li style={{ listStyle: "none", margin: "10px" }}>
                              <span className="custom-radio">
                                <input type="radio" name="gender" style={{ listStyleType: "none" }} value="Female" onChange={(e) => setgender(e.target.value)} id="g2" />
                                <label htmlFor="g2" />
                              </span>
                              Female
                            </li>
                            <li style={{ listStyle: "none", margin: "10px" }}>
                              <span className="custom-radio">
                                <input type="radio" name="gender" style={{ listStyleType: "none" }} value="Both" onChange={(e) => setgender(e.target.value)} id="g3" />
                                <label htmlFor="g3" />
                              </span>
                              Both
                            </li>
                          </ul>

                        </div>

                      </div>
                      {

                        seekerData?.map((list, index) => (

                          <div className="job-verticle-list">
                            <div className="vertical-job-card">
                              <div className="vertical-job-header">
                                <div className="vrt-job-cmp-logo">
                                  {" "}
                                  <a href="#">
                                    <img src={list?.postedby?.cmp_logo ? `https://jobshubback-19af.onrender.com/public/uploads1/companylogo/${list?.postedby?.cmp_logo}` : pic} className="img-responsive" />
                                  </a>{" "}
                                </div>
                                <h4>
                                  {list?.jobtitle}
                                </h4>
                                <span className="com-tagline">{list?.postedby?.designation}</span>{" "}
                                <span className="pull-right vacancy-no">
                                  No. <span className="v-count">{index + 1}</span>
                                </span>
                              </div>
                              <div className="vertical-job-body">
                                <div className="row">
                                  <div className="col-md-9 col-sm-12 col-xs-12">
                                    <ul className="can-skils">
                                      <li>
                                        <strong>Company Name: </strong>{list?.postedby?.cmp_name}
                                      </li>
                                      <li>
                                        <strong>Graduation: </strong>{list?.qualification}
                                      </li>
                                      <li>
                                        <strong>Job Type: </strong>{list?.jobtype}
                                      </li>

                                      <li>
                                        <strong>Experience: </strong>{list.experience}
                                      </li>
                                      <li>
                                        <strong>Gender: </strong>{list.gender}
                                      </li>
                                      <li>
                                        <strong>Location: </strong>{list?.postedby?.cmp_address}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-3 col-sm-12 col-xs-12">
                                    <div className="vrt-job-act">
                                      <button
                                        className="btn-job theme-btn job-apply"
                                        onClick={(e) => jobinput(list?.postedby?._id)}
                                      >
                                        Apply Now
                                      </button>
                                      <button
                                        className="btn-job light-gray-btn"
                                        onClick={(e) => detailinput(list._id)}
                                      >
                                        Job Detail
                                      </button>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }


                      <div className="clearfix" />
                      {seekerData.length > 10 ? <div className="utf_flexbox_area padd-0">
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
                      </div> : ""}
                    </div>
                  </div>
                  {/* End Row */}
                </div>
              </section>
              {/* ====================== End Job Detail 2 ================ */}
            </>
            <Seekerfooter />
          </>
        </div >
      }
    </>
  )
}

export default Searchjob