import React, { useEffect, useState } from 'react'
import RecHeader from './RecHeader'
import Footer from '../Footer'
import Load from '../Load'
import { Link, useNavigate } from 'react-router-dom'
import { Country, State, City } from 'country-state-city';
import { toast } from "react-toastify";
import Select from "react-select";
import avtar from "../img/loginpic.png"
import { Modal } from 'react-responsive-modal';
import moment from 'moment'

import Typewriter from 'typewriter-effect'
import Loader from '../Loader'
function Editprofile() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCompanyData();
    fetchCountry();
    fecthState();
    fetchCityData();
    callrecruiter();
    fetchcategory();
    // simulate an API call with a delay of 3 seconds
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
  }, []);

  const navigate = useNavigate();
  const callrecruiter = async (req, res) => {
    try {

    } catch (error) {

    }
  }
  const logout = async () => {
    localStorage.removeItem('recruiterToken')
    navigate('/recruiterlogin')
  }
  const [countrylist, setCountrylist] = useState([]);
  const [statelist, setStatelist] = useState([]);
  const [citylist, setCitylist] = useState([]);
  const [categorydata, setCategorydata] = useState();
  const [accesstoken] = useState(localStorage.getItem("recruiterToken"));
  const [inputdata, setInputdata] = useState('');

  const employessOption = [
    { value: '10-50', label: '10-50' },
    { value: '50-100', label: '50-100' },
    { value: '100-500', label: '100-500' },
    { value: '500-1000', label: '500-1000' }
  ]

  const worktimeOption = [
    { value: '08:00AM To 5:00PM', label: "08:00AM To 5:00PM" },
    { value: '10:00AM To 4:00PM', label: '10:00AM To 4:00PM' },
    { value: '10:00AM To 6:00PM', label: '10:00AM To 6:00PM' },
    { value: '11:00AM To 7:00PM', label: '11:00AM To 7:00PM' }

  ]
  const jobcatogoryOption = [
    { label: 'information technology', value: 'information technology' },
    { label: 'Hardware', value: 'Hardware' },
    { label: 'software', value: 'software' },
    { label: 'mechanical', value: 'mechanical' }
  ]
  const selectHandler = ({ name, label }) => {
    setInputdata({ ...inputdata, [name]: label })
  }
  const requestOptions = {
    method: 'GET',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      credentials: "includes",
      'Authorization': `Bearer ${accesstoken.replace(/"/g, '')}`,
    }
  }
  const fetchcategory = async () => {
    const response = await fetch('https://jobshubback-19af.onrender.com/industry', requestOptions);
    const categoryres = await response.json();
    const category_list = [];
    categoryres?.map((item) => { category_list.push({ value: item._id, label: item.ind_name }) })
    setCategorydata(category_list)
  }
  const update1 = (e) => {
    setInputdata({
      ...inputdata,
      [e.target.name]: e.target.type == "file" ? e.target.files[0] : e.target.value
    });
  }

  const update2 = ({ name, value }) => {
    setInputdata({ ...inputdata, [name]: value })
  }

  // ***** fetch country data ******
  const fetchCountry = async () => {
    const rescountry = Country.getAllCountries()
    let country_list = [];
    rescountry?.map((item) => country_list.push({ value: item.name, label: item.name }));
    setCountrylist(country_list);
  };

  // ***** fetch state data ******
  const fecthState = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        credentials: "includes",
        'Authorization': `Bearer ${accesstoken}`,
      }
    })
    const resultstate = await response.json();
    let State_list = [];
    resultstate?.map((item) => { State_list.push({ value: item.name, label: item.name }) })
    setStatelist(State_list);
  }

  // ***** fetch city data ******
  const fetchCityData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        credentials: "includes",
        'Authorization': `Bearer ${accesstoken}`,
      }
    }
    );

    const result = await response.json();
    let city_list = [];
    result?.map((item) => { city_list.push({ value: item.title, label: item.title }) });
    setCitylist(city_list);
  }

  // ***** fetch company data ****** 
  const fetchCompanyData = async () => {
    const response = await fetch('https://jobshubback-19af.onrender.com/getrecruiter', {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        credentials: "includes",
        'Authorization': `Bearer ${accesstoken}`,
      }
    });


    const data = await response.json();

    setInputdata({
      ...inputdata,
      cmp_name: data.cmp_name,
      cmp_tagline: data.cmp_tagline,
      cmp_owner: data.cmp_owner,
      rec_mno: data.rec_mno,
      landline: data.landline,
      industry_cat: data.industry_cat,
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
      cmp_logo: data.cmp_logo

    });
  }

  // ***** profile updatre handler******** 
  const UpdateProfilecmp = async (e) => {
    e.preventDefault();
    const confiOption = {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        credentials: "includes",
        'Authorization': `Bearer ${accesstoken}`,
      },
      body: JSON.stringify(inputdata),
    };
    const response = await fetch('https://jobshubback-19af.onrender.com/createcmp', confiOption);
    const result = await response.json();
    if (result.status === 200) {
      toast.success("profile update successfully");
      navigate('/payment');
    } else {
      toast.error("something wrong");
    }
  }

  const [image, setImage] = useState({ cmp_logo: "" });
  const mystyle = { cursor: "pointer", fontSize: "3rem" }
  const profile = async (e) => {
    setImage({
      ...image,
      [e.target.name]: e.target.type == 'file' ? e.target.files[0].name : e.target.value
    })
  }

  const profilepic = async (event, value) => {
    const selectedFile = event.target.files[0];
    const formdata = new FormData()
    formdata.append('cmp_logo', selectedFile)
    const configOption = {
      method: 'PUT',
      headers: {
        credentials: "includes",
        'Authorization': `Bearer ${accesstoken}`,
      },
      body: formdata
    }
    const response = await fetch('https://jobshubback-19af.onrender.com/cmpupdatelogo', configOption)
    const result = await response.json();
    if (result.status === 201) {
      toast.success("Profile Picture Update")
      navigate('/manageprofile')
    } else {
      toast.error("Profile Picture not Update yet")
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

      const response = await fetch('https://jobshubback-19af.onrender.com/recchangepass', configOPtion)
      const result = await response.json()
      if (result.status === 201) {
        toast.success("Your Password Successfully Change")
        logout();
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
  const date = new Date();
  const today = moment().add(-1, 'd').format("YYYY-MM-DD")
  return (
    <>
      {isLoading ? <Loader /> : <div>
        <Modal open={open} id="1" onClose={onCloseModal} center>
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
                      .typeString("Edit Profile")
                      .pauseFor(2000)
                      .start()
                  }}

                /></h2>
                <p>
                  <Link to="/recruiterhome" title="Home">
                    Home
                  </Link>{" "}
                  <Link to="/manageprofile" title="Home">
                    <i className="ti-angle-double-right" /> Manage Profile
                  </Link>{" "}
                  <i className="ti-angle-double-right" /> Edit Profile
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
                      <label for="file" style={mystyle} onChange={profile}> <img src={inputdata.cmp_logo ? `https://jobshubback-19af.onrender.com/public/uploads1/companylogo/${inputdata.cmp_logo}` : avtar} alt={inputdata.cmp_name} />{" "}</label>
                      <input type="file" id="file" name="cmp_logo" style={{ display: 'none' }} onChange={(e, val) => profilepic(e, val)} />
                    </div>
                  </div>
                  <div className="dashboard_nav_item">
                    <ul>

                      <li className="">
                        <Link to="/manageprofile">
                          <i className="login-icon ti-user" />  Profile
                        </Link>
                      </li>
                      <li className="active">
                        <Link to="/editprofile">
                          <i className="login-icon ti-pencil-alt" /> Edit Profile
                        </Link>
                      </li>
                      <li>
                        <label for="chpass">
                          <i className="login-icon ti-key" /> Change Password
                        </label>

                        <button onClick={onOpenModal} style={{ display: "none" }} id='chpass'>
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

                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="profile_detail_block">
                    <form onSubmit={UpdateProfilecmp} method='PUT' className="log-form" >
                      {/* General Information */}
                      <div className="box">
                        <div className="box-header">
                          <h4>General Information</h4>
                        </div>

                        <div className="box-body">
                          <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label>Company Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Company Name"
                                  name="cmp_name"
                                  onChange={update1}
                                  value={inputdata.cmp_name}
                                />
                              </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12 m-clear">
                              <div className="form-group">

                                <label>Owner Name</label>
                                <input
                                  type="text"
                                  value={inputdata.cmp_owner}
                                  className="form-control"
                                  placeholder="Owner Name"
                                  name="cmp_owner"
                                  onChange={update1}
                                />
                              </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">

                                <label>Category</label>

                                <Select
                                  className="wide form-control"
                                  name="industry_cat"

                                  onChange={({ label }) => selectHandler({ name: 'industry_cat', label })}
                                  options={categorydata}
                                  value={categorydata?.map((list) => {
                                    if (list.label == inputdata.industry_cat) {
                                      return {
                                        value: list.value,
                                        label: list.label,
                                      }
                                    }
                                  })}
                                />
                              </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label>Establish Date</label>
                                <input
                                  type="date"
                                  id="esta_date"
                                  name='esta_date'
                                  max={today}
                                  className="form-control"
                                  placeholder="YYYY/MM/DD"
                                  value={inputdata?.esta_date}
                                  selected={inputdata?.esta_date ? moment(inputdata?.esta_date, "DD-MM-YYYY") : ''}
                                  onChange={update1}
                                />
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                      {/* Company Address */}
                      <div className="box">
                        <div className="box-header">
                          <h4>Company Address</h4>
                        </div>



                        <div className="box-body">
                          <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label>Email</label>
                                <input
                                  type="email"
                                  value={inputdata.cmp_email}
                                  className="form-control"
                                  placeholder="Email"
                                  name="cmp_email"
                                  onChange={update1}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                  type="tele"
                                  value={inputdata.rec_mno}
                                  // min={10}
                                  // max={10}
                                  className="form-control"
                                  placeholder="Phone Number"
                                  name="rec_mno"
                                  onChange={update1}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label>Landline</label>
                                <input
                                  type="text"
                                  maxLength={10}
                                  value={inputdata.landline}
                                  className="form-control"
                                  placeholder="Landline"
                                  name="landline"
                                  onChange={update1}

                                />
                              </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label>Address</label>
                                <input
                                  type="text"
                                  value={inputdata.cmp_address}
                                  className="form-control"
                                  placeholder="Address"
                                  name="cmp_address"
                                  onChange={update1}

                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label>Zip Code</label>
                                <input
                                  type="text"
                                  value={inputdata.zipcode}
                                  className="form-control"
                                  placeholder="Zip Code"
                                  name="zipcode"
                                  onChange={update1}
                                />
                              </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label>State</label>
                                <input
                                  type="text"
                                  value={inputdata.state}
                                  className="form-control"
                                  placeholder="Enter Your State"
                                  name="state"
                                  onChange={update1}
                                />
                              </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label>City</label>
                                <input
                                  type="text"
                                  value={inputdata.city}
                                  className="form-control"
                                  placeholder="Enter Your City "
                                  name="city"
                                  onChange={update1}
                                />
                              </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">

                                <label>Employees</label>
                                <Select options={employessOption} onChange={({ value }) => update2({ name: 'employess', value })} value={inputdata.employess ? { value: inputdata.employess, label: inputdata.employess } : 'select'} />
                              </div>

                            </div>

                            <div className="col-md-12 col-sm-12 col-xs-12 m-clear">
                              <div className="form-group">

                                <label>Working Time</label>
                                <Select options={worktimeOption}
                                  style={{ display: "none" }}
                                  onChange={({ value }) => update2({ value, name: 'worktime' })}
                                  value={{ value: inputdata.worktime, label: inputdata.worktime }} />
                              </div>
                            </div>

                            {/* <div className="col-md-6">
                            <label>Company Logo</label>
                            <div className="custom-file-upload">
                              <input type="file" name="cmp_logo" onChange={(e) => update1(e)} />
                            </div>
                          </div> */}
                          </div>
                        </div>
                      </div>
                      {/* Social Accounts */}
                      <div className="box">
                        <div className="box-header">
                          <h4>Social Accounts</h4>
                        </div>
                        <div className="box-body">
                          <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label>Website Link</label>
                                <input
                                  type="text"
                                  value={inputdata.websitelink}
                                  className="form-control"
                                  placeholder="Website Link"
                                  name="websitelink"
                                  onChange={update1}
                                />
                              </div>
                            </div>
                            <div className="col-md-6  col-sm-6 col-xs-12">
                              <div className="form-group">

                                <label>Google +</label>
                                <input
                                  type="text"
                                  value={inputdata.google}
                                  className="form-control"
                                  placeholder="https://www.gmail.com/"
                                  name="google"
                                  onChange={update1}
                                />
                              </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label>Twitter</label>
                                <input
                                  type="text"
                                  value={inputdata.twitter}
                                  className="form-control"
                                  placeholder="https://twitter.com/"
                                  name="twitter"
                                  onChange={update1}
                                />
                              </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <label>LinkedIn</label>
                              <input
                                type="text"
                                value={inputdata.linkdin}
                                className="form-control"
                                placeholder="https://www.linkedin.com/"
                                name="linkdin"
                                onChange={update1}
                              />
                            </div>

                          </div>
                        </div>
                      </div>

                      <div className="clearfix" />
                      <div className="col-md-6 padd-top-10 text-center">
                        {" "}
                        <button type='button' className="btn btn-m them-btn  full-width" onClick={() => { navigate('/manageprofile') }} >
                          Cancle
                        </button>
                      </div>
                      <div className="col-md-6 padd-top-10 text-center">
                        {" "}
                        <button type='submit' className="btn btn-m theme-btn full-width" >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>

                </div>

              </div>
            </div>

          </section>
          {/* ====================== End Create Company ================ */}
        </>
        <Footer />
      </div >}
    </>
  )

}
export default Editprofile