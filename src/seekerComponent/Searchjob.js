// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import Seekerfooter from './Seekerfooter';
// import SeekHeader from "./SeekHeader";
// import Typewriter from 'typewriter-effect'
// import loadjs from 'loadjs';
// import Select from "react-select";
// import { Modal } from 'react-responsive-modal';
// import 'react-responsive-modal/styles.css';
// import { toast } from 'react-toastify';
// import Loader from '../Loader';
// // import avtar from 'assets / img / company_logo_1.png'
// // import avtar from "../img/company_logo_1.png"
// import avtar from "../img/company_logo_1.png"
// function Searchjob() {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // simulate an API call with a delay of 3 seconds
//     setTimeout(() => {
//       setData("Some data");
//       setIsLoading(false);
//     }, 1000);
//   }, []);
//   const [seekerData, setSeekerdata] = useState([]);
//   const [search, setSearch] = useState('')
//   const [gender, setgender] = useState('')
//   const [sort, setSort] = useState('')
//   const [salary, setSalary] = useState('');
//   const [apply, setApply] = useState({ js_name: '', js_email: '', js_mno: '', resume: '' });
//   const navigate = useNavigate();
//   const [accesstoken] = useState(localStorage.getItem('seekerToken'));
//   const [accesstoken1] = useState(localStorage.getItem('recruiterToken'));
//   const [jobtype, setJobtype] = useState('');
//   // const { id } = useParams();
//   useEffect(() => {
//     getpostedjob();
//     Profile();
//     // fetchcategory();
//   }, [search, gender, jobtype]);

//   const timeOption = [
//     { value: 'Most Recent', label: 'Most Recent' },
//     { value: 'Old', label: 'Old' },
//   ]

//   const getpostedjob = async () => {
//     try {
//       // const token = localStorage.getItem('seekerToken');
//       // console.log("token===>", token)
//       const res = await fetch(`https://jobshubback-bry5.onrender.com/getjobpost?search=${search}&gender=${gender}&jobtype=${jobtype}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           'Authorization': `Bearer ${accesstoken}`
//         }
//       });
//       const data = await res.json();
//       console.log("data===>", data);
//       setSeekerdata(data);

//     } catch (err) {
//       console.log(`Here is some Error :- ${err}`);

//     }
//   }

//   const Profile = async (e) => {
//     try {
//       const token = JSON.stringify(localStorage.getItem('seekerToken'));
//       console.log("token===>", token)
//       const res = await fetch('https://jobshubback-bry5.onrender.com/getseeker', {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           credentials: "includes",
//           'Authorization': `Bearer ${accesstoken}`,
//         }
//       });
//       const data = await res.json();
//       console.log(data);
//       setApply({
//         ...apply,
//         js_name: data.js_name,
//         js_mno: data.js_mno,
//         js_email: data.js_email,

//       });
//       if (!res.status === 200) {
//         const error = new Error(res.error);
//         throw error;
//       }
//     } catch (err) {
//       console.log(`Here is some Error :- ${err}`);
//       navigate('/seekerlogin')
//     }
//   }

//   console.log("seekerData===>", seekerData.jobtitle)
//   const applyHandle = (_id) => {
//     console.log(`id =>>>${_id}`)
//   }

//   const [categorydata, setCategorydata] = useState();
//   const selectHandler = ({ name, value }) => {
//     setSort({
//       ...sort,
//       [name]: value
//     })
//   }

//   // if()
//   const salaryRange = (e) => {
//     setSalary({ ...salary, [e.target.name]: e.target.value })
//   }

//   // apply job 
//   // const inputHandle = (e) => {
//   //   setApply({
//   //     ...apply,
//   //     [e.target.name]: e.target.type == 'file' ? e.target.files[0] : e.target.value
//   //   })
//   // }
//   const inputHandle = (e) => {
//     setApply({
//       ...apply, [e.target.name]: e.target.value

//     })
//   }
//   const [file, setfile] = useState()
//   const inputHandle1 = (e) => {
//     setfile({
//       ...file, [e.target.name]: e.target.files[0]

//     })
//   }
//   const [rec, setRec] = useState();
//   const jobinput = (item) => {
//     console.log(`Recruiter id from state===>${item}`)
//     setRec({
//       ...rec, recid: item
//     })
//   }
//   console.log("apply---->", apply.resume);
//   const [cv, setCv] = useState();

//   const applyFrom = async () => {
//     try {
//       const data = new FormData();
//       data.append('js_name', apply.js_name);
//       data.append('js_email', apply.js_email);
//       data.append('js_mno', apply.js_mno);
//       data.append('resume', apply.resume);
//       data.append('rec_id', rec.recid);

//       console.log(`Fornm===>>>${data}`)
//       const confiOption = {
//         method: "post",
//         headers: {
//           // Accept: "application/json",
//           // "Content-Type": "application/json",
//           credentials: "includes",
//           'Authorization': `Bearer ${accesstoken}`,
//         },
//         body: data,
//       };
//       const response = await fetch(`https://jobshubback-bry5.onrender.com/applyjob`, confiOption);
//       const result = await response.json();
//       console.log("result=--->", result)
//       if (result.status === 201) {
//         toast.success('Job Apply ');
//         navigate('/seekerhome')
//       } else {
//         toast.error('Job Not Apply ')
//       }
//     } catch (error) {
//       console.log(`Error from frontend :- ${error}`)
//     }
//   }

//   const [open, setOpen] = useState(false);

