import React from 'react'
import RecHeader from "./RecHeader";
import 'react-responsive-modal/styles.css';

import { Form, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
import loadjs from 'loadjs';
import moment from 'moment'
// import { Country, State, City } from 'country-state-city';
import { State, City } from 'indian-states-cities'
import { toast } from 'react-toastify';
import Recruiterfooter from "./Recruiterfooter";
import { Modal } from 'react-responsive-modal';
import Load from '../Load';
import Loader from '../Loader';
import avatar from "../img/loginpic.png";
import axios from 'axios';
import { saveAs } from 'file-saver';

function ManageProfile() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {


    // simulate an API call with a delay of 3 seconds
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
  }, []);

  const navigate = useNavigate();
  const [accesstoken] = useState(localStorage.getItem("recruiterToken"));

  useEffect(() => {
    console.log("loading")
    // getlocaltion();
    fetchCompanyData();
  }, [])

  const [inputdata, setInputdata] = useState({
    cmp_name: "",
    cmp_owner: "",
    landline: "",
    websitelink: "",
    zipcode: "",
    country: "",
    state: "",
    city: "",
    employess: "",
    worktime: "",
    cmp_address: "",
    google: "",
    twitter: "",
    linkdin: "",
    esta_date: "",
    cmp_email: "",
    rec_mno: ""
  });

  const fetchCompanyData = async () => {
    const response = await fetch('http://localhost:5000/getrecruiter', {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        credentials: "includes",
        'Authorization': `Bearer ${accesstoken}`,
      }
    });

    // const response = await fetch('http://localhost:5000/getOwndata', requestOptions);
    const data = await response.json();
    console.log(`cmp data :- ${data}`)
    setInputdata({
      ...inputdata,
      cmp_name: data.cmp_name,
      cmp_owner: data.cmp_owner,
      landline: data.landline,
      cmp_logo: data.cmp_logo,
      websitelink: data.websitelink,
      zipcode: data.zipcode,
      country: data.country,
      state: data.state,
      city: data.city,
      employess: data.employess,
      worktime: data.worktime,
      cmp_address: data.cmp_address,
      google: data.google,
      twitter: data.twitter,
      linkdin: data.linkdin,
      esta_date: data.esta_date,
      cmp_email: data.cmp_email,
      rec_mno: data.rec_mno
    });
  }


  // const [state, setStates] = useState('');
  // const [city, setCity] = useState('');
  // const getlocaltion = async () => {

  //   const resstate = State.allStates();
  //   console.log(`Indian state :--->${resstate}`)
  //   const rescity = City.allcities()
  //   const statelist = [];
  //   // resstate.map((item) => { statelist.push({value:}) })
  //   setCountry(rescountry);
  //   setStates(resstate);
  //   setCity(rescity);
  // }

  // getlocaltion();

  // const navigate = useNavigate();
  const [newpass, setNewpass] = useState("");
  // const [accesstoken] = useState(localStorage.getItem('recruiterToken'));
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

      const response = await fetch('http://localhost:5000/recchangepass', configOPtion)
      const result = await response.json()
      console.log(`---->${result.status}`)
      if (result.status === 201) {
        toast.success("Your Password Successfully Change")
        logout()
      } else {
        if (result.status === 401) {
          console.log(`Aa add kravani 6 error ma :--->${result.err}`)
          toast.error(`${result.err}`)
        }
      }
    } else {
      toast.error("All Feilds Required")
    }
  }

  const logout = async () => {
    localStorage.removeItem('recruiterToken')
    navigate('/recruiterlogin')
  }

  const downloadReceipt = () => {
    console.log("token from down load ===>", accesstoken)
    axios.post('http://localhost:5000/createreceipt', {
      headers: {
        'Authorization': `Bearer ${accesstoken}`,
      }
    })
      .then(() => axios.get('https://localhost:5000/downloadreceipt',
        { responseType: 'blob' })).then((res) => {
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
          saveAs(pdfBlob, `receipt.pdf`)
        })
  }

  const deleteaccount = async () => {
    const configOPtion = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        credentials: "includes",
        'Authorization': `Bearer ${accesstoken}`,
      }
    }

    const response = await fetch('http://localhost:5000/recdeleteaccount', configOPtion)
    const result = await response.json();
    if (result.status === 201) {
      navigate('/recruiterlogin')
    }
  }

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      {isLoading ? <Loader /> : <div>
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
                <h3>Change Password...</h3>
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
          <Load />
          <RecHeader />
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
                        .typeString("Recruiter Profile")
                        .pauseFor(2000)
                        .start()
                    }}

                  /></h2>
                  <p>
                    <Link to="/recruiterhome" title="Home">
                      Home
                    </Link>{" "}
                    <i className="ti-angle-double-right" /> Company Profile
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
                        <img src={inputdata.cmp_logo ? `http://localhost:5000/public/uploads1/companylogo/${inputdata.cmp_logo}` : avatar} alt="jainam" />
                        {" "}
                      </div>
                    </div>
                    <div className="dashboard_nav_item">
                      <ul>
                        <li className="active">
                          <Link to="/editprofile">
                            <i className="login-icon ti-user" />  Profile
                          </Link>
                        </li>
                        <li className="">
                          <Link to="/editprofile">
                            <i className="login-icon ti-pencil-alt" /> Edit Profile
                          </Link>
                        </li>
                        {
                          /* <li >
                                                  <Link to="/notification">
                                                    <i className="login-icon ti-bell" /> Notifications
                                                  </Link>
                                                </li> */
                        }


                        <li>
                          <label for="chpass">

                            <i className="login-icon ti-key" /> Change Password
                          </label>

                          <button onClick={onOpenModal} style={{ display: "none" }} id='chpass'>
                            hh
                          </button>
                        </li>
                        <li>
                          <Link to="/recruiterjobrestor">
                            <i className="login-icon ti-trash" /> Job Post Trash
                          </Link>
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
                    <div className="emp-des">
                      <h3 class="background"><span>Company Details</span></h3>
                      <h3>{inputdata.cmp_name}</h3>


                      <ul className="employer_detail_item">
                        <li>
                          <div className="col-md-3 col-sm-3 col-xs-12 detail_tag">
                            Company Email
                          </div>
                          <div className="col-md-6 col-sm-4 col-xs-12">
                            {inputdata.cmp_email}
                          </div>
                        </li>

                        {/*<li>
                          <div className="col-md-3 col-sm-3 col-xs-12 detail_tag">
                            Company's Moto
                          </div>
                          <div className="col-md-6 col-sm-4 col-xs-12">
                            {inputdata.cmp_tagline}
                          </div>
                        </li>*/}
                        <li>
                          <div className="col-md-3 col-sm-3 col-xs-12 detail_tag">
                            Company's Owner Name
                          </div>
                          <div className="col-md-6 col-sm-4 col-xs-12">
                            {inputdata.cmp_owner}
                          </div>
                        </li>
                        <li>
                          <div className="col-md-3 col-sm-3 col-xs-12 detail_tag">
                            Establishmet Date
                          </div>
                          <div className="col-md-6 col-sm-4 col-xs-12">
                            {moment(inputdata.esta_date).format('DD/MM/YYYY')}
                          </div>
                        </li>
                        <li>
                          <div className="col-md-3 col-sm-3 col-xs-12 detail_tag">
                            Onwer Email
                          </div>
                          <div className="col-md-6 col-sm-4 col-xs-12">
                            {inputdata.cmp_email}
                          </div>
                        </li>
                      </ul>
                    </div>


                    <div className="emp-des">
                      <ul className="employer_detail_item">
                        <h3 class="background"><span>Company Contact</span></h3>
                        <li>
                          <div className="col-md-3 col-sm-3 col-xs-12 detail_tag">
                            Company Contact No.
                          </div>
                          <div className="col-md-6 col-sm-4 col-xs-12">
                            {inputdata.rec_mno}
                          </div>
                        </li>
                        <li>
                          <div className="col-md-3 col-sm-3 col-xs-12 detail_tag">
                            Company Address
                          </div>
                          <div className="col-md-6 col-sm-4 col-xs-12">
                            {inputdata.cmp_address}, {inputdata.city} - {inputdata.zipcode} , {inputdata.state} {inputdata.country}
                          </div>
                        </li>
                        <li>
                          <div className="col-md-3 col-sm-3 col-xs-12 detail_tag">
                            Company's Landline No.
                          </div>
                          <div className="col-md-6 col-sm-4 col-xs-12">
                            {inputdata.landline}
                          </div>
                        </li>

                        <li>
                          <div className="col-md-3 col-sm-3 col-xs-12 detail_tag">
                            Company Websitelink
                          </div>
                          <div className="col-md-6 col-sm-4 col-xs-12">
                            {inputdata.websitelink}
                          </div>
                        </li>

                        <li>
                          <div className="col-md-3 col-sm-3 col-xs-12 detail_tag">
                            No. Of Emplooyees
                          </div>
                          <div className="col-md-6 col-sm-4 col-xs-12">
                            {inputdata.employess}
                          </div>
                        </li>
                        <li>

                          <div className="col-md-3 col-sm-3 col-xs-12 detail_tag">
                            Company Hour's
                          </div>
                          <div className="col-md-6 col-sm-4 col-xs-12">
                            {inputdata.worktime}
                          </div>
                        </li>

                      </ul>
                    </div>


                    <div className="emp-des">
                      <ul className="employer_detail_item">
                        <h3 class="background"><span>Company on Social Media</span></h3>
                        <li>

                          <div className="col-md-3 col-sm-3 col-xs-12 detail_tag">
                            Google Account
                          </div>
                          <div className="col-md-6 col-sm-4 col-xs-12">
                            {inputdata.google}
                          </div>
                        </li>
                        <li>

                          <div className="col-md-3 col-sm-3 col-xs-12 detail_tag">
                            Twitter Account
                          </div>
                          <div className="col-md-6 col-sm-4 col-xs-12">
                            {inputdata.twitter}
                          </div>
                        </li>
                        <li>
                          <div className="col-md-3 col-sm-3 col-xs-12 detail_tag">
                            Linkdin Account
                          </div>
                          <div className="col-md-6 col-sm-4 col-xs-12">
                            {inputdata.linkdin}
                          </div>
                        </li>



                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ====================== End Create Company ================ */}
          </>
          <Recruiterfooter />

        </>
      </div >}
    </>
  )
}
export default ManageProfile