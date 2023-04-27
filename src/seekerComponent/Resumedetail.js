import React, { useState, useEffect } from 'react'
import Loader from '../Loader';
import Seekerfooter from './Seekerfooter';
import SeekHeader from "./SeekHeader";
import Typewriter from 'typewriter-effect'
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom'
import moment from 'moment';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { toast } from "react-toastify";
function Resumedetail() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [seekerData, setSeekerdata] = useState('');
  useEffect(() => {
    // simulate an API call with a delay of 3 seconds
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    callProfile();
    check();
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
  const downloadresume = async (req, res) => {
    console.log('seeekerData in resume component before ===>', seekerData)
    axios.post('http://localhost:5000/createresume', seekerData)
      .then(() => axios.get('http://localhost:5000/downloadresume', { responseType: 'blob' })).then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        console.log("during download", res.data)
        saveAs(pdfBlob, `${seekerData.js_name}Resume.pdf`)
      })
  }
  return (

    <>
      {isLoading ? <Loader /> : <div>
        <>
          <SeekHeader />
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
                      .typeString("Resume Detail")
                      .pauseFor(2000)
                      .start()
                  }}

                /></h2>
                <p>
                  <Link to="/seekerhome" title="Home">
                    Home
                  </Link>{" "}
                  <i className="ti-angle-double-right" /> Resume Detail
                </p>
              </div>
            </div>
          </div>
          {/* ======================= End Page Title ===================== */}
          {/* ====================== Resume Detail ================ */}
          <section className="padd-top-80 padd-bot-80">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-7">
                  <div className="detail-wrapper">
                    <div className="detail-wrapper-body">
                      <div className="row">
                        <div className="col-md-4 text-center user_profile_img mrg-bot-30">
                          {" "}
                          <img
                            src={`https://jobshubback-19af.onrender.com/public/uploads1/seekerprofile/${seekerData.js_profile}`}
                            className="img-circle width-100"
                            alt=""
                          />
                          <h4 className="meg-0">{seekerData.js_name}</h4>
                          {/*<span>{seekerData.js_exp_company}</span>*/}
                        </div>
                        <div className="col-md-8 user_job_detail">
                          <div className="col-md-12 mrg-bot-10">
                            {" "}
                            <i className="ti-location-pin padd-r-10" />
                            {seekerData.js_address}{" "}
                          </div>
                          <div className="col-md-12 mrg-bot-10">
                            {" "}
                            <i className="ti-email padd-r-10" />
                            {seekerData.js_email}{" "}
                          </div>
                          <div className="col-md-12 mrg-bot-10">
                            {" "}
                            <i className="ti-mobile padd-r-10" />
                            {seekerData.js_mno}{" "}
                          </div>
                          <div className="col-md-12 mrg-bot-10">
                            {" "}
                            <i className="ti-user padd-r-10" />{seekerData.js_exp_company} (Experience Company)
                          </div>
                          <div className="col-md-12 mrg-bot-10">
                            {" "}
                            <i className="ti-shield padd-r-10" />{seekerData.js_expierience} Year Exp.
                          </div>
                          <div className="col-md-12 mrg-bot-10">
                            {" "}
                            <span className="skill-tag">{seekerData.js_skill}</span>{" "}
                            {/* <span className="skill-tag">HTML</span>{" "}
                            <span className="skill-tag">Photoshop</span>{" "}*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sidebar */}
                <div className="col-md-4 col-sm-5">
                  <div className="sidebar">
                    <div className="widget-boxed">
                      <div className="text-center">
                        <button type="submit" className="btn btn-m btn-primary" onClick={downloadresume}>
                          Download Resume
                        </button>
                      </div>
                    </div>
                    <div className="widget-boxed">
                      <div className="widget-boxed-header">
                        <h4>
                          <i className="ti-location-pin padd-r-10" />
                          Details
                        </h4>
                      </div>
                      <div className="widget-boxed-body">
                        <div className="side-list no-border">
                          <ul>
                            <li>
                              <i className="ti-location-pin padd-r-10" />
                              {seekerData.js_address}
                            </li>
                            <li>
                              <i className="ti-mobile padd-r-10" />
                              {seekerData.js_mno}
                            </li>
                            <li>
                              <i className="ti-email padd-r-10" />
                              {seekerData.js_email}
                            </li>
                            <li>
                              <i className="ti-pencil-alt padd-r-10" />
                              {seekerData.js_quli}
                            </li>
                            <li>
                              <i className="ti-shield padd-r-10" />{seekerData.js_expierience} Year Exp.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Sidebar */}
              </div>
              {/* End Row */}
            </div>
          </section>
          {/* ====================== End Resume Detail ================ */}
        </>
        <Seekerfooter />
      </div>}
    </>
  )
}

export default Resumedetail