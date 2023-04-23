import React, { useEffect, useState } from 'react'

import RecHeader from './RecHeader'
import { Link, useNavigate } from 'react-router-dom'
import Recruiterfooter from './Recruiterfooter'
import ReactWhatsapp from 'react-whatsapp';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from '../Loader'
function Recruiterhome() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate an API call with a delay of 3 seconds
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
  }, []);
  const [accesstoken] = useState(localStorage.getItem('recruiterToken'));
  const navigate = useNavigate();

  return (
    <>
      {isLoading ? <Loader /> : <div>
        <RecHeader />
        <>
          <div
            className="utf_main_banner_area"
            style={{ backgroundImage: "url(assets/img/slider_bg.jpg)" }}
            data-overlay={8}
          >
            <div className="container">
              <div className="col-md-8 col-sm-10">
                <div className="caption cl-white home_two_slid">
                  <h2>
                    Connect With Top <span className="theme-cl">Talent</span>{" "}
                    In No Time.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* ================= How to post job ========================= */}
          <section className="utf_job_category_area">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <div className="heading">
                    <h2>How to Post a Job?</h2>
                    <p>
                      FOLLOW THIS STEPS
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-4 col-sm-6">
                    <a title="">
                      <div className="utf_category_box_area">
                        <div>
                          <div className="utf_category_desc">
                            <div className="utf_category_icon">
                              {" "}
                              <i className="ti-lock" aria-hidden="true" />{" "}
                            </div>
                            <div className="category-detail utf_category_desc_text">
                              <h4>Log in</h4>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p>
                            First you have to login in Job'sHub site then you can post any job.
                          </p>
                        </div>
                      </div>

                    </a>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <a href="browse-job.html" title="">
                      <div className="utf_category_box_area">
                        <div>
                          <div className="utf_category_desc">
                            <div className="utf_category_icon">
                              {" "}
                              <i className="ti-user" aria-hidden="true" />{" "}
                            </div>
                            <div className="category-detail utf_category_desc_text">
                              <h4>New? Register Now</h4>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p>
                            If you are not register person then you should register your information to get extra benefits.
                          </p>
                        </div>
                      </div>

                    </a>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <a href="browse-job.html" title="">
                      <div className="utf_category_box_area">
                        <div>
                          <div className="utf_category_desc">
                            <div className="utf_category_icon">
                              {" "}
                              <i className="ti-pencil-alt" aria-hidden="true" />{" "}
                            </div>
                            <div className="category-detail utf_category_desc_text">
                              <h4>Manage Your Profile</h4>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p>
                            You can Manage Your Profile which is shown by job seeker.
                          </p>
                        </div>
                      </div>

                    </a>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <a href="browse-job.html" title="">
                      <div className="utf_category_box_area">
                        <div>
                          <div className="utf_category_desc">
                            <div className="utf_category_icon">
                              {" "}
                              <i className="ti-pencil" aria-hidden="true" />{" "}
                            </div>
                            <div className="category-detail utf_category_desc_text">
                              <h4>Post Job</h4>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p>
                            You can post a job by adding information about require job.
                          </p>
                        </div>
                      </div>

                    </a>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <a href="browse-job.html" title="">
                      <div className="utf_category_box_area">
                        <div>
                          <div className="utf_category_desc">
                            <div className="utf_category_icon">
                              {" "}
                              <i className="ti-settings" aria-hidden="true" />{" "}
                            </div>
                            <div className="category-detail utf_category_desc_text">
                              <h4>Manage Job</h4>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p>
                            You can manage details of job posts which are posted by you for difference requirements.
                          </p>
                        </div>
                      </div>

                    </a>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <a href="browse-job.html" title="">
                      <div className="utf_category_box_area">
                        <div>
                          <div className="utf_category_desc">
                            <div className="utf_category_icon">
                              {" "}
                              <i className="ti-comment" aria-hidden="true" />{" "}
                            </div>
                            <div className="category-detail utf_category_desc_text">
                              <h4>Receive Message</h4>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p>
                            Receive seeker details who is apply for your posted job to check and give response.
                          </p>
                        </div>
                      </div>

                    </a>
                  </div>


                </div>
              </div>
            </div>
          </section>
          {/* ================= Category start ========================= */}

          <ReactWhatsapp
            number="917016332838"
            message="Hello!!! Can You Help Me ?"
            style={{
              background: "transparent",
              border: "none",
              position: "fixed",
              left: "5px",
              bottom: "24px",
              zIndex: "999999",
            }}
          >
            <img
              src="assets/img/gif.gif"
              className="logotext"
              style={{
                color: "#ffffff",
                height: "50px",
                width: "50px",
                borderRadius: "50%",
              }}
            />
          </ReactWhatsapp>
        </>
        <Recruiterfooter />
      </div>}

    </>
  )
}

export default Recruiterhome