//   const onOpenModal = (id) => setOpen(true);
//   const onCloseModal = () => setOpen(false);

//   const jobtypeHandler = (e) => {
//     const name = e.target.name
//     const value = e.target.value
//     setJobtype({
//       [name]: value
//     })
//   }







//   // const requestOptions = {
//   //   method: 'GET',
//   //   headers: {
//   //     Accept: "application/json",
//   //     "Content-Type": "application/json",
//   //     credentials: "includes",
//   //     'Authorization': `Bearer ${accesstoken1.replace(/"/g, '')}`,
//   //   }
//   // }
//   // const fetchcategory = async () => {
//   //   const response = await fetch('https://jobshubback-bry5.onrender.com/industry', requestOptions);
//   //   const categoryres = await response.json();
//   //   const category_list = [];
//   //   categoryres.map((item) => { category_list.push({ value: item._id, label: item.ind_name }) })
//   //   setCategorydata(category_list)
//   // }







//   return (
//     <>
//       {
//         isLoading ? <Loader /> : <div>
//           <>
//             <Modal open={open} onClose={onCloseModal} center>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   borderRadius: 20
//                 }}
//               >
//                 <span>
//                   <h3>APPLY HERE...</h3>
//                 </span>
//                 <span></span>
//               </div>
//               <hr />
//               <div className="scr" style={{ height: "350px", overflow: "auto" }}>
//                 <div className="profile_detail_block">
//                   <div className="text-center mrg-bot-20">
//                     {/* <h4 className="mrg-0">Front End Designer</h4> */}
//                     {/* <span>2708 Scenic Way, Sutter</span> */}
//                   </div>
//                   <form method='post'>
//                     <div className="col-md-6 col-sm-6">
//                       <label>Name</label>
//                       <input
//                         type="text"
//                         className="form-control"

//                         value={apply.js_name}
//                         placeholder="Name"
//                         name="js_name"
//                         onChange={inputHandle}
//                       />
//                     </div>
//                     <div className="col-md-6 col-sm-6">
//                       <label>Email</label>
//                       <input
//                         type="email"
//                         name='js_email'
//                         className="form-control"
//                         value={apply.js_email}
//                         placeholder="Email"
//                         onChange={inputHandle}
//                       />
//                     </div>
//                     <div className="col-md-6 col-sm-6">
//                       <label>Phone</label>
//                       <input
//                         type="tel"
//                         className="form-control"
//                         placeholder="Phone No"
//                         name="js_mno"
//                         value={apply.js_mno}
//                         onChange={inputHandle}
//                       />
//                     </div>
//                     <div className="col-md-6 col-sm-6">
//                       <label>Upload CV</label>
//                       <div className="custom-file-upload">
//                         <input
//                           type="file"
//                           id="file"
//                           name="resume"

//                           onChange={(e) => {
//                             setApply({
//                               ...apply, resume: e.target.files[0]
//                             });
//                             inputHandle1(e)
//                           }}

//                         />
//                       </div>
//                     </div>

//                     <div className="col-md-12 text-center">
//                       <button
//                         onClick={() => {
//                           applyFrom();
//                           onCloseModal();
//                         }}
//                         type="button"
//                         className="btn theme-btn btn-m full-width"
//                       >
//                         APPLY JOB
//                       </button>
//                     </div>
//                     <div className="clearfix" />
//                   </form>
//                 </div>
//               </div>
//             </Modal>
//             <SeekHeader />
//             <>
//               {/* ======================= Page Title ===================== */}
//               <div className="page-title">
//                 <div className="container">
//                   <div className="page-caption">
//                     <h2><Typewriter
//                       options={{
//                         autoStart: true,
//                         loop: true,
//                       }}
//                       onInit={(typewriter) => {
//                         typewriter
//                           .typeString("Browse Job")
//                           .pauseFor(2000)
//                           .start()
//                       }}

//                     /></h2>
//                     <p>
//                       <Link to="/seekerhome" title="Home">
//                         Home
//                       </Link>{" "}
//                       <i className="ti-angle-double-right" /> Browse Job
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               {/* ======================= End Page Title ===================== */}
//               {/* ====================== Start Job Detail 2 ================ */}
//               <section className="padd-top-80 padd-bot-80">
//                 <div className="container">
//                   <div className="row">
//                     <div className="col-md-3 col-sm-5">

//                       <div className="widget-boxed padd-bot-0">
//                         <div className="widget-boxed-header">
//                           <h4>Offerd Salary</h4>
//                         </div>
//                         <div className="widget-boxed-body">
//                           <div className="side-list no-border">
//                             <ul>
//                               <li>
//                                 {" "}
//                                 <span className="checkbox">

