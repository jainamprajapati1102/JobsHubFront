// With logout route
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import react, { Suspense } from 'react';
import Error404 from "./Error404";
import Aboutus from "./Aboutus";
/****   seeker ******* */
import Searchjob from "./seekerComponent/Searchjob";
import SeekerLogin from "./seekerComponent/SeekerLogin";
import Uploadprofile from "./seekerComponent/Seekerprofile";
import Browsecategory from "./seekerComponent/Browsecategory";
import Resumedetail from "./seekerComponent/Resumedetail";
import SeekerSignup from "./seekerComponent/SeekerSignup";
import Seekerhome from "./seekerComponent/Seekerhome";
import Changepassword from "./seekerComponent/Changepassword";
import Seditprofile from "./seekerComponent/Seditprofile";
import Seekercontact from "./seekerComponent/Seekercontact";
import Seekersendmail from "./seekerComponent/Seekersendmail";
import Seekerjobrestor from "./seekerComponent/Seekerjobrestor";
import Seekerforgot from "./seekerComponent/Seekerforgot";
import Apply from "./seekerComponent/Apply";
import Jobhistory from "./seekerComponent/Seekerjobhistory";
import Acceptjob from "./seekerComponent/Acceptjob";
import Rejectjob from "./seekerComponent/Rejectjob";
import Seekerfooter from "./seekerComponent/Seekerfooter";

/*****   recruter ******* */
import ManageProfile from "./recruiterComponent/ManageProfile";
import Addjob from "./recruiterComponent/Addjob";

import ManageJob from "./recruiterComponent/Managejob";
import Editprofile from "./recruiterComponent/Editprofile";
import RecruiterSignup from "./recruiterComponent/RecruiterSignup";
import Recruitersendmail from "./recruiterComponent/Recruitersendmail";
import Recruiterforgot from "./recruiterComponent/Recruiterforgot";
import RecruiterLogin from "./recruiterComponent/RecruiterLogin";
// import Aboutus from "./Aboutus";
import Recruiterhome from "./recruiterComponent/Recruiterhome";
import Jobdetail from './seekerComponent/Jobdetail';
import Recruitercontact from "./recruiterComponent/Recruitercontact";
import Recruiterfooter from "./recruiterComponent/Recruiterfooter";
import Recruiterchangepass from "./recruiterComponent/RecruiterchangePass";
import Notification from "./recruiterComponent/Notification";
import AcceptList from "./recruiterComponent/AcceptList";
import RejectList from "./recruiterComponent/RejectList";
import Updatejob from "./recruiterComponent/Updatejob";
import Viewjob from './recruiterComponent/Viewjob';
import Payment from "./recruiterComponent/Payment";
import Recruiterjobrestor from "./recruiterComponent/Recruiterjobrestor";
import Noti from "./recruiterComponent/Noti";

// Protected
import RecruterProtected from "./component/RecruiterProtected";
import RecruterUnprotected from "./component/RecruiterUnProtected"
import SekProtected from "./component/SekProtected"
import SekUnProtected from "./component/SekUnProtected"

import Loader from "./Loader";
function Route1() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/aboutus" element={<Aboutus />} />
          {/* <Routes> */}
          <Route element={<RecruterUnprotected />}>
            <Route path="/recruitersignup" element={<Suspense fallback={<div >Loading...</div>}><RecruiterSignup /></Suspense>} />
            <Route path="/recruiterlogin" element={<RecruiterLogin />} />
            <Route path="/recruitersendmail" element={<Recruitersendmail />} />
            <Route path="/recruiterforgot" element={<Recruiterforgot />} />
            <Route path="/recruiterforgot/:id/:token" element={<Recruiterforgot />} />
          </Route>
          {/* </Routes> */}

          {/* <Routes > */}
          <Route element={<RecruterProtected />}>
            <Route path="/recruiterhome" element={<Recruiterhome />} />
            <Route path="/addjob" element={<Addjob />} />
            <Route path="/applicantlist" element={<Noti />} />
            <Route path="/updatejob/:id" element={<Updatejob />} />
            <Route path="/updatejob" element={<Updatejob />} />
            {/* <Route path="/viewjob/:id" element={<Viewjob />} />*/}
            <Route path="/recchangepass" element={<Recruiterchangepass />} />
            <Route path="/managejob" element={<ManageJob />} />
            <Route path="/recruitercontact" element={<Recruitercontact />} />
            <Route path="/manageprofile" element={<ManageProfile />} />
            <Route path="/editprofile" element={<Editprofile />} />
            <Route path="/recruiterjobrestor" element={<Recruiterjobrestor />} />

            {/* </Route> */}
            <Route path="/notification" element={< Notification />} />
            <Route path="/acceptlist" element={< AcceptList />} />
            <Route path="/rejectlist" element={< RejectList />} />

            <Route path="/payment" element={<Payment />} />
          </Route>
          {/*</Route>*/}
          {/* </Routes> */}

          {/* <Routes > */}
          <Route element={<SekUnProtected />}>
            <Route path="/seekersignup" element={<SeekerSignup />} />
            <Route path="/seekerlogin" element={<SeekerLogin />} />
            <Route path="/seekersendmail" element={<Seekersendmail />} />
            <Route path="/seekerforgot/:id/:token" element={<Seekerforgot />} />
          </Route>
          {/* </Routes > */}

          {/* <Routes> */}
          <Route element={<SekProtected />}>

            <Route path="/seekerhome" element={<Seekerhome />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/apply/:id" element={<Apply />} />
            <Route path="/jobhistory" element={<Jobhistory />} />
            <Route path="/acceptjob" element={<Acceptjob />} />
            <Route path="/rejectjob" element={<Rejectjob />} />
            <Route path="/searchjob" element={<Searchjob />} />
            <Route path="/seekerprofile" element={<Uploadprofile />} />
            <Route path="/seekercontact" element={<Seekercontact />} />
            <Route path="/browsecategory" element={<Browsecategory />} />
            <Route path="/resumedetail" element={<Resumedetail />} />
            <Route path="/seditprofile" element={<Seditprofile />} />
            <Route path="/changepassword" element={<Changepassword />} />

            <Route path="/seekerjobrestor" element={<Seekerjobrestor />} />
            <Route path="/seekerforgot/:id/:token" element={<Seekerforgot />} />
            <Route path="/seekerfooter" element={<Seekerfooter />} />
            <Route path="/jobdetail" element={<Jobdetail />} />
            <Route path="/jobdetail/:id" element={<Jobdetail />} />
          </Route>
          {/* </Routes > */}

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default Route1;