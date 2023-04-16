import React from 'react'
import { Link } from 'react-router-dom'
import Load from '../Load';

function RecHeader() {
  return (

    <>

      {/* ======================= Start Navigation ===================== */}
      <nav className="navbar navbar-default navbar-mobile navbar-fixed white bootsnav on no-background">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              {" "}
              <i className="fa fa-bars" />{" "}
            </button>
            <Link className="navbar-brand" to="/recruiterhome">
              {" "}
              <img
                src="assets/img/whwhole.png"
                className="logo logo-display"
                alt=""
              />{" "}
              <img
                src="assets/img/blwhole.png"
                className="logo logo-scrolled"
                alt=""
              />{" "}
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar-center"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >

              <li className="dropdown">
                {" "}
                <Link to="/recruiterhome">Home</Link>
              </li>
              <li className="dropdown">
                {" "}
                <Link to="/addjob">Add job</Link>
              </li>
              <li className="dropdown">
                {" "}
                <Link to="/manageprofile">Manage Profile</Link>
              </li>
              <li className="dropdown">
                {" "}
                <Link to="/managejob">Manage Job</Link>
              </li>
              <li className="dropdown">
                {" "}
                <Link to="/notification">Notification</Link>
              </li>
              <li className="dropdown">
                {" "}
                <Link to="/applicantlist">Applicant List</Link>
              </li>
              <li className="dropdown">
                {" "}
                <Link to="/payment">Payment</Link>
              </li>




              {/* <li className="dropdown">
            {" "}
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              Pages
            </a>
            <ul className="dropdown-menu animated fadeOutUp">
              <li>
                <Link to="/profilesetting">Profile Settings</Link>
              </li>
              <li>
                <a href="job-detail.html">Job Detail</a>
              </li>
              <li>
                <a href="job-layout-one.html">Job Layout One</a>
              </li>
              <li>
                <Link to="/error">404</Link>
              </li>
            </ul>
          </li> */}
              <li className="dropdown">
                {" "}
                <Link to="/recruitercontact">Contact</Link>{" "}
              </li>

            </ul>

            {/* <ul className="nav navbar-nav navbar-right  ">
   
        <li className="dropdown ">
            {" "}
            <a href="#" className="dropdown-toggle btn-signup red-btn" data-toggle="dropdown"> <i className="login-icon ti-user" />
              Login
            </a>
            <ul className="dropdown-menu animated fadeOutUp">
            
              <li>
                <Link to="/login">Login as Company</Link>
              </li>
              <li>
                <Link to="/login">Login as User</Link>
              </li>
             
            </ul>
          </li>
          <li className="sign-up">
            <Link className="btn-signup red-btn" to="/signup">
              <span className="ti-briefcase" />
              Register
            </Link>
          </li>
          <li className="br-right">
            <Link
              className="btn-signup red-btn"
              to="/login"
              data-toggle="modal"
              data-target="#signin"
            >
              <i className="login-icon ti-user" />
              Login
            </Link>
          </li>
        
        </ul> */}

          </div>
        </div>
      </nav>
      {/* ======================= End Navigation ===================== */}
      {/* Signup Code */}
      <Load />
    </>


  )
}

export default RecHeader;