//                                   <input type="checkbox" id={1} className='custom-checkbox' name='10000' value={'1000'} onChange={(e) => setSalary(...salary, e.target.value)} />
//                                   <label htmlFor={1} />
//                                 </span>{" "}
//                                 Under 10,000 <span className="pull-right"></span>
//                               </li>
//                               <li>
//                                 {" "}
//                                 <span className="checkbox">
//                                   <input type="checkbox" name='15000' onChange={(e) => setSalary(...salary, e.target.value)} value={'10000 - 15000'} id={2} />
//                                   <label htmlFor={2} />
//                                 </span>{" "}
//                                 10,000 - 15,000 <span className="pull-right"></span>
//                               </li>
//                               <li>
//                                 {" "}
//                                 <span className="checkbox">
//                                   <input type="checkbox" name='20000' onChange={(e) => setSalary(...salary, e.target.value)} value={'15000 - 20000'} id={3} />
//                                   <label htmlFor={3} />
//                                 </span>{" "}
//                                 15,000 - 20,000 <span className="pull-right"></span>
//                               </li>
//                               <li>
//                                 {" "}
//                                 <span className="checkbox">
//                                   <input type="checkbox" name='30000' onChange={(e) => setSalary(...salary, e.target.value)} value={'20000 - 30000'} id={4} />
//                                   <label htmlFor={4} />
//                                 </span>{" "}
//                                 20,000 - 30,000 <span className="pull-right"></span>
//                               </li>
//                               <li>
//                                 {" "}
//                                 <span className="checkbox">
//                                   <input type="checkbox" name='40000' onChange={(e) => setSalary(...salary, e.target.value)} value={'30000 - 40000'} id={5} />
//                                   <label htmlFor={5} />
//                                 </span>{" "}
//                                 30,000 - 40,000 <span className="pull-right"></span>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="widget-boxed padd-bot-0">
//                         <div className="widget-boxed-header">
//                           <h4>Job Type</h4>
//                         </div>
//                         <div className="widget-boxed-body">
//                           <div className="side-list no-border">
//                             <ul>
//                               <li>
//                                 {" "}
//                                 <span className="custom-radio">
//                                   <input type="radio" name="jobtype" value="All Jobs" onChange={(e) => setJobtype("")} id="j1" />
//                                   <label htmlFor="j1" />
//                                 </span>{" "}
//                                 All Jobs <span className="pull-right">{seekerData?.jobtype?.length}</span>
//                               </li>
//                               <li>
//                                 {" "}
//                                 <span className="custom-radio">
//                                   { }
//                                   <input type="radio" name="jobtype" value="Full Time" onChange={(e) => setJobtype(e.target.value)} id="a1" />
//                                   <label htmlFor="a1" />
//                                 </span>{" "}
//                                 Full Time <span className="pull-right ">{seekerData.jobtype == "Full Time".length} </span>
//                               </li>
//                               <li>
//                                 {" "}
//                                 <span className="custom-radio">
//                                   <input type="radio" name="jobtype" value="Part Time" onChange={(e) => setJobtype(e.target.value)} id="b1" />
//                                   <label htmlFor="b1" />
//                                 </span>{" "}
//                                 Part Time <span className="pull-right"></span>
//                               </li>
//                               <li>
//                                 {" "}
//                                 <span className="custom-radio">
//                                   <input type="radio" name="jobtype" value="Internship" onChange={(e) => setJobtype(e.target.value)} id="c1" />
//                                   <label htmlFor="c1" />
//                                 </span>{" "}
//                                 Internship <span className="pull-right"></span>
//                               </li>
//                               <li>
//                                 {" "}
//                                 <span className="custom-radio">
//                                   <input type="radio" name="jobtype" value="Freelancer" onChange={(e) => setJobtype(e.target.value)} id="d1" />
//                                   <label htmlFor="d1" />
//                                 </span>{" "}
//                                 Freelancer <span className="pull-right">{seekerData.jobtype == "Freelancer" ? seekerData.jobtype.length : ""}</span>
//                               </li>
//                               <li>
//                                 {" "}
//                                 <span className="custom-radio">
//                                   <input type="radio" name="jobtype" value="Contract Base" onChange={(e) => setJobtype(e.target.value)} id="e1" />
//                                   <label htmlFor="e1" />
//                                 </span>{" "}
//                                 Contract Base <span className="pull-right"> </span>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>

