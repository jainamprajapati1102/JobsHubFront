import React, { useEffect, useState } from 'react'
import Header2 from './recruiterComponent/Header2'

import { Link, useNavigate } from 'react-router-dom'

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Seekerfooter from './seekerComponent/Seekerfooter';

function Contact() {
  useEffect(() => {
    callProfile();
  }, []);

  const navigate = useNavigate();
  const [seekerData, setSeekerdata] = useState({
    js_name: "", js_email: "", js_sub: "", js_msg: ""
  });
  const [accesstoken] = useState(localStorage.getItem('seekerToken'))
  const callProfile = async () => {
    try {
      const token = JSON.stringify(localStorage.getItem('seekerToken'));
      console.log("token===>", token)
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
      console.log(data);
      setSeekerdata({
        ...seekerData,
        js_name: data.js_name,
        js_email: data.js_email,
      });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(`Here is some Error :- ${err}`);
      navigate('/seekerlogin')
    }
  }

  const conatct = (e) => {

    const name = e.target.name
    const value = e.target.value
    setSeekerdata({
      ...seekerData,
      [name]: value
    })
  }
  const contactData = async (e) => {
    e.preventDefault();
    const confiOption = {
      method: "post", body: JSON.stringify(seekerData), headers: { "content-type": "application/json" }
    };
    const response = await fetch("https://jobshubback-19af.onrender.com/contact", confiOption);
    const result = await response.json();
    if (seekerData.js_name && seekerData.js_email && seekerData.js_sub && seekerData.js_msg) {
      if (result.status === 200) {
        toast.success("Message Send Successful");
        console.log({ result });
        // localStorage.setItem('seeker', JSON.stringify(result));/
        navigate("/seekerhome");
      } else {
        toast.success("Message Not Send");
      }
    } else {
      toast.error("All Feild Required");
    }
  }
  return (
    <>
      <Header2 />
      <>
        {/* ======================= Start Navigation ===================== */}
        {/* ======================= Page Title ===================== */}
        <div className="page-title">
          <div className="container">
            <div className="page-caption">
              <h2>Get In Touch</h2>
              <p>
                <Link to="/home" title="Home">
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
                <form className="mrg-bot-40" method='post'>
                  <div className="col-md-6 col-sm-6">
                    <label>Name:</label>
                    <input type="text" className="form-control" placeholder="Name" name="js_name"
                      onChange={(e) => conatct(e)}
                      value={seekerData.js_name}
                    />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <label>Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="js_email"
                      onChange={(e) => conatct(e)}
                      value={seekerData.js_email}
                    />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <label>Subject:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="js_sub"
                      value={seekerData.js_sub}
                      onChange={(e) => conatct(e)}
                    />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <label>Message:</label>
                    <textarea
                      className="form-control height-120"
                      placeholder="Message"
                      defaultValue={""}
                      name="js_msg"
                      value={seekerData.js_msg}
                      onChange={(e) => conatct(e)}
                    />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <button type="submit" className="btn theme-btn" name="submit" onClick={contactData()}>
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
      <Seekerfooter/>
    </>
  )
}

export default Contact