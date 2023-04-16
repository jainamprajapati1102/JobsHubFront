import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Forgotpassword() {

    const [email, setEmail] = useState('');
    const handle = (e) => {
        setEmail({
            ...email,
            [e.target.name]: e.target.value
        })
    }
    const send = async (e) => {
        e.preventDefault();
        const res = await fetch("https://jobshubback-bry5.onrender.com/mail", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(email)
        })
        // console.log(res)

        // const data = await res.json();
        if (res.status === 401 || !res) {
            window.alert('error')
        } else {
            window.alert("send");
            setEmail('');
        }
    }
    return (


        <>
            {/* ======================= Page Title ===================== */}
            <div className="page-title">
                <div className="container">
                    <div className="page-caption">
                        <h2>change password</h2>
                        <p>
                            <a href="#" title="Home">
                                Home
                            </a>{" "}
                            <i className="ti-angle-double-right" /> Change Password
                        </p>
                    </div>
                </div>
            </div>
            {/* ======================= End Page Title ===================== */}
            {/* ================ Change Password ======================= */}
            <section className="padd-top-80 padd-bot-80">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="profile_detail_block">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label>Send Email</label>
                                        <input
                                            type="text"
                                            name='js_email'
                                            className="form-control"
                                            onChange={handle}
                                            placeholder="Email Id"
                                        />
                                    </div>
                                </div>

                                <div className="clearfix" />
                                <div className="col-md-12 padd-top-10 text-center">
                                    {" "}
                                    <a className="btn btn-m theme-btn full-width" onClick={send
                                    }>
                                        Update
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="profile_detail_block">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label>Send Email</label>
                                        <input
                                            type="text"
                                            name='js_email'
                                            className="form-control"
                                            onChange={handle}
                                            placeholder="Email Id"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="form-group">
                                        <label>Canform Password</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="***********"
                                        />
                                    </div>
                                </div>

                                <div className="clearfix" />
                                <div className="col-md-12 padd-top-10 text-center">
                                    {" "}
                                    <a className="btn btn-m theme-btn full-width" onClick={send
                                    }>
                                        Update
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default Forgotpassword