//                       {/*<div className="widget-boxed padd-bot-0">
//                         <div className="widget-boxed-header">
//                           <h4>Experince</h4>
//                         </div>
//                         <div className="widget-boxed-body">
//                           <div className="side-list no-border">
//                             <ul>
//                               <li>
//                                 {" "}
//                                 <span className="custom-radio">
//                                   <input type="radio" name="jobtype" value="All Jobs" onChange={(e) => setJobtype("")} id="j1" />
//                                   <label htmlFor="j1" />
//                                 </span>{" "}
//                                 1Year To 2Year <span className="pull-right"></span>
//                               </li>
//                               <li>
//                                 {" "}
//                                 <span className="custom-radio">
//                                   <input type="radio" name="jobtype" value="Full Time" onChange={(e) => setJobtype(e.target.value)} id="a1" />
//                                   <label htmlFor="a1" />
//                                 </span>{" "}
//                                 2Year To 3Year <span className="pull-right"></span>
//                               </li>
//                               <li>
//                                 {" "}
//                                 <span className="custom-radio">
//                                   <input type="radio" name="jobtype" value="Part Time" onChange={(e) => setJobtype(e.target.value)} id="b1" />
//                                   <label htmlFor="b1" />
//                                 </span>{" "}
//                                 3Year To 4Year <span className="pull-right"></span>
//                               </li>
//                               <li>
//                                 {" "}
//                                 <span className="custom-radio">
//                                   <input type="radio" name="jobtype" value="Internship" onChange={(e) => setJobtype(e.target.value)} id="c1" />
//                                   <label htmlFor="c1" />
//                                 </span>{" "}
//                                 4Year To 5Year <span className="pull-right"></span>
//                               </li>
//                               <li>
//                                 {" "}
//                                 <span className="custom-radio">
//                                   <input type="radio" name="jobtype" value="Freelancer" onChange={(e) => setJobtype(e.target.value)} id="d1" />
//                                   <label htmlFor="d1" />
//                                 </span>{" "}
//                                 5Year To 7Year <span className="pull-right">{seekerData.jobtype == "Freelancer" ? seekerData.jobtype.length : ""}</span>
//                               </li>
//                               <li>
//                                 {" "}
//                                 <span className="custom-radio">
//                                   <input type="radio" name="jobtype" value="Contract Base" onChange={(e) => setJobtype(e.target.value)} id="e1" />
//                                   <label htmlFor="e1" />
//                                 </span>{" "}
//                                 7Year To 10Year<span className="pull-right"> </span>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>*/}
//                       <div className="widget-boxed padd-bot-0">
//                         <div className="widget-boxed-header">
//                           <h4>Qualification</h4>
//                         </div>
//                         <div className="widget-boxed-body">
//                           <div className="side-list no-border">
//                             <ul>
//                               <li>
//                                 {" "}
//                                 <span className="custom-radio">
//                                   <input type="radio" name="jobtype" value="All Jobs" onChange={(e) => setJobtype("")} id="j1" />
//                                   <label htmlFor="j1" />
//                                 </span>{" "}
//                                 High School <span className="pull-right"></span>
//                               </li>
//                               <li>
//                                 {" "}
//                                 <span className="custom-radio">
//                                   <input type="radio" name="jobtype" value="Full Time" onChange={(e) => setJobtype(e.target.value)} id="a1" />
//                                   <label htmlFor="a1" />
//                                 </span>{" "}
//                                 Intermediate <span className="pull-right"></span>
//                               </li>
//                               <li>
//                                 {" "}
//                                 <span className="custom-radio">
//                                   <input type="radio" name="jobtype" value="Part Time" onChange={(e) => setJobtype(e.target.value)} id="b1" />
//                                   <label htmlFor="b1" />
//                                 </span>{" "}
//                                 Graduation<span className="pull-right"></span>
//                               </li>
//                               <li>
//                                 {" "}
//                                 <span className="custom-radio">
//                                   <input type="radio" name="jobtype" value="Internship" onChange={(e) => setJobtype(e.target.value)} id="c1" />
//                                   <label htmlFor="c1" />
//                                 </span>{" "}
//                                 Master Degree <span className="pull-right"></span>
//                               </li>

//                             </ul>
//                           </div>
//                         </div>
//                       </div>

//                     </div>



//                     {/* Start Job List */}
//                     <div className="col-md-9 col-sm-7">
//                       <div className="row mrg-bot-20">
//                         <form>
//                           <fieldset className="utf_home_form_one" style={{ display: "flex", justifyContent: "space-between" }}>
//                             <div className="col-md-12 col-sm-12 padd-0">
//                               <input
//                                 type="text"
//                                 className="form-control "
//                                 placeholder="Search Keywords..."
//                                 onChange={(e) => setSearch(e.target.value)}
//                               />
//                             </div>


//                           </fieldset>
//                         </form>
//                         <div className="col-md-4 col-sm-12 col-xs-12 browse_job_tlt">

//                           <h4 className="job_vacancie">{seekerData?.length} Jobs &amp; Vacancies</h4>
//                         </div>
//                         <div className="col-md-8 col-sm-12 col-xs-12">
//                           <div className="fl-right short_by_filter_list">
//                             <div className="search-wide short_by_til">
//                               <h5>Short By</h5>
//                             </div>
//                             <div className="search-wide full">

//                               <Select
//                                 className="wide "
//                                 name="time"
//                                 onChange={(value) => selectHandler({ ...sort, name: "time", value })}
//                                 options={sort}
//                               />
//                             </div>
//                             <></>
//                             <div className="search-wide full">
//                               <select className="wide form-control">
//                                 <option>10 Per Page</option>
//                                 <option value={1}>20 Per Page</option>
//                                 <option value={2}>30 Per Page</option>
//                                 <option value={4}>50 Per Page</option>
//                               </select>
//                             </div>
//                           </div>
//                         </div>

//                       </div>
//                       {

//                         seekerData?.map((list, index) => (

//                           <div className="job-verticle-list">
//                             <div className="vertical-job-card">
//                               <div className="vertical-job-header">
//                                 <div className="vrt-job-cmp-logo">
//                                   {" "}
//                                   <a href="job-detail.html">
//                                     <img src={list?.postedby?.cmp_logo ? `https://jobshubback-bry5.onrender.com/public/uploads1/companylogo/${list?.postedby?.cmp_logo}` : avtar} className="img-responsive" />

//                                   </a>{" "}
//                                 </div>
//                                 <h4>

//                                   <Link to={`/jobdetail/${list?._id}`}>{list?.jobtitle}</Link>
//                                 </h4>
//                                 <span className="com-tagline">{list?.postedby?.cmp_name}</span>{" "}
//                                 <span className="pull-right vacancy-no">
//                                   No. <span className="v-count">{index + 1}</span>
//                                 </span>
//                               </div>
//                               <div className="vertical-job-body">
//                                 <div className="row">
//                                   <div className="col-md-9 col-sm-12 col-xs-12">
//                                     <ul className="can-skils">
//                                       <li>
//                                         <strong>Company Name: </strong>{list?.postedby?.cmp_name}
//                                       </li>
//                                       <li>
//                                         <strong>Job Type: </strong>{list?.jobtype}
//                                       </li>
//                                       <li>
//                                         <strong>Skills: </strong>{" "}
//                                         <div>
//                                           {/*{
//                                       list?.map((item) => (

