import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import Header from "../Header";
import Footer from "../Footer";
import { insertrec } from "../api/common_api";
import Recruiterfooter from "./Recruiterfooter";
import Typewriter from 'typewriter-effect'
import Loader from "../Loader";
import { useForm } from "react-hook-form";

const Signup1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
  //registration api
  const [newData, setnew] = useState({
    cmp_name: "",
    cmp_pwd: "",
    cmp_email: "",
    cmp_logo: "",
    // esta_date: ""
  });


  const update = (e) => {

    setnew(
      {
        ...newData,
        [e.target.name]: e.target.type == 'file' ? e.target.files[0] : e.target.value

      });
  }

  console.log('newdata===>', newData)

  const submit = async (e) => {
    // e.preventDefault();

    const data = new FormData();
    data.append('cmp_name', newData.cmp_name)
    data.append('cmp_pwd', newData.cmp_pwd)
    data.append('cmp_email', newData.cmp_email)
    data.append('rec_mno', newData.rec_mno)

    data.append('cmp_logo', newData.cmp_logo);
    console.log(`recruiter image===>${data}`)
    let response = await fetch('http://localhost:5000/recsignup', {
      method: "POST",
      body: data
    })
    console.log("response====>", response)
    const result = await response.json();
    console.log("result===>", result);


    if (result.status === 201) {
      toast.success("Registration Successfully");
      // toast.success("Your Username & ");
      navigate("/recruiterlogin");
    } else if (result.Error) {

    }
    else {
      toast.error("error");
    }
  }


  return (
    <>
      {isLoading ? <Loader /> : <div>
        <Header />
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
                      .typeString("Create an Account")
                      .pauseFor(2000)
                      .start()
                  }}

                /></h2>
                <p>
                  <Link to="/" title="Home">
                    Home
                  </Link>{" "}
                  <i className="ti-angle-double-right" /> SignUp
                </p>
              </div>
            </div>
          </div>
          {/* ======================= End Page Title ===================== */}
          {/* ====================== Start Signup Form ============= */}
          <section className="padd-top-80 padd-bot-80">
            <div className="container">
              <div className="log-box">
                <form className="log-form" onSubmit={handleSubmit(submit)} method='POST' encType="multipart/form-data">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="cmp_name"
                        className="form-control"
                        placeholder="Name"
                        {...register("cmp_name", { required: true })}
                        onChange={(e) => update(e)}
                      />
                      {errors.cmp_name && <p className="err">Please Provide Your First Name</p>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="cmp_email"
                        className="form-control"
                        placeholder="Email"
                        {...register("cmp_email", {
                          required: true,
                          pattern:
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                        onChange={(e) => update(e)}
                      />
                      {errors.cmp_email && <p className="err">Please Provide Your Email</p>}

                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        maxLength={16}
                        name="cmp_pwd"
                        className="form-control"
                        placeholder="********"
                        {...register("cmp_pwd", { required: true, minLength: 6 })}
                        onChange={(e) => update(e)}
                      />
                      {errors.cmp_pwd && <p className="err">Please Provide Your Password</p>}

                    </div>
                  </div>
                  {/* <div className="col-md-4">
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        name="jsrepwd"
                        className="form-control"
                        placeholder="********"
                        onChange={(e) => update(e)}
                      />
                    </div> */}
                  {/* </div> */}
                  {/* <div className="col-md-4">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="text"
                        name="jsmno"
                        className="form-control"
                        placeholder="Phone Number"
  
                        onChange={(e) => update(e)}
                      />
                    </div>
                  </div> */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Whatsapp  No:</label>
                      <input
                        type="tele"
                        maxLength={12}
                        name="rec_mno"
                        defaultValue="91"
                        className="form-control"
                        placeholder="Whatsapp Number"
                        {...register("rec_mno", { required: true, minLength: 12, maxLength: 12 })}

                        onChange={(e) => update(e)}
                      />
                      {errors.rec_mno && <p className="err">Please Provide Your Mobile no</p>}

                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">

                      <label>Company Logo</label>
                      <div className="custom-file-upload" style={{ marginBottom: "0px" }}>
                        <input type="file" name="cmp_logo" accept="image/*"
                          {...register("cmp_logo", { required: true })}
                          onChange={(e) => update(e)} />
                      </div>
                      {errors.cmp_logo && <p className="err">Please Provide Your Logo image</p>}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group text-center mrg-top-15">

                      <input className="btn theme-btn btn-m full-width" type='submit' value='Sign Up' />
                      {/* <button
                      type="button"
                      className="btn theme-btn btn-m full-width" */}
                      {/* onClick={ */}
                      {/* //   submit */}
                      {/* //   // e.preventDefault(); */}
                      {/* // } */}
                      {/* //> */}
                      {/* Sign Up
                    </button> */}
                    </div>

                    Alredy have an account?  <Link to="/recruiterlogin" title="Home" className="login">
                      Sign In
                    </Link>{" "}
                  </div>
                  <div className="clearfix" />
                </form>
              </div>
            </div>
          </section>
          <div className="row">
            <div className="col-md-12">
              <div className="copyright text-center">
                <p>Copyright © 2023 All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </>
      </div>}
    </>
  );
}
// }
// }
export default Signup1;