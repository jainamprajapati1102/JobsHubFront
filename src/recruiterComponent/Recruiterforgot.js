import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OTPInput, { ResendOTP } from "otp-input-react";
import Loader from "../Loader";

function Recruiterforgot() {
    const [OTP, setOTP] = useState("");//for otp input
    const [data, setData] = useState({
        cmp_email: "",
        newpwd: "",
        conpwd: "",
    });
    const navigate = useNavigate();
    const [step, setstep] = useState(0);//step form
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState('');
    const handleChange = async (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handle = (e) => {
        setEmail({ ...email, [e.target.name]: e.target.value })
    }
    const OtpRequestFunction = async (e) => {
        //     //  form Validation
        e.preventDefault();
        const res = await fetch("https://jobshubback-19af.onrender.com/recmail", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const result = await res.json();
        if (result.status === 401 || !result) {
            toast.error(result.err)
        } else {
            // window.alert("send");
            toast.success('Mail Send For Forgot Password')
            setEmail("");
            setstep(step + 1)

        }
    };

    const verifyOtpf = async () => {
        //     //  form Validation\
        if (OTP == "") {
            toast.error("Plaese Enter OTP")
        } else {
            const veri = {
                otp: OTP, cmp_email: data.cmp_email
            }
            const config = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(veri)
            }
            const resp = await fetch("https://jobshubback-19af.onrender.com/recruiterverifyotp", config);
            var result = await resp.json();
            if (result.status === 201) {
                toast.success(result.msg);
                setstep(step + 1);
            } else {
                toast.error(result.msg);
            }
        }
    };

    const changepassword = async () => {
        if (data.newpwd == data.conpwd) {
            const config = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
            const response = await fetch("https://jobshubback-19af.onrender.com/recruiterforgot", config);
            const result = await response.json()
            if (result.status === 201) {
                toast.success(result.msg)
                navigate('/recruiterlogin')
            } else {
                toast.error(result.msg)
            }
        } else {
            toast.error("New Password & Confirm Password Always Same")
        }
    };
    const [dataa, setDataa] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setDataa("Some data");
            setIsLoading(false);
        }, 1000);
    }, []);
    return (
        <>
            {isLoading ? <Loader /> : <div>
                {/* ======================= Page Title ===================== */}
                <div className="page-title">
                    <div className="container">
                        <div className="page-caption">
                            <h2>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("Forgot Password")
                                            .pauseFor(2000)
                                            .start();
                                    }}
                                />
                            </h2>
                            <p>
                                <Link to="/home" title="Home">Home</Link>
                                <i className="ti-angle-double-right" /> Forgot Password
                            </p>
                        </div>
                    </div>
                </div>
                {/* ======================= End Page Title ===================== */}
                {/* ================ Change Password ======================= */}
                {step == 0 ? (
                    <>
                        <section className="padd-top-80 padd-bot-80">
                            <div className="container">
                                <center>
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <div
                                                className="profile_detail_block"
                                                style={{ width: "50%" }}
                                            >
                                                <div className="col-md-12 col-sm-12 col-xs-12">
                                                    <div className="form-group">
                                                        <label>Enter Your Email</label>
                                                        <input
                                                            type="text"
                                                            name="cmp_email"
                                                            className="form-control"
                                                            placeholder="Enter Your Email"
                                                            onChange={(e) => handleChange(e)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="clearfix" />
                                                <div className="col-md-12 padd-top-10 text-center">
                                                    {" "}
                                                    <button
                                                        className="btn btn-m theme-btn full-width"
                                                        type="button"
                                                        onClick={OtpRequestFunction}
                                                    >
                                                        Send Otp
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </center>
                            </div>
                        </section>
                    </>
                ) : step == 1 ? (
                    <>
                        <section className="padd-top-80 padd-bot-80">
                            <div className="container">
                                <center>
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <div
                                                className="profile_detail_block"
                                                style={{ width: "50%" }}
                                            >
                                                <div className="col-md-12 col-sm-12 col-xs-12">
                                                    <div className="form-group">
                                                        <label>Enter Your Otp</label>
                                                        <div className="otp">

                                                            <OTPInput
                                                                value={OTP} autoFocus OTPLength={6}
                                                                renderSeparator=" true"
                                                                onChange={setOTP}
                                                                otpType="number" style={{
                                                                    display: "flex",
                                                                    justifyContent: "center",
                                                                }} disabled={false} secure />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="clearfix" />
                                                <div className="col-md-12 padd-top-10 text-center">
                                                    {" "}
                                                    <button
                                                        className="btn btn-m theme-btn full-width"
                                                        type="button"
                                                        onClick={() => verifyOtpf()}
                                                    >
                                                        Verify
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </center>
                            </div>
                        </section>
                    </>
                ) : (
                    <>
                        <section className="padd-top-80 padd-bot-80">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-9 ">
                                        <div className="profile_detail_block">
                                            <center>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <div className="form-group">
                                                        <label>New Password</label>
                                                        <input
                                                            type="password"
                                                            name="newpwd"
                                                            onChange={(e) => {
                                                                handleChange(e);
                                                            }}
                                                            className="form-control"
                                                            placeholder="*****"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <div className="form-group">
                                                        <label>Confirm Password</label>
                                                        <input
                                                            type="password"
                                                            name="conpwd"
                                                            className="form-control"
                                                            placeholder="*****"
                                                            onChange={(e) => {
                                                                handleChange(e);
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="clearfix" />
                                                <div className="col-md-12 padd-top-10 text-center">
                                                    {" "}
                                                    <button
                                                        className="btn btn-m theme-btn full-width"
                                                        type="button"
                                                        onClick={changepassword}
                                                    >
                                                        Update
                                                    </button>
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </div>}
        </>
    );
}

export default Recruiterforgot;