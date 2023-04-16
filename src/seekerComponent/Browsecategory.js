import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Seekerfooter from './Seekerfooter';
import SeekHeader from "./SeekHeader";
import Typewriter from 'typewriter-effect'
import Loader from '../Loader';
function Browsecategory() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate an API call with a delay of 3 seconds
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 3000);
  }, []);
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
                      .typeString("Browse by Categories")
                      .pauseFor(2000)
                      .start()
                  }}

                /></h2>
                <p>
                  <Link to="/home" title="Home">
                    Home
                  </Link>{" "}
                  <i className="ti-angle-double-right" /> Browse by Categories
                </p>
              </div>
            </div>
          </div>
          {/* ======================= End Page Title ===================== */}
          {/* ================= Category start ========================= */}
          <section className="padd-top-80 padd-bot-60">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-3 col-sm-6">
                    <Link to="/searchjob" title="">
                      <div className="utf_category_box_area">
                        <div className="utf_category_desc">
                          <div className="utf_category_icon">
                            {" "}
                            <i className="icon-bargraph" aria-hidden="true" />{" "}
                          </div>
                          <div className="category-detail utf_category_desc_text">
                            <h4>Web &amp; Software Dev</h4>

                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Link to="/searchjob" title="">
                      <div className="utf_category_box_area">
                        <div className="utf_category_desc">
                          <div className="utf_category_icon">
                            {" "}
                            <i className="icon-tools" aria-hidden="true" />{" "}
                          </div>
                          <div className="category-detail utf_category_desc_text">
                            <h4>Data Science &amp; Analitycs</h4>

                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Link to="/searchjob" title="">
                      <div className="utf_category_box_area">
                        <div className="utf_category_desc">
                          <div className="utf_category_icon">
                            {" "}
                            <i className="ti-briefcase" aria-hidden="true" />{" "}
                          </div>
                          <div className="category-detail utf_category_desc_text">
                            <h4>Accounting &amp; Consulting</h4>

                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Link to="/searchjob" title="">
                      <div className="utf_category_box_area">
                        <div className="utf_category_desc">
                          <div className="utf_category_icon">
                            {" "}
                            <i className="ti-ruler-pencil" aria-hidden="true" />{" "}
                          </div>
                          <div className="category-detail utf_category_desc_text">
                            <h4>Writing &amp; Translations</h4>

                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Link to="/searchjob" title="">
                      <div className="utf_category_box_area">
                        <div className="utf_category_desc">
                          <div className="utf_category_icon">
                            {" "}
                            <i className="icon-briefcase" aria-hidden="true" />{" "}
                          </div>
                          <div className="category-detail utf_category_desc_text">
                            <h4>Sales &amp; Marketing</h4>

                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Link to="/searchjob" title="">
                      <div className="utf_category_box_area">
                        <div className="utf_category_desc">
                          <div className="utf_category_icon">
                            {" "}
                            <i className="icon-wine" aria-hidden="true" />{" "}
                          </div>
                          <div className="category-detail utf_category_desc_text">
                            <h4>Graphics &amp; Design</h4>

                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Link to="/searchjob" title="">
                      <div className="utf_category_box_area">
                        <div className="utf_category_desc">
                          <div className="utf_category_icon">
                            {" "}
                            <i className="ti-world" aria-hidden="true" />{" "}
                          </div>
                          <div className="category-detail utf_category_desc_text">
                            <h4>Digital Marketing</h4>

                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Link to="/searchjob" title="">
                      <div className="utf_category_box_area">
                        <div className="utf_category_desc">
                          <div className="utf_category_icon">
                            {" "}
                            <i className="ti-desktop" aria-hidden="true" />{" "}
                          </div>
                          <div className="category-detail utf_category_desc_text">
                            <h4>Education &amp; Training</h4>

                          </div>
                        </div>
                      </div>
                    </Link>
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

export default Browsecategory