//                                         <span className="skill-tag">{item?.skil}</span>
//                                       ))
//                                     }*/}
//                                           <span className="skill-tag">Jainam</span>{" "}
//                                           <span className="skill-tag">java</span>{" "}
//                                           <span className="skill-tag">php</span>
//                                         </div>{" "}
//                                       </li>
//                                       <li>
//                                         <strong>Experience: </strong>{list.experience}
//                                       </li>
//                                       <li>
//                                         <strong>Gender: </strong>{list.gender}
//                                       </li>
//                                       <li>
//                                         <strong>Location: </strong>{list.postedby.cmp_address} , {list.postedby.city} , {list.postedby.state}
//                                       </li>
//                                     </ul>
//                                   </div>
//                                   <div className="col-md-3 col-sm-12 col-xs-12">
//                                     <div className="vrt-job-act">
//                                       {" "}
//                                       <button
//                                         // to={`/apply/${list.postedby._id}`}
//                                         className="btn-job theme-btn job-apply"

//                                         onClick={(e, val) => { onOpenModal(); jobinput(list.postedby._id) }}
//                                       // onClick={applyFrom}

//                                       >
//                                         Apply Now
//                                       </button>{" "}
//                                       {/*<button

//                                   className="btn-job theme-btn job-apply"

//                                   onClick={(e) => applyFrom(list?.postedby?._id)}

//                                 >
//                                   Apply Now
//                                 </button>{" "}*/}
//                                       <Link
//                                         to={`/jobdetail/${list._id}`}
//                                         title=""
//                                         className="btn-job light-gray-btn"
//                                       >
//                                         Job Detail
//                                       </Link>{" "}
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))
//                       }


//                       <div className="clearfix" />
//                       {/*<div className="utf_flexbox_area padd-0">
//                         <ul className="pagination">
//                           <li className="page-item">
//                             {" "}
//                             <a className="page-link" href="#" aria-label="Previous">
//                               {" "}
//                               <span aria-hidden="true">«</span>{" "}
//                               <span className="sr-only">Previous</span>{" "}
//                             </a>{" "}
//                           </li>
//                           <li className="page-item active">
//                             <a className="page-link" href="#">
//                               1
//                             </a>
//                           </li>
//                           <li className="page-item">
//                             <a className="page-link" href="#">
//                               2
//                             </a>
//                           </li>
//                           <li className="page-item">
//                             <a className="page-link" href="#">
//                               3
//                             </a>
//                           </li>
//                           <li className="page-item">
//                             {" "}
//                             <a className="page-link" href="#" aria-label="Next">
//                               {" "}
//                               <span aria-hidden="true">»</span>{" "}
//                               <span className="sr-only">Next</span>{" "}
//                             </a>{" "}
//                           </li>
//                         </ul>
//                       </div>*/}
//                     </div>
//                   </div>
//                   {/* End Row */}
//                 </div>
//               </section>
//               {/* ====================== End Job Detail 2 ================ */}
//             </>
//             <Seekerfooter />
//           </>
//         </div>
//       }
//     </>
//   )
// }

// export default Searchjob





