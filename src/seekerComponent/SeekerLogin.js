import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Typewriter from 'typewriter-effect'
import Loader from "../Loader";
import Swal from 'sweetalert2'
function SeekerLogin() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate an API call with a delay of 3 seconds
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 3000);
  }, []);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const [user, setUser] = useState({ js_email: "", js_pwd: "" });
  // const [user, setUser] = useState('');
  // %%%%%%%%%%%% new %%%%%%%%%%%%
  const handleInputs = (e) => {
    // e.preventDefault();
    console.log(e);
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const count = 0;
  console.log(count)
  const loginUser = async (e) => {
    if (user.js_email && user.js_pwd) {
      // let result = await fetch('https://jobshubback-19af.onrender.com/login', {
      let result = await fetch('http://localhost:5000/login', {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" }
      })

      result = await result.json();

      if (result.status === 11) {
        toast.error(result.err)
      } else {
        if (result.status == 8) {
          toast.error(result.err)
          navigate('/seekersignup')
        } else {
          if (result.status === 1) {
            localStorage.setItem('seekerToken', result.tok)
            toast.success("Seeker Enter Successfully");
            navigate('/seditprofile');
          } else if (result.status === 2) {
            localStorage.setItem('seekerToken', result.tok)
            toast.success("Seeker Signin ");
            navigate('/seekerhome');
          } else {
            toast.error('Invalid Credentails');

          }
        }
      }
    } else {
      toast.error('All Feild Required');
    }
  }
  const googlesignupHandle = async () => {
    const configOption = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }

    const res = await fetch("https://jobshubback-19af.onrender.com/auth/google", configOption)

    const result = await res.json()
    console.log(res);
    if (res.exist || res.newuser) {

      navigate('/seekerhome')
    }
    // localStorage.setItem('seekerGoogle', result.googleId)

    // window.open("https://jobshubback-19af.onrender.com/auth/google/callback", "_self")
  }
  const pwdcheck = () => {
    let timerInterval
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 9000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }

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
                <h3>APPLY HERE...</h3>
              </span>
              <span></span>
            </div>
            <hr />
            <div className="scr" style={{ height: "300px", overflow: "auto" }}>
              <div className="profile_detail_block">
                <div className="text-center mrg-bot-20">
                  {/* <h4 className="mrg-0">Front End Designer</h4> */}
                  {/* <span>2708 Scenic Way, Sutter</span> */}
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="profile_detail_block" style={{ width: '100%' }}>
                    {/*   {msg ? <p style={{ color: "green", fontWeight: "bold" }}>Password reset Link Send Successfully in Your Email</p> : ""}*/}
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label>Send Email</label>
                        <input
                          type="text"
                          name='js_email'
                          className="form-control"
                          // onChange={handle}
                          placeholder="Email Id"
                        />
                      </div>
                    </div>

                    <div className="clearfix" />
                    <div className="col-md-12 padd-top-10 text-center">
                      {" "}
                      <a className="btn btn-m theme-btn full-width"
                      //  onClick={send
                      // }
                      >
                        Send Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>

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
                      .typeString("Sign In An Account")
                      .pauseFor(2000)
                      .start()
                  }}

                /></h2>
                <p>
                  <Link to="/" title="Home">
                    Home
                  </Link>{" "}
                  <i className="ti-angle-double-right" /> Sign In
                </p>
              </div>
            </div>
          </div>
          {/* ======================= End Page Title ===================== */}
          <section className="padd-top-80 padd-bot-80">
            <div className="container">
              <div className="log-box">
                <form className="log-form" method="POST" onSubmit={handleSubmit(loginUser)}
                >
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
                        onChange={handleInputs}
                      // onChange={(e) => update1(e)} 
                      />
                      {errors.js_email && <p className='err'>Please check the Email</p>}

                    </div>
                  </div>
                  <div className="col-md-6">
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
                        onChange={handleInputs}
                      // onChange={(e) => update1(e)}
                      />
                      {errors.js_pwd && <p className='err'>Please check the Password</p>}

                    </div>
                    <div className="form-group">
                      {" "}

                      <Link to="/seekersendmail" title="Forget" className="fl-right">Forgot Password?</Link>
                      {/*   <label for="chpass" title="Forget" className="fl-right">Forgot Password?</label>
                      <button style={{ display: "none" }} id="chpass" onClick={onOpenModal}></button>
*/}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group text-center mrg-top-15">
                      {count > 3 ? pwdcheck :
                        <button
                          type="submit"
                          className="btn theme-btn btn-m full-width"
                        >
                          Sign In
                        </button>
                      }
                      {/*<button onClick={googlesignupHandle}>
                    Sign In With Google
                  </button>
                  <Link to="https://jobshubback-19af.onrender.com/auth/google" onClick={googlesignupHandle}>Sign In with Google</Link>*/}
                      {/*<Link to="http://localhost:5000/auth/google" onClick={googlesignupHandle}>
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
                    Don't Have an account ?  <Link to="/seekersignup" title="Home" className="login">
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
  )
}
export default SeekerLogin




// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { useForm } from "react-hook-form";

// import Typewriter from 'typewriter-effect'
// function SeekerLogin() {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const navigate = useNavigate();
//   const [user, setUser] = useState({ js_email: "", js_pwd: "" });
//   // %%%%%%%%%%%% new %%%%%%%%%%%%
//   const handleInputs = (e) => {
//     // e.preventDefault();
//     console.log(e);
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value
//     })
//   }

//   const loginUser = async (e) => {
//     let result = await fetch('https://jobshubback-19af.onrender.com/login', {
//       method: "POST",
//       body: JSON.stringify(user),
//       headers: { "Content-Type": "application/json" }
//     })

//     result = await result.json();
//     if (user.js_email && user.js_pwd) {
//       if (result.status === 1) {
//         localStorage.setItem('seekerToken', result.tok)
//         localStorage.setItem('seekerId', result.id)
//         toast.success("Login Done");
//         navigate('/seditprofile');
//       } else if (result.status === 2) {
//         localStorage.setItem('seekerToken', result.tok)
//         localStorage.setItem('seekerId', result.id)
//         toast.success("Seeker Signin ");
//         navigate('/seekerhome');
//       } else {
//         toast.error('Invalid Credentails');
//       }
//     } else {
//       toast.error('All Feild Required');
//     }
//   }



//   const googlesignupHandle = async () => {
//     const configOption = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }

//     const res = await fetch("https://jobshubback-19af.onrender.com/auth/google", configOption)

//     const result = await res.json()
//     console.log(res);
//     if (res.exist || res.newuser) {

//       navigate('/seekerhome')
//     }
//     // localStorage.setItem('seekerGoogle', result.googleId)

//     // window.open("https://jobshubback-19af.onrender.com/auth/google/callback", "_self")
//   }


//   return (
//     <>


//       <div className="page-title">
//         <div className="container">
//           <div className="page-caption">
//             <h2><Typewriter
//               options={{
//                 autoStart: true,
//                 loop: true,
//               }}
//               onInit={(typewriter) => {
//                 typewriter
//                   .typeString("Sign In An Account")
//                   .pauseFor(2000)
//                   .start()
//               }}

//             /></h2>
//             <p>
//               <Link to="/" title="Home">
//                 Home
//               </Link>{" "}
//               <i className="ti-angle-double-right" /> Login
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* ======================= End Page Title ===================== */}
//       <section className="padd-top-80 padd-bot-80">
//         <div className="container">
//           <div className="log-box">
//             <form className="log-form" method="POST" onSubmit={handleSubmit(loginUser)}
//             >
//               <div className="col-md-6">
//                 <div className="form-group">
//                   <label>Email</label>
//                   <input
//                     type="email"
//                     name="js_email"
//                     className="form-control"
//                     placeholder="Email"
//                     {...register("js_email",
//                       {
//                         required: true,
//                         pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//                       })}
//                     onChange={handleInputs}
//                   // onChange={(e) => update1(e)}
//                   />
//                   {errors.js_email && <p className='err'>Please check the Email</p>}

