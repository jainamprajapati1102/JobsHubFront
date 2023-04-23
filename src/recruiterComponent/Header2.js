import React from 'react'
import { Link } from 'react-router-dom'
import Load from "../Load"
import Home from '../Home'
function Header2() {
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
            <a className="navbar-brand" href="index-2.html">
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
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li className="dropdown">
                {" "}
                <Link to="/">Home</Link>{" "}
              </li>
              <li className="dropdown">
                {" "}
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Company
                </a>
                <ul className="dropdown-menu animated fadeOutUp">

                  <li>
                    <Link to="/addjob">Add job</Link>
                  </li>
                  <li>
                    <Link to="/manageprofile">Manage Profile</Link>
                  </li>
                  <li>
                    <Link to="/managejob">Manage Job</Link>
                  </li>

                </ul>
              </li>
              <li className="dropdown">
                {" "}
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Candidate
                </a>
                <ul className="dropdown-menu animated fadeOutUp">
                  <li>
                    <Link to="/searchjob">Search job</Link>
                  </li>
                  <li>
                    <Link to="/profilesetting">Upload profile</Link>
                  </li>
                  <li>
                    <Link to="/editprofile">Edit profile</Link>
                  </li>
                  <li>
                    <Link to="/home">Resume builder</Link>
                  </li>
                  <li>
                    <Link to="/manageresume">Manage Resume</Link>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                {" "}
                <Link to="/contact">Contact</Link>{" "}
              </li>

            </ul>


          </div>
        </div>
      </nav>
      {/* ======================= End Navigation ===================== */}
      {/* Signup Code */}
      <Load />
    </>


  )
}

export default Header2;