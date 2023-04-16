import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Seekerfooter from './Seekerfooter';
import SeekHeader from "./SeekHeader";
import Typewriter from 'typewriter-effect'
import Loader from '../Loader';
function Changepassword() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // simulate an API call with a delay of 3 seconds
        setTimeout(() => {
            setData("Some data");
            setIsLoading(false);
        }, 3000);
    }, []);
    const navigate = useNavigate();
    const [newpass, setNewpass] = useState("");
    const [accesstoken] = useState(localStorage.getItem('seekerToken'));
    const inputhandle = (e) => {
        setNewpass({ ...newpass, [e.target.name]: e.target.value })
    }
    const changepass = async () => {
        console.log("")
        const configOPtion = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${accesstoken}`,
            },
            body: JSON.stringify(newpass)
        }

        const response = await fetch('https://jobshubback-bry5.onrender.com/changepass', configOPtion)
        const result = await response.json()
        console.log(`---->${result.status}`)
        if (result.status === 201) {
            toast.success("Your Password Successfully Change")
            navigate('/seekerlogin')
        } else {
            toast.error("Your Password Not Change Yet!!")
        }
    }
    return (
        <>
            {isLoading ? <Loader /> : <div>
                <SeekHeader />
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
                                            .typeString("Change Password")
                                            .pauseFor(2000)
                                            .start()
                                    }}

                                /></h2>
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
                                <div className="col-md-3">
                                    <div id="leftcol_item">
                                        <div className="user_dashboard_pic">
                                            {" "}
                                            <img alt="user photo" src="assets/img/user-profile.png" />{" "}
                                            <span className="user-photo-action">User Title</span>{" "}
                                        </div>
                                    </div>
                                    <div className="dashboard_nav_item">
                                        <ul>
                                            <li className="active">
                                                <a href="change-password.html">
                                                    <i className="login-icon ti-key" /> Change Password
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="login-icon ti-power-off" /> Logout
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="profile_detail_block">
                                        <div className="col-md-4 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <label>Old Password</label>
                                                <input
                                                    type="text"
                                                    name='oldpwd'
                                                    onChange={inputhandle}
                                                    className="form-control"
                                                    placeholder="***********"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <label>New Password</label>
                                                <input
                                                    type="password"
                                                    name='updatedpass'
                                                    onChange={inputhandle}
                                                    className="form-control"
                                                    placeholder="***********"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <label>Canform Password</label>
                                                <input
                                                    type="password"
                                                    name='updateconpass'
                                                    onChange={inputhandle}
                                                    className="form-control"
                                                    placeholder="***********"
                                                />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                        <div className="col-md-12 padd-top-10 text-center">
                                            {" "}
                                            <button
                                                type="button"
                                                className="btn theme-btn btn-m full-width"
                                                onClick={changepass}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>

                <Seekerfooter />
            </div>}
        </>
    )
}
export default Changepassword