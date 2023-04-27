
import React, { useEffect, useState } from 'react'
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom'
import avatar from "../img/loginpic.png"
import { toast } from 'react-toastify';
import Load from '../Load'
import SeekHeader from './SeekHeader'
import moment from 'moment';
import { Country, State, City } from 'country-state-city';
import Seekerfooter from './Seekerfooter';
import Typewriter from 'typewriter-effect'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Loader from '../Loader';
function Seekerprofile() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    callProfile();
    getlocaltion();
    // simulate an API call with a delay of 3 seconds
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
  }, []);

  const [seekerData, setSeekerdata] = useState({
    js_name: "", js_gender: "", js_mno: "", js_email: "", js_quli: "", js_dob: "", js_skill: "",
    js_language: "", uni_detail: "", js_course_type: "", js_course_duration: "", js_expierience: "",
    js_exp_company: "", js_address: "", js_profile: ""
  });
  const navigate = useNavigate();
  const [accesstoken] = useState(localStorage.getItem('seekerToken'))
  const callProfile = async () => {
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
      setSeekerdata({
        ...seekerData, js_name: data.js_name,
        js_gender: data.js_gender,
        js_mno: data.js_mno,
        js_email: data.js_email,
        js_quli: data.js_quli,
        js_dob: moment(data.js_dob).format("DD-MM-YYYY"),
        js_skill: data.js_skill,
        js_language: data.js_language,
        uni_detail: data.uni_detail,
        js_course_type: data.js_course_type,
        js_course_duration: data.js_course_duration,
        js_expierience: data.js_expierience,
        js_exp_company: data.js_exp_company,
        js_address: data.js_address,
        js_profile: data.js_profile
      });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      navigate('/seekerlogin')
    }
  }

  const updateHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setSeekerdata({
      ...seekerData,
      [name]: value
    })
  }
  const profileUpdate = async (e) => {
    const confiOption = {
      method: "put", body: JSON.stringify(seekerData), headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        credentials: "includes",
        'Authorization': `Bearer ${accesstoken}`,
      }
    };

    const response = await fetch(`https://jobshubback-19af.onrender.com/updateprofile`, confiOption);
    const result = await response.json();

    if (result.status === 200) {
      toast.success("Profile Updated");
      navigate('/seekerhome');
    } else {
      toast.error("Seeker Is Not Exist");
    }
  }
  const [country, setCountry] = useState([]);
  const [state, setStates] = useState('');
  const [city, setCity] = useState('');
  const getlocaltion = async () => {
    const rescountry = Country.getAllCountries();
    const resstate = State.getAllStates();
    const rescity = City.getAllCities();

    setCountry(rescountry);
  }

  const logout = async () => {

    localStorage.removeItem('seekerToken')
    navigate('/seekerlogin')
  }

  // const navigate = useNavigate();
  const [newpass, setNewpass] = useState("");
  // const [accesstoken] = useState(localStorage.getItem('seekerToken'));
  const inputhandle = (e) => {
    setNewpass({ ...newpass, [e.target.name]: e.target.value })
  }
  const changepass = async () => {
    if (newpass.oldpwd && newpass.updatedpass && newpass.updateconpass) {

      const configOPtion = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${accesstoken}`,
        },
        body: JSON.stringify(newpass)
      }

      const response = await fetch('https://jobshubback-19af.onrender.com/changepass', configOPtion)
      const result = await response.json()
      if (result.status === 201) {
        toast.success("Your Password Successfully Change")
        logout()
      } else {
        if (result.status === 401) {
          toast.error(`${result.err}`)
        }
      }
    } else {
      toast.error("All Feilds Required")
    }
  }
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);



  const deleteaccount = async () => {
    const configOPtion = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        credentials: "includes",
        'Authorization': `Bearer ${accesstoken}`,
      },
    }
    const response = await fetch('https://jobshubback-19af.onrender.com/sekdeleteaccount', configOPtion)
    const result = await response.json();
    if (result.status === 201) {
      toast.success("Your Account Deleted")
      localStorage.removeItem('seekerToken');
      navigate('/seekersignup')
    }
  }

  return (
    <>

      {isLoading ? <Loader /> : <div>
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
              <h3>Change Your Password...</h3>
            </span>
            <span></span>
          </div>
          <hr />
          <div className="scr" style={{ height: "450px", overflow: "auto" }}>
            <div className="col-md-12">
              <div className="profile_detail_block">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label>Old Password</label>
                    <input
                      type="text"
                      name='oldpwd'
                      onChange={inputhandle}
                      className="form-control"
                      placeholder="***********"
                      autoComplete='off'
                    />
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label>New Password</label>
                    <input
                      type="password"
                      name='updatedpass'
                      onChange={inputhandle}
                      className="form-control"
                      placeholder="***********"
                    />
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      name='updateconpass'
                      onChange={inputhandle}
                      className="form-control"
                      placeholder="***********"
                    />
                  </div>
                </div>
                <div className="clearfix" />
                <div className="col-md-12 padd-top-10 text-center">
                  {" "}
                  <button
                    type="button"
                    className="btn theme-btn btn-m full-width"
                    onClick={changepass}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <SeekHeader />
        <>
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
                      .typeString("Seeker Profile")
                      .pauseFor(2000)
                      .start()
                  }}

                /></h2>
                <p>
                  <Link to="/seekerhome" title="Home">
                    Home
                  </Link>{" "}

                  <i className="ti-angle-double-right" /> Seeker Profile
                </p>
              </div>
            </div>
          </div>
          {/* ======================= End Page Title ===================== */}
          {/* ======================= Start Create Company ===================== */}
          <section className="padd-top-80 padd-bot-80">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div id="leftcol_item">
                    <div className="user_dashboard_pic">
                      {" "}
                      {
                        <img src={seekerData.js_profile ? `https://jobshubback-19af.onrender.com/public/uploads1/seekerprofile/${seekerData.js_profile}` : avatar} />
                      }

                      <span className="user-photo-action">{seekerData.js_name}</span>{" "}
                    </div>
                  </div>
                  <div className="dashboard_nav_item">
                    <ul>
                      <li className="active">
                        <Link to="/seekerprofile">
                          <i className="login-icon ti-user" /> Seeker Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/seekerjobrestor">
                          <i className="login-icon ti-trash" /> Trash Apply Job
                        </Link>
                      </li>
                      <li >
                        <Link to="/seditprofile">
                          <i className="login-icon ti-user" /> Edit Profile
                        </Link>
                      </li>
                      <li>
                        <label for="chpass">

                          <i className="login-icon ti-key" /> Change Password
                        </label>

                        <button onClick={onOpenModal} style={{ display: "none" }} id='chpass'>
                          hh
                        </button>
                      </li>

                      <button className="btn btn-primary btn-lg" onClick={logout}>
                        <i className="login-icon ti-power-off" /> Logout
                      </button>
                      <button className="btn btn-danger btn-lg" onClick={deleteaccount}>
                        <i className=" ti-trash" /> Delete Account
                      </button>

                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <h3 className="background"><span>User Profile</span></h3>
                  <div className="emp-des">
                    <h3>{seekerData.js_name}</h3>


                    <ul className="employer_detail_item">
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Email
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {seekerData.js_email}
                        </div>
                      </li>
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Mob No.
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {seekerData.js_mno}
                        </div>
                      </li>
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Address
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {seekerData.js_address}
                        </div>
                      </li>
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Gender
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {seekerData.js_gender}
                        </div>
                      </li>
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Language
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {seekerData.js_language}
                        </div>
                      </li>

                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Date of Birth
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {seekerData.js_dob}
                        </div>
                      </li>
                    </ul>

                  </div>



                  <div className="emp-des">
                    <h3 className="background"><span>Education</span></h3>
                    <ul className="employer_detail_item">
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          University or School Name
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {seekerData.uni_detail}
                        </div>
                      </li>

                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Skills
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {seekerData.js_skill}
                        </div>
                      </li>
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Education
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {seekerData.js_quli}
                        </div>
                      </li>
                      <li>
                        <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                          Learning Type
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          {seekerData.js_course_type}
                        </div>
                      </li>
                      {/*<li>
                      <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                        Learning Duration
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12">
                        {seekerData.js_course_duration}
                      </div>
                    </li>*/}


                    </ul>
                  </div>


                  <div className="emp-des">
                    <h3 className="background"><span>Experience</span></h3>
                    <div className="row">
                      <ul className="employer_detail_item">

                        <li>
                          <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                            Years of Experience
                          </div>
                          <div className="col-md-4 col-sm-4 col-xs-12">
                            {seekerData.js_expierience}
                          </div>
                        </li>
                        <li>
                          <div className="col-md-4 col-sm-4 col-xs-12 detail_tag">
                            Last Company Name
                          </div>
                          <div className="col-md-4 col-sm-4 col-xs-12">
                            {seekerData.js_exp_company}
                          </div>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ====================== End Create Company ================ */}
        </>
        <Seekerfooter />
        <Load />
      </div >}
    </>
  )
}

export default Seekerprofile