import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import Typewriter from 'typewriter-effect'
import Loader from '../Loader';
function Recruiterforgot() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // simulate an API call with a delay of 3 seconds
        setTimeout(() => {
            setData("Some data");
            setIsLoading(false);
        }, 3000);
    }, []);
    const { id, token } = useParams();
    const [pwd, setPwd] = useState();
    const navigate = useNavigate();
    const handleInput = (e) => {
        setPwd({
            ...pwd,
            [e.target.name]: e.target.value
        })
    }

    const userValid = async () => {
        const res = await fetch(`https://jobshubback-bry5.onrender.com/recruiterforgot/${id}/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data)
        if (data.status == 201) {
            // toast.sus
            console.log("useer valid")
        } else {
            navigate('/*')
        }
    }

    useEffect(() => {
        userValid();
    }, [])
    const submit = async (req, res) => {
        const configOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(pwd)
        }

        const data = await fetch(`https://jobshubback-bry5.onrender.com/recruiterforgot/${id}/${token}`, configOption)
        const result = await data.json();
        console.log(result.status)
        if (result.status === 201) {
            toast.success("Password Change Success")
            navigate('/recruiterlogin');
            setPwd("");
        } else {
            toast.error("Your Token Expire Create New Link")
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
                                            .typeString("Change Password")
                                            .pauseFor(2000)
                                            .start()
                                    }}

                                /></h2>
                                <p>
                                    <a href="#" title="Home">
                                        Home
                                    </a>{" "}
                                    <i className="ti-angle-double-right" /> Forgot Password
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ======================= End Page Title ===================== */}
                    {/* ================ Change Password ======================= */}
                    <section className="padd-top-80 padd-bot-80">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-12">
                                    <div className="profile_detail_block">
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label>New Password</label>
                                                <input
                                                    type="password"
                                                    name='cmp_pwd'
                                                    // value={pwd.js_pwd}
                                                    onChange={handleInput}
                                                    className="form-control"
                                                    placeholder="***********"
                                                />
                                            </div>
                                        </div>


                                        <div className="clearfix" />
                                        <div className="col-md-12 padd-top-10 text-center">
                                            {" "}
                                            <a href="#" className="btn btn-m theme-btn full-width" onClick={submit}>
                                                Submit
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            </div>}
        </>

    )
}

export default Recruiterforgot