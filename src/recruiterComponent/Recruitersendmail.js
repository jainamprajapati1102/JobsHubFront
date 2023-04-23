import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Recruiterfooter from './Recruiterfooter';
import Typewriter from 'typewriter-effect'
import Loader from '../Loader';
function Recruitersendmail() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // simulate an API call with a delay of 3 seconds
        setTimeout(() => {
            setData("Some data");
            setIsLoading(false);
        }, 3000);
    }, []);
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState('');
    const handle = (e) => {
        setEmail({
            ...email,
            [e.target.name]: e.target.value
        })
    }
    const send = async (e) => {
        e.preventDefault();
        const res = await fetch("https://jobshubback-19af.onrender.com/recmail", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(email)
        })
        const data = await res.json();
        if (data.status === 401 || !data) {
            window.alert('error')
        } else {
            setEmail("");
            setMsg(true);
        }
    }
    return (

        <>
            {isLoading ? <Loader /> : <div>
                <>
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
                                            .typeString("Forgot Password")
                                            .pauseFor(2000)
                                            .start()
                                    }}

                                /></h2>
                                <p>
                                    <a href="#" title="Home">
                                        Home
                                    </a>{" "}
                                    <i className="ti-angle-double-right" /> Send Mail
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ======================= End Page Title ===================== */}
                    {/* ================ Change Password ======================= */}
                    {/**/} <section className="padd-top-80 padd-bot-80">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-12 col-sm-12 col-xs-12" style={{ display: "flex", justifyContent: "center" }}>
                                    <div className="profile_detail_block" style={{ width: '50%' }}>
                                        {msg ? <p style={{ color: "green", fontWeight: "bold" }}>Password reset Link Send Successfully in Your Email</p> : ""}
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label>Send Email</label>
                                                <input
                                                    type="text"
                                                    name='cmp_email'
                                                    className="form-control"
                                                    onChange={handle}
                                                    placeholder="Email Id"
                                                />
                                            </div>
                                        </div>

                                        <div className="clearfix" />
                                        <div className="col-md-12 padd-top-10 text-center">
                                            {" "}
                                            <a className="btn btn-m theme-btn full-width" onClick={send}>
                                                Send Link
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <></>
                </>
            </div>}
        </>
    )
}

export default Recruitersendmail