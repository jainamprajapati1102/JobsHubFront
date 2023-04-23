import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Load from "../Load";
import RecHeader from "./RecHeader";
import Recruiterfooter from "./Recruiterfooter";
import useRazorpay from "react-razorpay";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Typewriter from 'typewriter-effect';
import Loader from '../Loader';
function Payment() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // simulate an API call with a delay of 3 seconds
        setTimeout(() => {
            setData("Some data");
            setIsLoading(false);
        }, 1000);
    }, []);
    const [accesstoken] = useState(localStorage.getItem("recruiterToken"));
    const navigate = useNavigate();
    const paymentHandler = async (amount, packagename) => {
        let _data = { amount, packagename }
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(_data),
        };
        const response = await fetch("https://jobshubback-19af.onrender.com/order", requestOptions)
        const result = await response.json();
        razerpayopenHandle(result.data, packagename, amount)
    }



    const razerpayopenHandle = (data, packagename, amount) => {
        var options = {
            key: "rzp_test_9nfVtZEUhhp81B",
            amount: Number(amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: data.currency,
            name: "JOB'S HUB",
            description: "Test Transaction",
            image: "assets/img/blwhole-payment.png.jpg",
            order_id: data.id,
            notes: {
                "address": "JOB'S HUB payment"
            },
            theme: {
                "color": "#009ee5"
            },
            handler: async (response) => {
                const requestOptions1 = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${accesstoken}`,
                    },
                    body: JSON.stringify({ ...response, packagename }),
                };
                const res = await fetch('https://jobshubback-19af.onrender.com/verify', requestOptions1)
                const result = await res.json();
                if (result.status === 200) {
                    toast.success("payment success");
                    navigate('/recruiterhome')
                }
                else {
                    toast.error('payment failed please try again later')
                    navigate('/payment')
                }
            },
        }
        const rzp = new window.Razorpay(options)
        rzp.open();
    }

    return (
        <>
            {isLoading ? <Loader /> : <div>
                <Load />
                <RecHeader />
                <>
                    <link
                        href="https://fonts.googleapis.com/css?family=Lato:400,300,700,100"
                        rel="stylesheet"
                        type="text/css"
                    />


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
                                            .typeString("Subscription")
                                            .pauseFor(2000)
                                            .start()
                                    }}

                                /></h2>
                                <p>
                                    <Link to="/recruiterhome" title="Home">
                                        Home
                                    </Link>{" "}
                                    <i className="ti-angle-double-right" /> Subscription
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ======================= End Page Title ===================== */}
                    <a target="blank" href="http://www.digimadmedia.com"></a>
                    <div className="price-table-wrapper">
                        {/* <a target="blank" href="http://www.digimadmedia.com"></a> */}
                        <div className="pricing-table">
                            {/* <a target="blank" href="http://www.digimadmedia.com"> </a> */}
                            <h2 className="pricing-table__header">- PLATINUM -</h2>
                            <h3 className="pricing-table__price">4000 <span style={{ fontFamily: "sans-serif" }}>&#8377; </span></h3>
                            <button id='buy' style={{ border: "none", width: "100%" }} className="pricing-table__button" onClick={() => paymentHandler(4000, "PLATINUM")}>PLATINUM</button>


                            <ul className="pricing-table__list">
                                <li>4 Job Post</li>
                                <li>Unlimited Resume Access</li>
                                <li>24 hour support</li>
                            </ul>
                        </div>


                        <div className="pricing-table featured-table">
                            <h2 className="pricing-table__header">- GOLD -</h2>
                            <h3 className="pricing-table__price" style={{ color: "#dab842" }}>2000 <span style={{ fontFamily: "sans-serif" }}>&#8377; </span></h3>
                            <button className="pricing-table__button_gld" style={{ border: "none", width: "100%" }} onClick={() => paymentHandler(2000, "GOLD")}>GOLD</button>

                            <ul className="pricing-table__list">

                                <li>2 Job Post</li>
                                <li>Unlimited Resume Access</li>
                                <li>Only Company Working Time</li>
                            </ul>
                        </div>


                        <div className="pricing-table">
                            <h2 className="pricing-table__header">- SILVER -</h2>
                            <h3 className="pricing-table__price" style={{ color: "#7e888e" }}>1000 <span style={{ fontFamily: "sans-serif" }}>&#8377; </span></h3>
                            <button id='buy' className="pricing-table__button_slv" style={{ border: "none", width: "100%" }} onClick={() => paymentHandler(1000, "SILVER")}>SILVER</button>

                            <ul className="pricing-table__list">

                                <li>1 Job Post</li>
                                <li>Unlimited Resume Access</li>
                                <li>No Support</li>
                            </ul>
                        </div>
                    </div>


                    <Recruiterfooter />
                </>
            </div>}
        </>
    );
}

export default Payment;