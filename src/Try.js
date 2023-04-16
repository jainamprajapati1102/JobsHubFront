import React, { useState } from "react";
import { Link } from "react-router-dom";
import Load from "../Load";
import ReactWhatsapp from "react-whatsapp";
import { review } from "../api/common_api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactStars from "react-rating-stars-component";
function Try() {
    const userData = JSON.parse(localStorage.getItem("userdata")); //for fill data from registration
    const [rating, setrating] = useState(0);

    const [data, setdata] = useState();
    function update(e) {
        // console.log(e, "fdf");
        setdata(e.target.value);
    }
    const handlechange = (newrating) => {
        setrating(newrating);
        console.log(newrating, "newrating");
    };
    let reviewdata = "";

    async function submit() {
        // console.log(data, "data");
        // console.log(rating, "rating");
        reviewdata = { description: data, ratingstar: rating, jsid: userData.jsid };
        const response = await review(reviewdata);
        if (response.status === 1) {
            toast("Review Successfully");
        } else {
            toast.error("Something Is Wrong");
        }
    }
    return (
        <>
            <Load />
            {/* ================= footer start ========================= */}

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-4">
                            <a href="index-2.html">
                                <img
                                    className="footer-logo"
                                    src="assets/img/blwhole.png"
                                    alt=""
                                />
                            </a>
                            <p>
                                Job'sHub is company which provide online platform for you if you
                                need any job or you want to hire someone for your work.
                            </p>
                            {/* Social Box */}
                        </div>

                        <div class="col-md-9 col-sm-8">
                            <div class="row">
                                <div className="col-md-3 col-sm-6">
                                    <h4>Quick Links</h4>
                                    <ul>
                                        <li>
                                            <Link to="/seekerhome">
                                                <i className="fa fa-angle-double-right" /> Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/searchjob">
                                                <i className="fa fa-angle-double-right" /> Search Job
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/seekerprofile">
                                                <i className="fa fa-angle-double-right" /> Seeker
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/resumedetail">
                                                <i className="fa fa-angle-double-right" /> Resume Detail
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contactuss">
                                                <i className="fa fa-angle-double-right" /> Contact us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <h4>Our Services</h4>

                                    <ul>
                                        <li>
                                            <i className="fa fa-angle-double-right" /> Search Job
                                        </li>
                                        <li>
                                            <i className="fa fa-angle-double-right" /> Apply For Job
                                        </li>
                                        <li>
                                            <i className="fa fa-angle-double-right" /> Manage Profile
                                        </li>
                                        <li>
                                            <i className="fa fa-angle-double-right" /> Contact Us
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <h4>Get In Touch</h4>
                                    <div className="f-social-box">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-facebook facebook-cl" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-google google-plus-cl" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-twitter twitter-cl" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-instagram instagram-cl" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <h4>Rate Us</h4>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            name="ratingstar"
                                            onChange={handlechange}
                                            size={35}
                                            activeColor="#ffd700"
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                        />
                                    </div>
                                    <br />
                                    <div>
                                        <textarea
                                            className="form-control"
                                            placeholder="Feedback"
                                            name="description"
                                            rows={2}
                                            cols={5}
                                            onChange={(e) => update(e)}
                                        />
                                    </div>
                                    <br />
                                    <div className="text-center">
                                        <button
                                            type="button"
                                            className="btn btn-m theme-btn full-width"
                                            onClick={(e) => submit(e)}
                                        >
                                            Rate Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="copyright text-center">
                            <p>Copyright © 2023 All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
            <div>
                <Link to="/" className="scrollup">
                    Scroll
                </Link>
            </div>

        </>
    );
}

export default Try;