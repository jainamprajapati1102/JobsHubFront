import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import { Link, useNavigate } from 'react-router-dom'

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { contact, contactus } from '../api/common_api';
import Load from '../Load';
import RecHeader from './RecHeader';
import Recruiterfooter from './Recruiterfooter';
import Typewriter from 'typewriter-effect'
import Loader from '../Loader';
function Recruitercontact() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCompanyData()
    // simulate an API call with a delay of 3 seconds
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
  }, []);

  const [inputdata, setInputdata] = useState({});
  const [con, setcon] = useState({});
  const contact = (e) => {
    setInputdata({
      ...inputdata,
      [e.target.name]: e.target.value
    })
  }
  const navigate = useNavigate();
  const [accesstoken] = useState(localStorage.getItem('recruiterToken'));
  const fetchCompanyData = async () => {
    const response = await fetch('https://jobshubback-19af.onrender.com/getrecruiter', {
      method: 'GET',
      headers: {
        Accept: "application/json", "Content-Type": "application/json", credentials: "includes",
        'Authorization': `Bearer ${accesstoken}`,
      }
    });
    const data = await response.json();
    setInputdata(data);
  }

  const sendcontact = async (e) => {
    e.preventDefault();
    const confiOption = {
      method: "post", body: JSON.stringify(inputdata),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        credentials: "includes",
        'Authorization': `Bearer ${accesstoken}`
      }
    };
    const response = await fetch("https://jobshubback-19af.onrender.com/reccontact", confiOption);
    const result = await response.json();

    if (result.status === 201) {
      toast.success("Message Send Successful");
      navigate("/recruiterhome");
    } else {
      toast.error("Message Not Send");
    }

  }
  return (
    <>
      {isLoading ? <Loader /> : <div>

        <RecHeader />
        <>
          {/* ======================= Start Navigation ===================== */}
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
                      .typeString("Get In Touch")
                      .pauseFor(2000)
                      .start()
                  }}

                /></h2>
                <p>
                  <Link to="/recruiterhome" title="Home">
                    Home
                  </Link>{" "}
                  <i className="ti-angle-double-right" /> Contact
                </p>
              </div>
            </div>
          </div>
          {/* ======================= End Page Title ===================== */}
          {/* ================ Fill Forms ======================= */}
          <section className="padd-top-80 padd-bot-70">
            <div className="container">
              <div className="col-md-6 col-sm-6">
                <div className="row">
                  <form className="mrg-bot-40">
                    <div className="col-md-6 col-sm-6">
                      <label>Name:</label>
                      <input type="text" className="form-control" placeholder="Name"
                        value={inputdata.cmp_name}
                        onChange={(e) => contact(e)}
                        name="cmp_name"
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <label>Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="cmp_email"
                        value={inputdata.cmp_email}
                        onChange={(e) => contact(e)}
                      />
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <label>Subject:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="cont_sub"
                        onChange={(e) => contact(e)}
                      />
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <label>Message:</label>
                      <textarea
                        className="form-control height-120"
                        placeholder="Message"
                        defaultValue={""}
                        onChange={(e) => contact(e)}
                        name="cont_msg"

                      />
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <button className="btn theme-btn" name="submit" onClick={sendcontact}>
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.905283547185!2d72.85031371502897!3d21.23560418588678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f27ee8159e3%3A0xf6defb4d03e81080!2sSutex%20Bank%20College%20of%20Computer%20Applications%20%26%20Science!5e0!3m2!1sen!2sin!4v1677031404557!5m2!1sen!2sin"
                  width="100%"
                  height={360}
                  style={{ border: 0 }}
                  allowFullScreen=""
                />
              </div>
            </div>
          </section>
          {/* ================ End Fill Forms ======================= */}
          {/* ================= footer start ========================= */}
          {/* Jquery js*/}
        </>
        <Recruiterfooter />
      </div>}
    </>
  )
}

export default Recruitercontact