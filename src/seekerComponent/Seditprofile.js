import React, { useEffect, useState } from 'react'
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom'
import SeekHeader from "./SeekHeader";
import Footer from '../Footer';
import { toast } from 'react-toastify';
import { Modal } from 'react-responsive-modal';

import Load from '../Load'
import RecHeader from "./SeekHeader";
import { useForm } from "react-hook-form";
import avtar from "../img/loginpic.png"
import { Country, State, City } from 'country-state-city';
import Seekerfooter from './Seekerfooter';
import Typewriter from 'typewriter-effect'
import 'react-responsive-modal/styles.css';
import Select from "react-select";
import Loader from '../Loader';
function Seditprofile() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate an API call with a delay of 3 seconds
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
  }, []);
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    callProfile();
    check();
  }, []);

  const [seekerData, setSeekerdata] = useState({
    js_name: "", js_gender: "", js_mno: "", js_email: "", js_quli: "", js_dob: "", js_skill: "",
    js_language: "", uni_detail: "", js_course_type: "", js_course_duration: "", js_expierience: "",
    js_exp_company: "", js_address: "", js_profile: ""
  });
  const navigate = useNavigate();
  const [accesstoken] = useState(localStorage.getItem('seekerToken'))

  const [inputdata, setInputdata] = useState('');
  const update2 = ({ name, value }) => {
    setSeekerdata({ ...seekerData, js_gender: value })
  }

  const genderOption = [
    { value: 'Male', label: "Male" },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ]
  const callProfile = async (e) => {
    // e.preventDefault();
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
        ...seekerData,
        js_name: data.js_name,
        js_gender: data.js_gender,
        js_mno: data.js_mno,
        js_email: data.js_email,
        js_quli: data.js_quli,
        js_dob: data.js_dob,
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
    e.preventDefault();
    setSeekerdata({
      ...seekerData,
      [e.target.name]: e.target.value
      // [e.target.name]: e.target.value
    })
  }
  const [image, setImage] = useState({ js_profile: "" });
  const profileImage = (e) => {
    e.preventDefault();

  }
  const profileUpdate = async (req, res) => {
    const configOption = {
      method: "put",
      body: JSON.stringify(seekerData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        credentials: "includes",
        'Authorization': `Bearer ${accesstoken}`
      },
    }

    const response = await fetch("https://jobshubback-19af.onrender.com/updateprofile", configOption)
    const result = await response.json();
    if (result.status === 201) {
      toast("Seeker Profile Update Success")
      navigate('/seekerhome')
    } else {
      toast.error("Seeker Profile is Not Update");
    }
  }

  const profile = async (e) => {
    setImage({ ...image, [e.target.name]: e.target.type == 'file' ? e.target.files[0] : e.target.value })
  }
  const profilepic = async (event, value) => {
    const selectedFile = event.target.files[0];
    const formdata = new FormData()
    formdata.append('js_profile', selectedFile)
    const configOption = {
      method: 'PUT',
      headers: {
        credentials: "includes",
        'Authorization': `Bearer ${accesstoken}`,
      },
      body: formdata
    }

    const response = await fetch('https://jobshubback-19af.onrender.com/updateimage', configOption)
    const result = await response.json();
    if (result.status === 201) {
      toast.success("Profile Picture Update")
      navigate('/seekerprofile')
    } else toast.error("Profile Picture not Update yet")
  }
  const mystyle = { cursor: "pointer", fontSize: "3rem" }

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const logout = async () => {
    localStorage.removeItem('seekerToken')
    navigate('/seekerlogin')
  }

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
  const [newpass, setNewpass] = useState("");
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

  return (
    <>
      {isLoading ? <Loader /> : <div>
        <SeekHeader />
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
                      .typeString("Profile Settings")
                      .pauseFor(2000)
                      .start()
                  }}

                /></h2>
                <p>
                  <Link to="/seekerhome" title="Home">
                    Home
                  </Link>{" "}
                  <i className="ti-angle-double-right" />
                  <Link to="/seekerprofile" title="Home">
                    Seeker Profile
                  </Link>{" "}
                  <i className="ti-angle-double-right" /> Upload profile
                </p>
              </div>
            </div>
          </div>
          {/* ======================= End Page Title ===================== */}
          {/* ================ Profile Settings ======================= */}
          <section className="padd-top-80 padd-bot-80">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div id="leftcol_item">
                    <div className="user_dashboard_pic">
                      {" "}
                      <label for="file" style={mystyle} onChange={profile}> <img src={seekerData.js_profile ? `https://jobshubback-19af.onrender.com/public/uploads1/seekerprofile/${seekerData.js_profile}` : avtar} />{" "}</label>
                      <input type="file" id="file" name="js_profile" style={{ display: 'none' }} onChange={(e, val) => profilepic(e, val)} />


                    </div>
                  </div>
                  <div className="dashboard_nav_item">
                    <ul>
                      <li className="">
                        <Link to="/seekerprofile">
                          <i className="login-icon ti-user" /> Seeker Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/seekerjobrestor">
                          <i className="login-icon ti-trash" /> Trash Apply Job
                        </Link>
                      </li>
                      <li className="active">
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

                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="profile_detail_block">
                    <form className="log-form" method='PUT' onSubmit={handleSubmit(profileUpdate)}>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label>Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="js_name"
                            placeholder="Your Full Name"
                            value={seekerData.js_name}


                            onChange={updateHandler}
                          />
                          {errors.js_name && <p className='err'>Please check the First Name</p>}

                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="text"
                            className="form-control"
                            name="js_email"
                            placeholder="mail@example.com"
                            value={seekerData.js_email}

                            onChange={updateHandler}
                          />
                          {errors.js_email && <p className='err'>Please check the Email</p>}

                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label>Phone</label>
                          <input type="text" className="form-control" name="js_mno" maxLength={13} placeholder="123 214 13247" value={seekerData.js_mno} onChange={updateHandler}

                          />
                          {errors.js_mno && <p className='err'>Please check the Password</p>}

                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            className="form-control"
                            name="js_address"
                            placeholder="Address"
                            value={seekerData.js_address}

                            onChange={updateHandler}
                          />
                          {errors.js_address && <p className='err'>Please check the Password</p>}

                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label>Language</label>
                          <input
                            type="text"
                            className="form-control"
                            name="js_language"
                            placeholder="Gujarati Hindi English...."
                            value={seekerData.js_language}

                            onChange={updateHandler}
                          />
                          {errors.js_language && <p className='err'>Please check the Password</p>}

                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <label>Gender</label>
                        <Select
                          className="wide "
                          name="gender"

                          onChange={({ value }) => update2({ name: 'gender', value })}
                          options={genderOption}
                          value={{ value: seekerData.js_gender, label: seekerData.js_gender }}
                        />
                      </div>


                      {/**/}<div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label>Date Of Birth</label>
                          <input
                            type="date"
                            id="js_dob"
                            name='js_dob'
                            className="form-control"
                            placeholder="YYYY/MM/DD"
                            data-max-day={Date.now()}
                            value={seekerData.js_dob}

                            onChange={updateHandler}
                          // readOnly=""
                          />
                          {errors.js_dob && <p className='err'>Please check the Password</p>}

                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label>Education</label>
                          <input
                            type="text"
                            className="form-control"
                            name="js_quli"
                            placeholder="10th 12th B.com BCA BBA CA"
                            value={seekerData.js_quli}

                            onChange={updateHandler}
                          />
                          {errors.js_quli && <p className='err'>Please check the Password</p>}

                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label>Specialization Skill</label>
                          <input
                            type="text"
                            className="form-control"
                            name="js_skill"
                            placeholder="According to Your Education"
                            value={seekerData.js_skill}

                            onChange={updateHandler}
                          />
                          {errors.js_skill && <p className='err'>Please check the Password</p>}

                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label>University Detail</label>
                          <input
                            type="text"
                            className="form-control"
                            name="uni_detail"
                            placeholder="Eg. National Institute of Technology (NIT)"
                            value={seekerData.uni_detail}

                            onChange={updateHandler}
                          />
                          {errors.uni_detail && <p className='err'>Please check the Password</p>}

                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label>Course Type</label>
                          <input
                            type="text"
                            className="form-control"
                            name="js_course_type"
                            placeholder="Eg. Full Time,Part Time, Distance Learning"
                            value={seekerData.js_course_type}

                            onChange={updateHandler}
                          />
                          {errors.js_course_type && <p className='err'>Please check the Password</p>}


                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label>Experience</label>
                          <input
                            type="text"
                            className="form-control"
                            name="js_expierience"
                            placeholder="1,2,3,..etc"
                            value={seekerData.js_expierience}

                            onChange={updateHandler}
                            autoComplete='off'
                          />
                          {errors.js_expierience && <p className='err'>Please check the Password</p>}

                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label>Name of Company Experience</label>
                          <input
                            type="text"
                            className="form-control"
                            name="js_exp_company"
                            placeholder="Tech Mehindra like"
                            value={seekerData.js_exp_company}

                            onChange={updateHandler}
                          />
                          {errors.js_exp_company && <p className='err'>Please check the Password</p>}

                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="col-md-6 padd-top-6 text-center">
                        {" "}
                        <button type='button' className="btn btn-m them-btn  full-width" onClick={() => { navigate('/seekerprofile') }} >
                          Cancle
                        </button>
                      </div>
                      <div className="col-md-6 padd-top-6 text-center">
                        {" "}
                        <button
                          type="submit"
                          className="btn theme-btn btn-m full-width"
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section >
          {/* ================ End Profile Settings ======================= */}
        </>
        <Seekerfooter />
      </div>}
    </>
  )
}

export default Seditprofile