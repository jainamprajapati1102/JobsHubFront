import React from 'react'
import Header from './Header';
import Footer from './Footer';
function Landing() {
  return (
    <>
        <>
        <Header/>
  {/* ======================= Start Banner ===================== */}
  <div
    className="utf_main_banner_area"
    style={{ backgroundImage: "url(assets/img/slider_bg.jpg)" }}
    data-overlay={8}
  >
    <div className="container">
      <div className="col-md-8 col-sm-10">
        <div className="caption cl-white home_two_slid">
          <h2>
            Search Between More Then <span className="theme-cl">50,000</span>{" "}
            Open Jobs.
          </h2>
          <p>
            Trending Jobs Keywords:{" "}
            <span className="trending_key">
              <a href="#">Web Designer</a>
            </span>{" "}
            <span className="trending_key">
              <a href="#">Web Developer</a>
            </span>{" "}
            <span className="trending_key">
              <a href="#">IOS Developer</a>
            </span>{" "}
            <span className="trending_key">
              <a href="#">Android Developer</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* ======================= End Banner ===================== */}
  {/* ================= Job start ========================= */}
  <section className="padd-top-80 padd-bot-80">
    <div className="container">
      <ul className="nav nav-tabs nav-advance theme-bg" role="tablist">
        <li className="nav-item active">
          {" "}
          <a className="nav-link" data-toggle="tab" href="#recent" role="tab">
            {" "}
            Latest Jobs
          </a>{" "}
        </li>
        <li className="nav-item">
          {" "}
          <a className="nav-link" data-toggle="tab" href="#" role="tab">
            {" "}
            Recent Jobs
          </a>{" "}
        </li>
      </ul>
      <div className="tab-content">
        <div
          className="tab-pane fade in show active"
          id="recent"
          role="tabpanel"
        >
          <div className="row">
            {/* Single Job */}
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
            {/* Single Job */}
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
            {/* Single Job */}
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
            {/* Single Job */}
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
                        src="assets/img/company_logo_4.png"
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
            {/* Single Job */}
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
            {/* Single Job */}
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
                    <a href="employer-detail.html">Photoshop Designer</a>
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
            {/* Single Job */}
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
                        src="assets/img/company_logo_7.png"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                  <h5>
                    <a href="employer-detail.html">HTML5 &amp; CSS3 Coder</a>
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
            {/* Single Job */}
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
                        src="assets/img/company_logo_8.png"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                  <h5>
                    <a href="employer-detail.html">.Net Developer</a>
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
        {/* Featured Job */}
        <div className="tab-pane fade" id="featured" role="tabpanel">
          <div className="row">
            {/* Single Job */}
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
            {/* Single Job */}
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
            {/* Single Job */}
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
            {/* Single Job */}
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
            {/* Single Job */}
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
            {/* Single Job */}
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
            {/* Single Job */}
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
            {/* Single Job */}
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
        <a href="job-layout-one.html" className="btn theme-btn btn-m">
          Browse All Jobs
        </a>
      </div>
    </div>
  </section>
  {/* ================= Category start ========================= */}
  <section className="utf_job_category_area">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2>Job Categories</h2>
            <p>
              Lorem Ipsum is simply dummy text printing and type setting
              industry Lorem Ipsum been industry standard dummy text ever since
              when unknown printer took a galley.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-3 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="icon-bargraph" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Web &amp; Software Dev</h4>
                    <p>122 Jobs</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="icon-tools" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Data Science &amp; Analitycs</h4>
                    <p>155 Jobs</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-briefcase" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Accounting &amp; Consulting</h4>
                    <p>300 Jobs</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-ruler-pencil" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Writing &amp; Translations</h4>
                    <p>80 Jobs</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="icon-briefcase" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Sales &amp; Marketing</h4>
                    <p>120 Jobs</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="icon-wine" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Graphics &amp; Design</h4>
                    <p>78 Jobs</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-world" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Digital Marketing</h4>
                    <p>90 Jobs</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="browse-job.html" title="">
              <div className="utf_category_box_area">
                <div className="utf_category_desc">
                  <div className="utf_category_icon">
                    {" "}
                    <i className="ti-desktop" aria-hidden="true" />{" "}
                  </div>
                  <div className="category-detail utf_category_desc_text">
                    <h4>Education &amp; Training</h4>
                    <p>210 Jobs</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-12 mrg-top-20 text-center">
            <a href="browse-category.html" className="btn theme-btn btn-m">
              View All Categories
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
<Footer/>
    </>
  )
}

export default Landing