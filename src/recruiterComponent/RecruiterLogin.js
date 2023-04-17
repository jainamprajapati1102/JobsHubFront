import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { loginrec } from "../api/common_api";
import Recruiterfooter from './Recruiterfooter';
import Typewriter from 'typewriter-effect'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Loader from '../Loader';
import { useForm } from "react-hook-form";

// import toast, { Toaster } from 'react-hot-toast';
function Login() {
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
  const [newData1, setnew1] = useState({
    cmp_email: "",
    cmp_pwd: "",
  });
  const notify = () => toast();

  function update1(e) {

    setnew1({ ...newData1, [e.target.name]: e.target.value });
  }

  async function loginapi() {
    console.log("nrewes===>", newData1)
    if (newData1.cmp_email && newData1.cmp_pwd) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData1),
      };

      const response = await fetch("http://localhost:5000/reclogin", requestOptions);
      const result = await response.json();
      console.log("result===>", result);
      console.log("response===>", response);
      console.log(result.status)
      if (result.status !== 8) {
        if (result.status === 200) {

          localStorage.setItem('recruiterToken', result.token);
          toast.success("Sign In Successfully");
          if (result.exist === 1) {
            navigate("/editprofile");
          } else if (result.exist === 3) {
            navigate("/payment");
          } else {
            navigate('/recruiterhome')
          }
        } else {
          toast.error("Invalid Credentials");

        }
      }
      else {
        toast.error(result.err)
        navigate('/recruitersignup')
      }
    } else {
      toast.error("All Feild Required");
    }


  }
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>

      <>{isLoading ? <Loader /> : <div>
        <>
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
                      .typeString("Login An Account")
                      .pauseFor(2000)
                      .start()
                  }}

                /></h2>
                <p>
                  <Link to="/" title="Home">
                    Home
                  </Link>{" "}
                  <i className="ti-angle-double-right" /> Login
                </p>
              </div>
            </div>
          </div>
          {/* ======================= End Page Title ===================== */}

          <section className="padd-top-80 padd-bot-80">
            <div className="container">
              <div className="log-box">
                <form className="log-form" onSubmit={handleSubmit(loginapi)}>

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
                        onChange={(e) => update1(e)} />
                      {errors.cmp_email && <p className="err">Please Provide Your Email</p>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        name="cmp_pwd"
                        className="form-control"
                        placeholder="******"
                        {...register("cmp_pwd", { required: true, minLength: 6 })}
                        onChange={(e) => update1(e)}
                      />
                      {errors.cmp_pwd && <p className="err">Please Provide Your Password</p>}

                    </div>
                    <div className="form-group">
                      <Link to="/recruitersendmail" title="Forget" className="fl-right">Forgot Password?</Link>

                      {" "}
                      {/*   <label for="chpass" title="Forget" className="fl-right">Forgot Password?</label>
                      <button style={{ display: "none" }} id="chpass"
                      //  onClick={}
                      ></button> */}


                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group text-center mrg-top-15">
                      <button
                        type="submit"
                        className="btn theme-btn btn-m full-width"
                      // onClick={(e) => {
                      //   loginapi();
                      //   e.preventDefault();
                      // }}
                      >
                        Sign In
                      </button>
                    </div>
                    Don't Have an account ?  <Link to="/recruitersignup" title="Home" className="login">
                      Sign Up
                    </Link>
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
    </>
  )
}

export default Login