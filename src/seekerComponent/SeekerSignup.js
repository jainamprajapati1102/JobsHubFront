import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import Header from "../Header";
import { useForm } from "react-hook-form";
import Typewriter from 'typewriter-effect'

import { signup } from "../api/common_api";
import Loader from "../Loader";
function SeekerSignup() {
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

  const navigate = useNavigate();
  //registration api
  const [user, setUser] = useState({
    js_name: "", js_email: "", js_pwd: "", js_cpwd: "", js_mno: ""
  });

  // function for save value
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  // data send from the front to bacj end using fetch function
  const userData = async (e) => {
    // const confiOption = {
    //   method: "post", body: JSON.stringify(user), headers: { "content-type": "application/json" }
    // };
    // const response = await fetch("https://jobshubback-bry5.onrender.com/signup", confiOption);
    // const result = await response.json();

    const result = await signup(user)
    if (user.js_name && user.js_email && user.js_pwd && user.js_cpwd && user.js_mno) {
      if (result.status === 200) {
        toast.success("Seeker Signup Successfully");
        console.log({ result });
        toast.success("YOur Id and Password send on your Email & Whatsapp No ");
        localStorage.setItem('seeker', JSON.stringify(result));
        navigate("/seekerlogin");
      } else {
        if (result.status === 3) {
          toast.error("Email Id is Already Exist");
        }
      }
    } else {
      toast.error("All Feild Required");
    }
  }

  // const googlesignupHandle = await(e) => {
  //   const configOption = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   }

  //   const response = await fetch("")
  // }

  const googlesignupHandle = async () => {
    const configOption = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }

    const res = await fetch("https://jobshubback-bry5.onrender.com/auth/google", configOption)

    const result = await res.json()
    console.log(result);


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
                      .pauseFor(1000)
                      .start()
                  }}

                /></h2>
                <p>
                  <Link to="/" title="Home">Home</Link>{" "}
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
                <form className="log-form" onSubmit={handleSubmit(userData)}>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="js_name"
                        className="form-control"
                        placeholder="Name"
                        {...register("js_name", { required: true })}

                        onChange={(e) => handleInputs(e)}
                      />
                      {errors.js_name && <p className='err'>Please check the First Name</p>}

                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="js_email"
                        className="form-control"
                        placeholder="Email"
                        {...register("js_email",
                          {
                            required: true,
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                          })}
                        onChange={(e) => handleInputs(e)}
                      />
                      {errors.js_email && <p className='err'>Please check the Email</p>}

                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        name="js_pwd"
                        className="form-control"
                        placeholder="********"
                        {...register("js_pwd", {
                          required: true,
                          minLength: 6
                        })}
                        onChange={(e) => handleInputs(e)}
                      />
                      {errors.js_pwd && <p className='err'>Password must be 6 length</p>}

                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        name="js_cpwd"
                        className="form-control"
                        placeholder="********"
                        {...register("js_cpwd", {
                          required: true,
                          minLength: 6
                        })}
                        onChange={(e) => handleInputs(e)}
                      />
                      {errors.js_cpwd && <p className='err'>Please check the Password</p>}

                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="text"
                        name="js_mno"
                        defaultValue="91"
                        className="form-control"
                        placeholder="Phone Number"
                        {...register("js_mno", {
                          required: true,
                          minLength: 12,
                          maxLength: "12"
                        })}
                        onChange={(e) => handleInputs(e)}
                      />
                      {errors.js_mno && <p className='err'>Please check the Whatsapp No</p>}

                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group text-center mrg-top-15">
                      <button
                        type="submit"
                        className="btn theme-btn btn-m full-width"
                      >
                        Sign Up
                      </button>
                      {/*<p>or</p>*/}
                      {/*<Link to="https://jobshubback-bry5.onrender.com/auth/google" onClick={googlesignupHandle}>Signup with Google</Link>*/}
                      {/*<Link to="https://jobshubback-bry5.onrender.com/auth/google" onClick={googlesignupHandle}>
                        <>

                          <div className="google-btn" style={{ display: "flex", justifyContent: "center" }}>
                            <div className="google-icon-wrapper" style={{ marginBottom: "10px" }}>
                              <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                              />

                            </div>

                          </div>
                        </>

                      </Link>*/}
                    </div>

                    Alredy have an account?  <Link to="/seekerlogin" title="Home" className="login">
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

export default SeekerSignup;

