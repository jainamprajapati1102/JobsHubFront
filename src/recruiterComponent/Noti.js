import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
// import RecHeader from './RecHeader';
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Recruiterfooter from './Recruiterfooter';
import Typewriter from 'typewriter-effect'
import AcceptUserList from './AcceptList'
import RejectUserList from './RejectList'
import Load from '../Load';
import RecHeader from './RecHeader';
import Loader from '../Loader';
const Noti = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // simulate an API call with a delay of 3 seconds
        setTimeout(() => {
            setData("Some data");
            setIsLoading(false);
        }, 1000);
    }, []);
    const navigate = useNavigate();
    useEffect(() => {
        getjobApplieduser();
    }, []);
    // const [email, setEmail] = useState('');
    const [accesstoken] = useState(localStorage.getItem('recruiterToken'));
    const [userdata, setuserData] = useState([])
    const requestoption = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${accesstoken}`//.replace(/"/g, '')}`,
        }
    }

    const getjobApplieduser = async () => {
        const response = await fetch('http://localhost:5000/getapplieduser', requestoption);
        const result = await response.json();
        setuserData(result)
    }

    console.log("userdata=====>", userdata);

    // const resumeview = (url) => {
    //     console.log("url====>", url)
    // }



    // const acceptHandler = (id) => {
    //     console.log("id=====>", id);

    // }

    const acceptHandler = async (id) => {
        console.log("id=====>", id);
        const confiOption = {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                credentials: "includes",
                'Authorization': `Bearer ${accesstoken}`,
                // 'Authorization': `Bearer ${accesstoken.replace(/"/g, '')}`,
            }
        };
        const response = await fetch(`http://localhost:5000/acceptrequest/${id}`, confiOption);
        const result = await response.json();

        if (result.status === 200) {
            toast.success(" request accept successfully");
            getjobApplieduser();

            //   navigate('/manageprofile');
        } else {
            toast.error("something wrong");
        }
    }

    const acceptmail = async (id) => {
        console.log(`id---->${id}`)
        const configOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }
        const data = await fetch(`http://localhost:5000/acceptmail/${id}`, configOption);
        const res = await data.json();
        if (res.status === 201) {
            toast.success("Mail Send On Seeker Email Id")
        } else {
            toast.error("Try agian for sending mail from your mail id ")
        }

    }


    const rejectHandler = async (id) => {
        console.log("id=====>", id);
        const confiOption = {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                credentials: "includes",
                // 'Authorization': `Bearer ${accesstoken}`,
                'Authorization': `Bearer ${accesstoken.replace(/"/g, '')}`,
            }
        };

        const conf = window.confirm("You want to Reject This Request")

        if (conf) {
            const response = await fetch(`http://localhost:5000/rejectrequest/${id}`, confiOption);
            const result = await response.json();

            if (result.status === 200) {
                toast.success("You Reject This request successfully");
                getjobApplieduser();
                navigate('/manageprofile');
            } else {
                toast.error("something wrong");
            }
        }
    }



    // return (
    //     <>
    //         <>
    //             < RecHeader />
    //             { /* ======================= Page Title ===================== */}

    //             <div className="page-title">
    //                 <div className="container">
    //                     <div className="page-caption">
    //                         <h2><Typewriter
    //                             options={{
    //                                 autoStart: true,
    //                                 loop: true,
    //                             }}
    //                             onInit={(typewriter) => {
    //                                 typewriter
    //                                     .typeString("Notification")
    //                                     .pauseFor(2000)
    //                                     .start()
    //                             }}

    //                         /></h2>
    //                         <p>
    //                             <Link to="/home" title="Home">
    //                                 Home
    //                             </Link>{" "}
    //                             <i className="ti-angle-double-right" /> Notification
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>
    //             {/* ======================= End Page Title ===================== */}



    //             {/* ======================== Manage Job ========================= */}
    //             <section className="utf_manage_jobs_area padd-top-80 padd-bot-80">
    //                 <div className="container">
    //                     <div className="table-responsive">
    //                         <table className="table table-lg table-hover">
    //                             <thead>
    //                                 <tr>
    //                                     <th>Name</th>
    //                                     <th>Email</th>
    //                                     <th>Contact</th>
    //                                     <th>Gender</th>
    //                                     <th>Action</th>
    //                                 </tr>
    //                             </thead>
    //                             <tbody>

    //                                 {userdata.map((item) => (
    //                                     <tr key={item?._id}>
    //                                         <td>
    //                                             <a href="job-detail.html">
    //                                                 {" "}
    //                                                 <img
    //                                                     // src={`http://localhost:5000/public/uploads/seekerprofile/${item?.js_id?.js_profile}`}
    //                                                     className="avatar-lg"
    //                                                     alt="Avatar"
    //                                                 />

    //                                                 {item?.js_id?.js_name}
    //                                             </a>
    //                                         </td>
    //                                         <td>
    //                                             {item?.js_id?.js_email}
    //                                         </td>

    //                                         <td>
    //                                             {item?.js_id?.js_mno}
    //                                         </td>

    //                                         <td>
    //                                             {item?.js_id?.js_gender}
    //                                         </td>

    //                                         <td>

    //                                             <Button variant="success" id="md1" onClick={() => { acceptHandler(item?._id); acceptmail(item?._id) }} style={{ display: "none" }}> <i className="fa fa-check" /> </Button>
    //                                             <Button variant="danger" id="md2" data-toggle="tooltip" onClick={() => rejectHandler(item?._id)} style={{ display: "none" }}> <i className="fa fa-trash-o" /> </Button>


    //                                             <label className="cl-success mrg-5" for="md1">  <i className="fa fa-check" /> </label>
    //                                             <label className="cl-danger mrg-5 " for="md2">   <i className="fa fa-trash-o" /> </label>
    //                                             <Link target="_blank" class="cl-primary mrg-5" to={`http://localhost:5000/public/uploads1/resume/${item?.resume}`} ><i className="fa fa-eye" /></Link>

    //                                             {/* {item?.accept == 1 ? <Button variant="success" > Accepted </Button> : */}
    //                                             {/* <Button onClick={() => resumeview(item?.resume)} variant="info" data-toggle="tooltip"  > viewDetail </Button> */}



    //                                             {/* <Button variant="info" data-toggle="tooltip" onClick={window.open().location.href = {`http://localhost:5000/public/uploads/resume/${item?.resume}`}> view Resume</Button> */}

    //                                             {/* 
    //                                         <a href={`http://localhost:5000/public/uploads/resume/${item?.resume}`} target="_blank"
    //                                             rel="noreferrer">
    //                                             Open First PDF
    //                                         </a> */}
    //                                         </td>
    //                                     </tr>

    //                                 ))
    //                                 }
    //                             </tbody>
    //                         </table>
    //                         <div className="utf_flexbox_area padd-10">
    //                             <ul className="pagination">
    //                                 <li className="page-item">
    //                                     {" "}
    //                                     <a className="page-link" href="#" aria-label="Previous">
    //                                         {" "}
    //                                         <span aria-hidden="true">«</span>{" "}
    //                                         <span className="sr-only">Previous</span>{" "}
    //                                     </a>{" "}
    //                                 </li>
    //                                 <li className="page-item active">
    //                                     <a className="page-link" href="#">
    //                                         1
    //                                     </a>
    //                                 </li>
    //                                 <li className="page-item">
    //                                     <a className="page-link" href="#">
    //                                         2
    //                                     </a>
    //                                 </li>
    //                                 <li className="page-item">
    //                                     <a className="page-link" href="#">
    //                                         3
    //                                     </a>
    //                                 </li>
    //                                 <li className="page-item">
    //                                     {" "}
    //                                     <a className="page-link" href="#" aria-label="Next">
    //                                         {" "}
    //                                         <span aria-hidden="true">»</span>{" "}
    //                                         <span className="sr-only">Next</span>{" "}
    //                                     </a>{" "}
    //                                 </li>
    //                             </ul>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>
    //             {/* ====================== End Manage Company ======  ========== */}
    //         </>
    //         <Recruiterfooter />
    //     </>
    // )

    return (

        <>
            {isLoading ? <Loader /> : <div>
                <>

                    { /* ======================= Page Title ===================== */}
                    <Load />
                    <RecHeader />
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
                                            .typeString("User List")
                                            .pauseFor(2000)
                                            .start()
                                    }}

                                /></h2>
                                <p>
                                    <Link to="/recruiterhome" title="Home">
                                        Home
                                    </Link>{" "}
                                    <i className="ti-angle-double-right" /> User List
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ======================= End Page Title ===================== */}



                    {/* ======================== Manage Job ========================= */}
                    <div className="tabs">
                        <div className="tab-2">
                            <label htmlFor="tab2-1"><h4> Acception List</h4> </label>
                            <input id="tab2-1" name="tabs-two" type="radio" defaultChecked="checked" />
                            <div>

                                <AcceptUserList />

                            </div>
                        </div>
                        <div className="tab-2">
                            <label htmlFor="tab2-2"><h4>Rejection List</h4></label>
                            <input id="tab2-2" name="tabs-two" type="radio" />
                            <div>


                                <RejectUserList />
                            </div>
                        </div>

                    </div>


                    {/* ====================== End Manage Company ======  ========== */}
                    <Recruiterfooter />
                </>
            </div>}
        </>
    )

}

export default Noti;