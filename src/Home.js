import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'
import Load from './Load'
import ReactWhatsapp from 'react-whatsapp';
import Loader from './Loader'
function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    // simulate an API call with a delay of 3 seconds
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 3000);
  }, []);

  const [indus, setIndus] = useState([]);
  useEffect(() => {
    calljobs()
  }, [])
  const calljobs = async () => {

    const configOption = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
    const res = await fetch('http://localhost:5000/homeviewindustry', configOption);
    const data = await res.json();
    setIndus(data);
  }
  return (
    <>
      {isLoading ? <Loader /> : <div>
        <>
          <Header />
          {/* ======================= Start Banner ===================== */}
          <div
            className="utf_main_banner_area"
            style={{ backgroundImage: "url(assets/img/jobbg2.jpeg)" }}
            data-overlay={8}
          >
            <div className="container">
              <div className="col-md-8 col-sm-10">
                <div className="caption cl-white home_two_slid">
                  <h2>
                    Join The Workforce  <span className="theme-cl">Revolution</span>{" "}
                  </h2>

                </div>

              </div>
            </div>
          </div>
          {/* ======================= End Banner ===================== */}
          {/* ================= Job start ========================= */}
          {/* <section className="padd-top-80 padd-bot-80">
    <div className="container">
    
      <div className="tab-content">
        <div
          className="tab-pane fade in show active"
          id="recent"
          role="tabpanel"
        >
          <div className="row">
            Single Job
            <div className="col-md-3 col-sm-6">
              <div className="utf_grid_job_widget_area">
                {" "}
                <span className="job-type full-type">Full Time</span>
                <div className="utf_job_like">
                  <label className="toggler toggler-danger">
                    <input type="checkbox" defaultChecked="" />
                    <i className="fa fa-heart" />
                  </label>
                </div>
                <div className="u-content">
                  <div className="avatar box-80">
                    {" "}
                    <a href="employer-detail.html">
                      {" "}
                      <img
                        className="img-responsive"
                        src="assets/img/company_logo_1.png"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                  <h5>
                    <a href="employer-detail.html">Product Redesign</a>
                  </h5>
                  <p className="text-muted">2708 Scenic Way, IL 62373</p>
                </div>
                <div className="utf_apply_job_btn_item">
                  {" "}
                  <a
                    href="job-detail.html"
                    className="btn job-browse-btn btn-radius br-light"
                  >
                    Apply Now
                  </a>{" "}
                </div>
              </div>
            </div>
            Single Job
            <div className="col-md-3 col-sm-6">
              <div className="utf_grid_job_widget_area">
                {" "}
                <span className="job-type full-type">Full Time</span>
                <div className="utf_job_like">
                  <label className="toggler toggler-danger">
                    <input type="checkbox" />
                    <i className="fa fa-heart" />
                  </label>
                </div>
                <div className="u-content">
                  <div className="avatar box-80">
                    {" "}
                    <a href="employer-detail.html">
                      {" "}
                      <img
                        className="img-responsive"
                        src="assets/img/company_logo_2.png"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                  <h5>
                    <a href="employer-detail.html">New Product Mockup</a>
                  </h5>
                  <p className="text-muted">2708 Scenic Way, IL 62373</p>
                </div>
                <div className="utf_apply_job_btn_item">
                  {" "}
                  <a
                    href="job-detail.html"
                    className="btn job-browse-btn btn-radius br-light"
                  >
                    Apply Now
                  </a>{" "}
                </div>
              </div>
            </div>
            Single Job
            <div className="col-md-3 col-sm-6">
              <div className="utf_grid_job_widget_area">
                {" "}
                <span className="job-type part-type">Part Time</span>
                <div className="utf_job_like">
                  <label className="toggler toggler-danger">
                    <input type="checkbox" defaultChecked="" />
                    <i className="fa fa-heart" />
                  </label>
                </div>
                <div className="u-content">
                  <div className="avatar box-80">
                    {" "}
                    <a href="employer-detail.html">
                      {" "}
                      <img
                        className="img-responsive"
                        src="assets/img/company_logo_3.png"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                  <h5>
                    <a href="employer-detail.html">Custom Php Developer</a>
                  </h5>
                  <p className="text-muted">3765 C Street, Worcester</p>
                </div>
                <div className="utf_apply_job_btn_item">
                  {" "}
                  <a
                    href="job-detail.html"
                    className="btn job-browse-btn btn-radius br-light"
                  >
                    Apply Now
                  </a>{" "}
                </div>
              </div>
            </div>
          
            Single Job
            <div className="col-md-3 col-sm-6">
              <div className="utf_grid_job_widget_area">
                {" "}
                <span className="job-type internship-type">Internship</span>
                <div className="utf_job_like">
                  <label className="toggler toggler-danger">
                    <input type="checkbox" defaultChecked="" />
                    <i className="fa fa-heart" />
                  </label>
                </div>
                <div className="u-content">
                  <div className="avatar box-80">
                    {" "}
                    <a href="employer-detail.html">
                      {" "}
                      <img
                        className="img-responsive"
                        src="assets/img/company_logo_5.png"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                  <h5>
                    <a href="employer-detail.html">Web Maintenence</a>
                  </h5>
                  <p className="text-muted">2708 Scenic Way, IL 62373</p>
                </div>
                <div className="utf_apply_job_btn_item">
                  {" "}
                  <a
                    href="job-detail.html"
                    className="btn job-browse-btn btn-radius br-light"
                  >
                    Apply Now
                  </a>{" "}
                </div>
              </div>
            </div>
            
          </div>
        </div>
        Featured Job
        <div className="tab-pane fade" id="featured" role="tabpanel">
          <div className="row">
            Single Job
            <div className="col-md-3 col-sm-6">
              <div className="utf_grid_job_widget_area">
                {" "}
                <span className="job-type full-type">Full Time</span>
                <div className="utf_job_like">
                  <label className="toggler toggler-danger">
                    <input type="checkbox" />
                    <i className="fa fa-heart" />
                  </label>
                </div>
                <div className="u-content">
                  <div className="avatar box-80">
                    {" "}
                    <a href="employer-detail.html">
                      {" "}
                      <img
                        className="img-responsive"
                        src="assets/img/company_logo_6.png"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                  <h5>
                    <a href="employer-detail.html">.Net Developer</a>
                  </h5>
                  <p className="text-muted">2708 Scenic Way, IL 62373</p>
                </div>
                <div className="utf_apply_job_btn_item">
                  {" "}
                  <a
                    href="job-detail.html"
                    className="btn job-browse-btn btn-radius br-light"
                  >
                    Apply Now
                  </a>{" "}
                </div>
              </div>
            </div>
            Single Job
            <div className="col-md-3 col-sm-6">
              <div className="utf_grid_job_widget_area">
                {" "}
                <span className="job-type full-type">Full Time</span>
                <div className="utf_job_like">
                  <label className="toggler toggler-danger">
                    <input type="checkbox" />
                    <i className="fa fa-heart" />
                  </label>
                </div>
                <div className="u-content">
                  <div className="avatar box-80">
                    {" "}
                    <a href="employer-detail.html">
                      {" "}
                      <img
                        className="img-responsive"
                        src="assets/img/company_logo_4.png"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                  <h5>
                    <a href="employer-detail.html">Java Developer</a>
                  </h5>
                  <p className="text-muted">2708 Scenic Way, IL 62373</p>
                </div>
                <div className="utf_apply_job_btn_item">
                  {" "}
                  <a
                    href="job-detail.html"
                    className="btn job-browse-btn btn-radius br-light"
                  >
                    Apply Now
                  </a>{" "}
                </div>
              </div>
            </div>
            Single Job
            <div className="col-md-3 col-sm-6">
              <div className="utf_grid_job_widget_area">
                {" "}
                <span className="job-type part-type">Full Time</span>
                <div className="utf_job_like">
                  <label className="toggler toggler-danger">
                    <input type="checkbox" />
                    <i className="fa fa-heart" />
                  </label>
                </div>
                <div className="u-content">
                  <div className="avatar box-80">
                    {" "}
                    <a href="employer-detail.html">
                      {" "}
                      <img
                        className="img-responsive"
                        src="assets/img/company_logo_5.png"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                  <h5>
                    <a href="employer-detail.html">Web Maintenence</a>
                  </h5>
                  <p className="text-muted">3765 C Street, Worcester</p>
                </div>
                <div className="utf_apply_job_btn_item">
                  {" "}
                  <a
                    href="job-detail.html"
                    className="btn job-browse-btn btn-radius br-light"
                  >
                    Apply Now
                  </a>{" "}
                </div>
              </div>
            </div>
            Single Job
            <div className="col-md-3 col-sm-6">
              <div className="utf_grid_job_widget_area">
                {" "}
                <span className="job-type part-type">Part Time</span>
                <div className="utf_job_like">
                  <label className="toggler toggler-danger">
                    <input type="checkbox" />
                    <i className="fa fa-heart" />
                  </label>
                </div>
                <div className="u-content">
                  <div className="avatar box-80">
                    {" "}
                    <a href="employer-detail.html">
                      {" "}
                      <img
                        className="img-responsive"
                        src="assets/img/company_logo_1.png"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                  <h5>
                    <a href="employer-detail.html">Wordpress Developer</a>
                  </h5>
                  <p className="text-muted">2719 Duff Avenue, Winooski</p>
                </div>
                <div className="utf_apply_job_btn_item">
                  {" "}
                  <a
                    href="job-detail.html"
                    className="btn job-browse-btn btn-radius br-light"
                  >
                    Apply Now
                  </a>{" "}
                </div>
              </div>
            </div>
            Single Job
            <div className="col-md-3 col-sm-6">
              <div className="utf_grid_job_widget_area">
                {" "}
                <span className="job-type internship-type">Internship</span>
                <div className="utf_job_like">
                  <label className="toggler toggler-danger">
                    <input type="checkbox" />
                    <i className="fa fa-heart" />
                  </label>
                </div>
                <div className="u-content">
                  <div className="avatar box-80">
                    {" "}
                    <a href="employer-detail.html">
                      {" "}
                      <img
                        className="img-responsive"
                        src="assets/img/company_logo_7.png"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                  <h5>
                    <a href="employer-detail.html">Custom Php Developer</a>
                  </h5>
                  <p className="text-muted">2708 Scenic Way, IL 62373</p>
                </div>
                <div className="utf_apply_job_btn_item">
                  {" "}
                  <a
                    href="job-detail.html"
                    className="btn job-browse-btn btn-radius br-light"
                  >
                    Apply Now
                  </a>{" "}
                </div>
              </div>
            </div>
            Single Job
            <div className="col-md-3 col-sm-6">
              <div className="utf_grid_job_widget_area">
                {" "}
                <span className="job-type part-type">Part Time</span>
                <div className="utf_job_like">
                  <label className="toggler toggler-danger">
                    <input type="checkbox" />
                    <i className="fa fa-heart" />
                  </label>
                </div>
                <div className="u-content">
                  <div className="avatar box-80">
                    {" "}
                    <a href="employer-detail.html">
                      {" "}
                      <img
                        className="img-responsive"
                        src="assets/img/company_logo_8.png"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                  <h5>
                    <a href="employer-detail.html">New Product Mockup</a>
                  </h5>
                  <p className="text-muted">2865 Emma Street, Lubbock</p>
                </div>
                <div className="utf_apply_job_btn_item">
                  {" "}
                  <a
                    href="job-detail.html"
                    className="btn job-browse-btn btn-radius br-light"
                  >
                    Apply Now
                  </a>{" "}
                </div>
              </div>
            </div>
            Single Job
            <div className="col-md-3 col-sm-6">
              <div className="utf_grid_job_widget_area">
                {" "}
                <span className="job-type full-type">Full Time</span>
                <div className="utf_job_like">
                  <label className="toggler toggler-danger">
                    <input type="checkbox" />
                    <i className="fa fa-heart" />
                  </label>
                </div>
                <div className="u-content">
                  <div className="avatar box-80">
                    {" "}
                    <a href="employer-detail.html">
                      {" "}
                      <img
                        className="img-responsive"
                        src="assets/img/company_logo_3.png"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                  <h5>
                    <a href="employer-detail.html">Product Redesign</a>
                  </h5>
                  <p className="text-muted">2719 Burnside Avenue, Logan</p>
                </div>
                <div className="utf_apply_job_btn_item">
                  {" "}
                  <a
                    href="job-detail.html"
                    className="btn job-browse-btn btn-radius br-light"
                  >
                    Apply Now
                  </a>{" "}
                </div>
              </div>
            </div>
            Single Job
            <div className="col-md-3 col-sm-6">
              <div className="utf_grid_job_widget_area">
                {" "}
                <span className="job-type part-type">Part Time</span>
                <div className="utf_job_like">
                  <label className="toggler toggler-danger">
                    <input type="checkbox" />
                    <i className="fa fa-heart" />
                  </label>
                </div>
                <div className="u-content">
                  <div className="avatar box-80">
                    {" "}
                    <a href="employer-detail.html">
                      {" "}
                      <img
                        className="img-responsive"
                        src="assets/img/company_logo_6.png"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                  <h5>
                    <a href="employer-detail.html">Front End Designer</a>
                  </h5>
                  <p className="text-muted">3815 Forest Drive, Alexandria</p>
                </div>
                <div className="utf_apply_job_btn_item">
                  {" "}
                  <a
                    href="job-detail.html"
                    className="btn job-browse-btn btn-radius br-light"
                  >
                    Apply Now
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 mrg-top-20 text-center">
        <Link to="/searchjob" className="btn theme-btn btn-m">
          Browse All Jobs
        </Link>
      </div>
    </div>
  </section> */}
          {/* ================= Category start ========================= */}
          <section className="padd-top-80 padd-bot-60">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <div className="heading">
                    <h2>Following Industry Available</h2>
                  </div>
                </div>
                <div className="col-md-12">

                  {
                    indus?.map(
                      (item) => {
                        return (
                          < div className="col-md-3 col-sm-6" >
                            <div className="utf_category_box_area">
                              <div className="utf_category_desc">
                                <div className="utf_category_icon">
                                  {" "}
                                  <i className={item?.ind_name == "Web & Software Dev" ? "icon-bargraph" : item?.ind_name == "Data Science & Analitycs" ? "icon-tools" : item?.ind_name == "Accounting & Consulting" ? "ti-briefcase" : item?.ind_name == "Writing & Translations" ? "ti-ruler-pencil" : item?.ind_name == "Sales & Marketing" ? "icon-briefcase" : item?.ind_name == "Graphics & Design" ? "icon-wine" : item?.ind_name == "Digital Marketing" ? "ti-world" : item?.ind_name == "Education & Training" ? "ti-desktop" : ''} aria-hidden="true" />{" "}
                                </div>
                                <div className="category-detail utf_category_desc_text">
                                  <h4>{item?.ind_name}</h4>

                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      }
                    )
                  }
                </div>
              </div>
            </div>
          </section>







          {/* ================= footer start ========================= */}

          {/* Signup Code */}
          <>
            <div className="container" style={{ height: 150, display: "flex", justifyContent: "center", alignItems: "center" }}>

              <h2>Our Teams </h2>

            </div>
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="our-team">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="assets/img/jaypass.png"
                      />
                    </div>
                    <div className="team-content">
                      <h3 className="name">Mr.Jay Lakhani</h3>
                      <h4 className="title">Web Developer</h4>
                    </div>
                    <ul className="social">

                      <li>
                        <a
                          href="https://www.linkedin.com/in/jay-lakhani-00560b270"
                          className="fa fa-linkedin"
                          aria-hidden="true"
                        />
                      </li>


                      <li>
                        <a
                          href="https://instagram.com/jay._.lakhani_?igshid=MGNiNDI5ZTU="
                          className="fa fa-instagram"
                          aria-hidden="true"
                        />
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/jay.jivarahbhailakhani?mibextid=ZbWKwL"
                          className="fa fa-facebook"
                          aria-hidden="true"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="our-team">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="assets/img/jainamImage.jpg"
                      />
                    </div>
                    <div className="team-content">
                      <h3 className="name">Mr.Jainam Prajapati</h3>
                      <h4 className="title">Web Developer</h4>
                    </div>
                    <ul className="social">

                      <li>
                        <a
                          href="https://www.linkedin.com/in/jainam-b-prajapati-4a7098241"
                          className="fa fa-linkedin"
                          aria-hidden="true"
                        />
                      </li>


                      <li>
                        <a
                          href="https://instagram.com/mr_jainam_prajapati_02?igshid=ZDdkNTZiNTM="
                          className="fa fa-instagram"
                          aria-hidden="true"
                        />
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/jainamb.prajapati.3"
                          className="fa fa-facebook"
                          aria-hidden="true"
                          target="_blank"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="our-team">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="assets/img/prince.jpg"
                      />
                    </div>
                    <div className="team-content">
                      <h3 className="name">Mr.Prince Sondagar</h3>
                      <h4 className="title">Web Developer</h4>
                    </div>
                    <ul className="social">

                      <li>
                        <a
                          href="https://www.linkedin.com/in/sondagar-prince-795601231"
                          className="fa fa-linkedin"
                          aria-hidden="true"
                        />
                      </li>


                      <li>
                        <a
                          href=" https://instagram.com/sondagar_prince?igshid=ZDdkNTZiNTM="
                          className="fa fa-instagram"
                          aria-hidden="true"
                        />
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/sondagar.prince.1?mibextid=ZbWKwL"
                          className="fa fa-facebook"
                          aria-hidden="true"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="our-team">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="assets/img/varshil.jpg"
                      />
                    </div>
                    <div className="team-content">
                      <h3 className="name">Mr.Varsil Suvagiya</h3>
                      <h4 className="title">Web Developer</h4>
                    </div>
                    <ul className="social">

                      <li>
                        <a
                          href="https://www.linkedin.com/in/varsil-suvagiya-548aba253"
                          className="fa fa-linkedin"
                          aria-hidden="true"
                        />
                      </li>


                      <li>
                        <a
                          href="https://instagram.com/i_m_varsil?igshid=ZDdkNTZiNTM="
                          className="fa fa-instagram"
                          aria-hidden="true"
                        />
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/varsil.suvagiya?mibextid=ZbWKwL"
                          className="fa fa-facebook"
                          aria-hidden="true"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="our-team">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="assets/img/nj.jpg"
                      />
                    </div>
                    <div className="team-content">
                      <h3 className="name">Mr.Nirav Savaliya</h3>
                      <h4 className="title">Web Developer</h4>
                    </div>
                    <ul className="social">


                      <li>
                        <a
                          href="https://www.linkedin.com/in/nirav-savaliya-252770238"
                          className="fa fa-linkedin"
                          aria-hidden="true"
                        />
                      </li>


                      <li>
                        <a
                          href="https://instagram.com/nj_savaliya_07?igshid=ZDdkNTZiNTM="
                          className="fa fa-instagram"
                          aria-hidden="true"
                        />
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/nirav.savaliya.7543"
                          className="fa fa-facebook"
                          aria-hidden="true"
                        />
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

          </>
          <Footer />
          <Load />
        </>
      </div >}
    </>
  )
}

export default Home