//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="form-group">
//                   <label>Password</label>
//                   <input
//                     type="password"
//                     name="js_pwd"
//                     className="form-control"
//                     placeholder="********"
//                     {...register("js_pwd", {
//                       required: true,

//                     })}
//                     onChange={handleInputs}
//                   // onChange={(e) => update1(e)}
//                   />
//                   {errors.js_pwd && <p className='err'>Please check the Password</p>}

//                 </div>
//                 <div className="form-group">
//                   {" "}
//                   <button
//                     onClick={{}}
//                     id='mdl'
//                     style={{ display: "none" }}
//                   >
//                     forgot
//                   </button>
//                   {/* <Link to="/seekersendmail" title="Forget" className="fl-right">Forgot Password?</Link>*/}

//                 </div>
//               </div>

//               <div className="col-md-12">
//                 <div className="form-group text-center mrg-top-15">
//                   <button
//                     type="submit"
//                     className="btn theme-btn btn-m full-width"

//                   >
//                     Sign In
//                   </button>
//                   <p>or</p>
//                   <button onClick={googlesignupHandle}>
//                     Sign In With Google
//                   </button>
//                   <Link to="https://jobshubback-19af.onrender.com/auth/google" onClick={googlesignupHandle}>Sign In with Google</Link>
//                 </div>
//               </div>
//               <div className="clearfix" />
//             </form>
//           </div>
//         </div>
//       </section>
//       <div className="row">
//         <div className="col-md-12">
//           <div className="copyright text-center">
//             <p>Copyright © 2023 All Rights Reserved.</p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
// export default SeekerLogin

