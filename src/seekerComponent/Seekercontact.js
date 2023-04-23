import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import { Link, useNavigate } from 'react-router-dom'

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { contact, contactus } from '../api/common_api';
import Load from '../Load';
import SeekHeader from './SeekHeader';
import Seekerfooter from './Seekerfooter';
import Typewriter from 'typewriter-effect'
import Loader from '../Loader';
// function Seekercontact() {

//   return (
//     <>
//     <Load/>
//       <SeekHeader />
//       <>
//         {/* ======================= Start Navigation ===================== */}
//         {/* ======================= Page Title ===================== */}
//         <div className="page-title">
//           <div className="container">
//             <div className="page-caption">
//               <h2>Get In Touch</h2>
//               <p>
//                 <Link to="/home" title="Home">
//                   Home
//                 </Link>{" "}
//                 <i className="ti-angle-double-right" /> Contact
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* ======================= End Page Title ===================== */}
//         {/* ================ Fill Forms ======================= */}
//         <section className="padd-top-80 padd-bot-70">
//           <div className="container">
//             <div className="col-md-6 col-sm-6">
//               <div className="row">
//                 <form className="mrg-bot-40">
//                   <div className="col-md-6 col-sm-6">
//                     <label>Name:</label>
//               <input type="text" className="form-control" placeholder="Name" name="name"  />
//                   </div>
//                   <div className="col-md-6 col-sm-6">
//                     <label>Email:</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       placeholder="Email"
//                       name="email"

//                     />
//                   </div>
//                   <div className="col-md-12 col-sm-12">
//                     <label>Subject:</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Subject"
//                       name="subject"

//                     />
//                   </div>
//                   <div className="col-md-12 col-sm-12">
//                     <label>Message:</label>
//                     <textarea
//                       className="form-control height-120"
//                       placeholder="Message"
//                       defaultValue={""}
//                       name="message"

//                     />
//                   </div>
//                   <div className="col-md-12 col-sm-12">
//                     <button className="btn theme-btn" name="submit" >
//                       Send Message
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <div className="col-md-6 col-sm-6">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.905283547185!2d72.85031371502897!3d21.23560418588678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f27ee8159e3%3A0xf6defb4d03e81080!2sSutex%20Bank%20College%20of%20Computer%20Applications%20%26%20Science!5e0!3m2!1sen!2sin!4v1677031404557!5m2!1sen!2sin"
//                 width="100%"
//                 height={360}
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//               />
//             </div>
//           </div>
//         </section>
//         {/* ================ End Fill Forms ======================= */}
//         {/* ================= footer start ========================= */}
//         {/* Jquery js*/}
//       </>
//      <Seekerfooter/>
//     </>
//   )
// }

// export default Seekercontact


function Seekercontact() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
  const [seekerData, setSeekerdata] = useState({
    js_name: "", js_email: "", js_sub: "", js_msg: ""
  });
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
      setSeekerdata(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
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

    const confiOption = {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        credentials: "includes",
        'Authorization': `Bearer ${accesstoken}`
      },
      body: JSON.stringify(seekerData),

    };
    const response = await fetch("https://jobshubback-19af.onrender.com/seekercontact", confiOption);
    const result = await response.json();

    if (result.status === 201) {
      toast.success("Message Send Successful");
      navigate("/seekerhome");
    } else {
      toast.error("Message Not Send");
    }

  }
  return (
    <>
      {isLoading ? <Loader /> : <div>
        <SeekHeader />
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
                  <Link to="/seekerhome" title="Home">
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
                        name="cont_sub"
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
                        name="cont_msg"
                        value={seekerData.js_msg}
                        onChange={(e) => conatct(e)}
                      />
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <button type="button" className="btn theme-btn" name="submit" onClick={contactData}>
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
        <Seekerfooter />
      </div>}
    </>
  )
}

export default Seekercontact