import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Seekerfooter from './Seekerfooter';
import SeekHeader from "./SeekHeader";
import Typewriter from 'typewriter-effect'
import loadjs from 'loadjs';
import Select from "react-select";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { toast } from 'react-toastify';
import Loader from '../Loader';
function Searchjob() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate an API call with a delay of 3 seconds
    check();
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
  }, []);

  const check = async () => {
    const configOption = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        credentials: "includes",
        'Authorization': `Bearer ${accesstoken}`,
      }
    }

    const response = await fetch('https://jobshubback-bry5.onrender.com/checkprofile', configOption);
    const result = await response.json();
    console.log(`Profile check ${JSON.stringify(result)}`);
    if (result.status !== 0) {
    } else {
      toast.error(result.msg);
      navigate('/seditprofile');

    }
  }

  const [seekerData, setSeekerdata] = useState([]);
  const [search, setSearch] = useState('')
  const [gender, setgender] = useState('')
  const [sort, setSort] = useState('')
  const [salary, setSalary] = useState('');
  const [apply, setApply] = useState({ js_name: '', js_email: '', js_mno: '', resume: '' });
  const navigate = useNavigate();
  const [accesstoken] = useState(localStorage.getItem('seekerToken'));
  const [accesstoken1] = useState(localStorage.getItem('recruiterToken'));
  const [jobtype, setJobtype] = useState('');
  // const { id } = useParams();
  useEffect(() => {
    getpostedjob();
    Profile();
    // fetchcategory();
  }, [search, gender, jobtype]);

  const timeOption = [
    { value: 'Most Recent', label: 'Most Recent' },
    { value: 'Old', label: 'Old' },
  ]

  const getpostedjob = async () => {
    try {
      // const token = localStorage.getItem('seekerToken');
      // console.log("token===>", token)
      const res = await fetch(`https://jobshubback-bry5.onrender.com/getjobpost?search=${search}&gender=${gender}&jobtype=${jobtype}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${accesstoken}`
        }
      });
      const data = await res.json();
      console.log("data===>", data);
      setSeekerdata(data);

    } catch (err) {
      console.log(`Here is some Error :- ${err}`);

    }
  }

  const Profile = async (e) => {
    try {
      const token = JSON.stringify(localStorage.getItem('seekerToken'));
      console.log("token===>", token)
      const res = await fetch('https://jobshubback-bry5.onrender.com/getseeker', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "includes",
          'Authorization': `Bearer ${accesstoken}`,
        }
      });
      const data = await res.json();
      console.log(data);
      setApply({
        ...apply,
        js_name: data.js_name,
        js_mno: data.js_mno,
        js_email: data.js_email,

      });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(`Here is some Error :- ${err}`);
      navigate('/seekerlogin')
    }
  }

  console.log("seekerData===>", seekerData.jobtitle)
  const applyHandle = (_id) => {
    console.log(`id =>>>${_id}`)
  }

  const [categorydata, setCategorydata] = useState();
  const selectHandler = ({ name, value }) => {
    setSort({
      ...sort,
      [name]: value
    })
  }

  // if()
  const salaryRange = (e) => {
    setSalary({ ...salary, [e.target.name]: e.target.value })
  }

  // apply job 
  const inputHandle = (e) => {
    setApply({
      ...apply,
      [e.target.name]: e.target.type == 'file' ? e.target.files[0] : e.target.value
    })
  }

  const [rec, setRec] = useState();
  const jobinput = (item, e) => {
    // e.preventDefault();
    navigate('/apply', { state: item })
  }
  const detailinput = (item, e) => {
    // e.preventDefault();
    navigate('/jobdetail', { state: item })
  }

  const [cv, setCv] = useState({ resume: "" });
  const resumeinputHandle = (event, val) => {
    setCv({
      ...cv, resume: event.target.files[0]
    })
  }
  console.log("apply---->", cv.resume);
  const applyFrom = async () => {
    try {
      const data = new FormData();
      data.append('js_name', apply.js_name);
      data.append('js_email', apply.js_email);
      data.append('js_mno', apply.js_mno);
      data.append('resume', cv.resume);
      data.append('rec_id', rec.recid);

      console.log(`Fornm===>>>${data}`)
      const confiOption = {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "includes",
          'Authorization': `Bearer ${accesstoken}`,
        },
        body: data,
      };
      const response = await fetch(`https://jobshubback-bry5.onrender.com/applyjob`, confiOption);
      const result = await response.json();
      console.log("result=--->", result)
      if (result.status === 201) {
        toast.success('Job Apply ');
        navigate('/seekerhome')
      } else {
        toast.error('Job Not Apply ')
      }
    } catch (error) {
      console.log(`Error from frontend :- ${error}`)
    }
  }

  const [open, setOpen] = useState(false);

  const onOpenModal = (id) => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const jobtypeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setJobtype({
      [name]: value
    })
  }







  // const requestOptions = {
  //   method: 'GET',
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     credentials: "includes",
  //     'Authorization': `Bearer ${accesstoken1.replace(/"/g, '')}`,
  //   }
  // }
  // const fetchcategory = async () => {
  //   const response = await fetch('https://jobshubback-bry5.onrender.com/industry', requestOptions);
  //   const categoryres = await response.json();
  //   const category_list = [];
  //   categoryres.map((item) => { category_list.push({ value: item._id, label: item.ind_name }) })
  //   setCategorydata(category_list)
  // }







  return (
    <>
      {
        isLoading ? <Loader /> : <div>
          <>
            <Modal open={open} onClose={onCloseModal} center>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: 20
                }}
              >
                <span>
                  <h3>APPLY HERE...</h3>
                </span>
                <span></span>
              </div>
              <hr />
              <div className="scr" style={{ height: "350px", overflow: "auto" }}>
                <div className="profile_detail_block">
                  <div className="text-center mrg-bot-20">
                    {/* <h4 className="mrg-0">Front End Designer</h4> */}
                    {/* <span>2708 Scenic Way, Sutter</span> */}
                  </div>
                  <form method='post'>
                    <div className="col-md-6 col-sm-6">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"

                        value={apply.js_name}
                        placeholder="Name"
                        name="js_name"
                        onChange={inputHandle}
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <label>Email</label>
                      <input
                        type="email"
                        name='js_email'
                        className="form-control"
                        value={apply.js_email}
                        placeholder="Email"
                        onChange={inputHandle}
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <label>Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone No"
                        name="js_mno"
                        value={apply.js_mno}
                        onChange={inputHandle}
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <label>Upload CV</label>
                      <div className="custom-file-upload">
                        <input
                          type="file"
                          id="file"
                          name="resume"
                          onChange={(e, val) => resumeinputHandle(e, val)}
                        />
                      </div>
                    </div>

                    <div className="col-md-12 text-center">
                      <button
                        onClick={() => {
                          applyFrom();
                          onCloseModal();
                        }}
                        type="button"
                        className="btn theme-btn btn-m full-width"
                      >
                        APPLY JOB
                      </button>
                    </div>
                    <div className="clearfix" />
                  </form>
                </div>
              </div>
            </Modal>
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
                          .typeString("Browse Job")
                          .pauseFor(2000)
                          .start()
                      }}

                    /></h2>
                    <p>
                      <Link to="/seekerhome" title="Home">
                        Home
                      </Link>{" "}
                      <i className="ti-angle-double-right" /> Browse Job
                    </p>
                  </div>
                </div>
              </div>
              {/* ======================= End Page Title ===================== */}
              {/* ====================== Start Job Detail 2 ================ */}
              <section className="padd-top-80 padd-bot-80">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3 col-sm-5">

                      <div className="widget-boxed padd-bot-0">
                        <div className="widget-boxed-header">
                          <h4>Offerd Salary</h4>
                        </div>
                        <div className="widget-boxed-body">
                          <div className="side-list no-border">
                            <ul>
                              <li>
                                {" "}
                                <span className="checkbox">
                                  <input type="checkbox" id={1} className='custom-checkbox' name='10000' value={'1000'} onChange={(e) => setSalary(...salary, e.target.value)} />
                                  <label htmlFor={1} />
                                </span>{" "}
                                Under 10,000 <span className="pull-right"> </span>
                              </li>
                              <li>
                                {" "}
                                <span className="checkbox">
                                  <input type="checkbox" name='15000' onChange={(e) => setSalary(...salary, e.target.value)} value={'10000 - 15000'} id={2} />
                                  <label htmlFor={2} />
                                </span>{" "}
                                10,000 - 15,000 <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="checkbox">
                                  <input type="checkbox" name='20000' onChange={(e) => setSalary(...salary, e.target.value)} value={'15000 - 20000'} id={3} />
                                  <label htmlFor={3} />
                                </span>{" "}
                                15,000 - 20,000 <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="checkbox">
                                  <input type="checkbox" name='30000' onChange={(e) => setSalary(...salary, e.target.value)} value={'20000 - 30000'} id={4} />
                                  <label htmlFor={4} />
                                </span>{" "}
                                20,000 - 30,000 <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="checkbox">
                                  <input type="checkbox" name='40000' onChange={(e) => setSalary(...salary, e.target.value)} value={'30000 - 40000'} id={5} />
                                  <label htmlFor={5} />
                                </span>{" "}
                                30,000 - 40,000 <span className="pull-right"></span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="widget-boxed padd-bot-0">
                        <div className="widget-boxed-header">
                          <h4>Job Type</h4>
                        </div>
                        <div className="widget-boxed-body">
                          <div className="side-list no-border">
                            <ul>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="All Jobs" onChange={(e) => setJobtype("")} id="j1" />
                                  <label htmlFor="j1" />
                                </span>{" "}
                                All Jobs <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="Full Time" onChange={(e) => setJobtype(e.target.value)} id="a1" />
                                  <label htmlFor="a1" />
                                </span>{" "}
                                Full Time <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="Part Time" onChange={(e) => setJobtype(e.target.value)} id="b1" />
                                  <label htmlFor="b1" />
                                </span>{" "}
                                Part Time <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="Internship" onChange={(e) => setJobtype(e.target.value)} id="c1" />
                                  <label htmlFor="c1" />
                                </span>{" "}
                                Internship <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="Freelancer" onChange={(e) => setJobtype(e.target.value)} id="d1" />
                                  <label htmlFor="d1" />
                                </span>{" "}
                                Freelancer <span className="pull-right">{seekerData.jobtype == "Freelancer" ? seekerData.jobtype.length : ""}</span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="Contract Base" onChange={(e) => setJobtype(e.target.value)} id="e1" />
                                  <label htmlFor="e1" />
                                </span>{" "}
                                Contract Base <span className="pull-right"> </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/*<div className="widget-boxed padd-bot-0">
                        <div className="widget-boxed-header">
                          <h4>Experince</h4>
                        </div>
                        <div className="widget-boxed-body">
                          <div className="side-list no-border">
                            <ul>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="All Jobs" onChange={(e) => setJobtype("")} id="j1" />
                                  <label htmlFor="j1" />
                                </span>{" "}
                                1Year To 2Year <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="Full Time" onChange={(e) => setJobtype(e.target.value)} id="a1" />
                                  <label htmlFor="a1" />
                                </span>{" "}
                                2Year To 3Year <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="Part Time" onChange={(e) => setJobtype(e.target.value)} id="b1" />
                                  <label htmlFor="b1" />
                                </span>{" "}
                                3Year To 4Year <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="Internship" onChange={(e) => setJobtype(e.target.value)} id="c1" />
                                  <label htmlFor="c1" />
                                </span>{" "}
                                4Year To 5Year <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="Freelancer" onChange={(e) => setJobtype(e.target.value)} id="d1" />
                                  <label htmlFor="d1" />
                                </span>{" "}
                                5Year To 7Year <span className="pull-right">{seekerData.jobtype == "Freelancer" ? seekerData.jobtype.length : ""}</span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="Contract Base" onChange={(e) => setJobtype(e.target.value)} id="e1" />
                                  <label htmlFor="e1" />
                                </span>{" "}
                                7Year To 10Year<span className="pull-right"> </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>*/}
                      <div className="widget-boxed padd-bot-0">
                        <div className="widget-boxed-header">
                          <h4>Qualification</h4>
                        </div>
                        <div className="widget-boxed-body">
                          <div className="side-list no-border">
                            <ul>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="All Jobs" onChange={(e) => setJobtype("")} id="j11" />
                                  <label htmlFor="j11" />
                                </span>{" "}
                                High School <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="Full Time" onChange={(e) => setJobtype(e.target.value)} id="a11" />
                                  <label htmlFor="a11" />
                                </span>{" "}
                                Intermediate <span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="Part Time" onChange={(e) => setJobtype(e.target.value)} id="b11" />
                                  <label htmlFor="b11" />
                                </span>{" "}
                                Graduation<span className="pull-right"></span>
                              </li>
                              <li>
                                {" "}
                                <span className="custom-radio">
                                  <input type="radio" name="jobtype" value="Internship" onChange={(e) => setJobtype(e.target.value)} id="c11" />
                                  <label htmlFor="c11" />
                                </span>{" "}
                                Master Degree <span className="pull-right"></span>
                              </li>

                            </ul>
                          </div>
                        </div>
                      </div>

                    </div>



                    {/* Start Job List */}
                    <div className="col-md-9 col-sm-7">
                      <div className="row mrg-bot-20">
                        <form>
                          <fieldset className="utf_home_form_one" style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className="col-md-12 col-sm-12 padd-0">
                              <input
                                type="text"
                                className="form-control "
                                placeholder="Search Keywords..."
                                onChange={(e) => setSearch(e.target.value)}
                              />
                            </div>


                          </fieldset>
                        </form>
                        <div className="col-md-4 col-sm-12 col-xs-12 browse_job_tlt">

                          <h4 className="job_vacancie">{seekerData?.length} Jobs &amp; Vacancies</h4>
                        </div>
                        <div className="col-md-8 col-sm-12 col-xs-12">
                          <div className="fl-right short_by_filter_list">
                            <div className="search-wide short_by_til">
                              <h5>Short By</h5>
                            </div>
                            <div className="search-wide full">

                              <Select
                                className="wide "
                                name="time"
                                onChange={(value) => selectHandler({ ...sort, name: "time", value })}
                                options={sort}
                              />
                            </div>
                            <></>
                            <div className="search-wide full">
                              <select className="wide form-control">
                                <option>10 Per Page</option>
                                <option value={1}>20 Per Page</option>
                                <option value={2}>30 Per Page</option>
                                <option value={4}>50 Per Page</option>
                              </select>
                            </div>
                          </div>
                        </div>

                      </div>
                      {

                        seekerData?.map((list, index) => (

                          <div className="job-verticle-list">
                            <div className="vertical-job-card">
                              <div className="vertical-job-header">
                                <div className="vrt-job-cmp-logo">
                                  {" "}
                                  <a href="job-detail.html">
                                    <img
                                      src="assets/img/company_logo_1.png"
                                      className="img-responsive"
                                      alt=""
                                    />
                                  </a>{" "}
                                </div>
                                <h4>

                                  <Link to={`/jobdetail/${list?._id}`}>{list?.jobtitle}</Link>
                                </h4>
                                <span className="com-tagline">{list?.postedby?.cmp_name}</span>{" "}
                                <span className="pull-right vacancy-no">
                                  No. <span className="v-count">{index + 1}</span>
                                </span>
                              </div>
                              <div className="vertical-job-body">
                                <div className="row">
                                  <div className="col-md-9 col-sm-12 col-xs-12">
                                    <ul className="can-skils">
                                      <li>
                                        <strong>Company Name: </strong>{list?.postedby?.cmp_name}
                                      </li>
                                      <li>
                                        <strong>Job Type: </strong>{list?.jobtype}
                                      </li>
                                      <li>
                                        <strong>Skills: </strong>{" "}
                                        <div>
                                          {/*{
                                      list?.map((item) => (

                                        <span className="skill-tag">{item?.skil}</span>
                                      ))
                                    }*/}
                                          <span className="skill-tag">Jainam</span>{" "}
                                          <span className="skill-tag">java</span>{" "}
                                          <span className="skill-tag">php</span>
                                        </div>{" "}
                                      </li>
                                      <li>
                                        <strong>Experience: </strong>{list.experience}
                                      </li>
                                      <li>
                                        <strong>Gender: </strong>{list.gender}
                                      </li>
                                      <li>
                                        <strong>Location: </strong>{list.joblocation}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-3 col-sm-12 col-xs-12">
                                    <div className="vrt-job-act">
                                      {" "}
                                      {/*<button
                                        // to={`/apply/${list.postedby._id}`}
                                        className="btn-job theme-btn job-apply"

                                        onClick={(e) => { jobinput(list.postedby._id) }}
                                      // onClick={applyFrom}

                                      >
                                        Apply Now
                                      </button>{" "}*/}
                                      <button

                                        className="btn-job theme-btn job-apply"

                                        onClick={(e) => jobinput(list?.postedby?._id)}

                                      >
                                        Apply Now
                                      </button>{" "}
                                      {/*<Link
                                        to={`/jobdetail/${list._id}`}
                                        title=""
                                        className="btn-job light-gray-btn"
                                      >
                                        Job Detail
                                      </Link>{" "}*/}


                                      <button

                                        className="btn-job light-gray-btn"

                                        onClick={(e) => detailinput(list._id)}

                                      >
                                        Job Detail
                                      </button>{" "}


                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }


                      <div className="clearfix" />
                      <div className="utf_flexbox_area padd-0">
                        <ul className="pagination">
                          <li className="page-item">
                            {" "}
                            <a className="page-link" href="#" aria-label="Previous">
                              {" "}
                              <span aria-hidden="true">«</span>{" "}
                              <span className="sr-only">Previous</span>{" "}
                            </a>{" "}
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            {" "}
                            <a className="page-link" href="#" aria-label="Next">
                              {" "}
                              <span aria-hidden="true">»</span>{" "}
                              <span className="sr-only">Next</span>{" "}
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Row */}
                </div>
              </section>
              {/* ====================== End Job Detail 2 ================ */}
            </>
            <Seekerfooter />
          </>
        </div>
      }
    </>
  )
}

export default Searchjob