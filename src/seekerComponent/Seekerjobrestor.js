import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
// import Load from '../Load';
import Seekerfooter from './Seekerfooter';
import { toast } from "react-toastify";
import SeekHeader from './SeekHeader';
// import { configure } from '@testing-library/react';
import Typewriter from 'typewriter-effect'
import Loader from '../Loader';
import moment from 'moment';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function Seekerjobrestor() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    calldata()
    // simulate an API call with a delay of 3 seconds
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
  }, []);

  const [accesstoken] = useState(localStorage.getItem('seekerToken'))
  const [seeker, setSeeker] = useState([]);
  const calldata = async () => {
    const configOption = {
      methodP: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${accesstoken}`
      }
    };
    const data = await fetch("http://localhost:5000/jobrestore", configOption);
    const result = await data.json();
    setSeeker(result)
    console.log(result);
  }

  const deleteJobHandler = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure ?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your Application has been deleted.',
          'success',
          del()
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your Application is safe :)',
          'error'
        )
      }
    })
    var del = async () => {
      const configOption = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${accesstoken}`
        }
      };
      const data = await fetch(`http://localhost:5000/seekerapplydel/${id}`, configOption);
      const result = await data.json()
      console.log("====>", result)
      if (result.status === 201) {
        calldata();
      }
    }
  }
  // const deleteJobHandler = async (id) => {
  //     console.log(id)
  //     const conf = window.confirm('Do you want to Delete Apply job')

  //     if (conf) {
  //       const configOption = {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //           'Authorization': `Bearer ${accesstoken}`
  //         }
  //       };
  //       const data = await fetch(`http://localhost:5000/seekerapplydel/${id}`, configOption);
  //       const result = await data.json()
  //       console.log("====>", result)
  //       if (result.status === 201) {
  //         toast.success("Your Application Delete")
  //         calldata();
  //       }
  //     }
  // }
  const restoreHandle = async (id) => {
    const config = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${accesstoken}`
      }
    }
    const restore = await fetch(`http://localhost:5000/jobapplyrestore/${id}`, config);
    const result = await restore.json()
    if (result.status === 201) {
      Swal.fire({
        position: 'top-middle',
        icon: 'success',
        title: 'Your Your Job Post Restore',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/jobhistory')
    }
  }

  const delHandle = async () => {

  }
  //   // return (
  //   //   <>
  //   //     {isLoading ? <Loader /> : <div>
  //   //       <>
  //   //         < SeekHeader />
  //   //         { /* ======================= Page Title ===================== */}

  //   //         <div className="page-title">
  //   //           <div className="container">
  //   //             <div className="page-caption">
  //   //               <h2><Typewriter
  //   //                 options={{
  //   //                   autoStart: true,
  //   //                   loop: true,
  //   //                 }}
  //   //                 onInit={(typewriter) => {
  //   //                   typewriter
  //   //                     .typeString("Seeker Jobs Restore")
  //   //                     .pauseFor(2000)
  //   //                     .start()
  //   //                 }}

  //   //               /></h2>
  //   //               <p>
  //   //                 <Link to="/home" title="Home">
  //   //                   Home
  //   //                 </Link>{" "}
  //   //                 <i className="ti-angle-double-right" /> <Link to="/seekerprofile" title="Home">
  //   //                   Seeker Profile
  //   //                 </Link>{" "}

  //   //                 <i className="ti-angle-double-right" /> Seeker Jobs Restore
  //   //               </p>
  //   //             </div>
  //   //           </div>
  //   //         </div>
  //   //         {/* ======================= End Page Title ===================== */}


  //   //         {/* ======================== Manage Job ========================= */}
  //   //         <section className="utf_manage_jobs_area padd-top-80 padd-bot-80">
  //   //           <div className="container">
  //   //             <div className="table-responsive">
  //   //               <table className="table table-lg table-hover">
  //   //                 <thead>
  //   //                   <tr>
  //   //                     <th>Recruiter Name</th>
  //   //                     <th>Applied Date</th>
  //   //                     <th>Action</th>
  //   //                   </tr>
  //   //                 </thead>
  //   //                 <tbody>
  //   //                   {
  //   //                     seeker?.map((item) => (
  //   //                       <tr>
  //   //                         <td><i className="ti-credit-card" />{item?.rec_id?.cmp_name}</td>

  //   //                         <td>
  //   //                           <Link to={`updatejob/${item?._id}`} className="cl-success mrg-5" > <i className="fa fa-edit" /> </Link>

  //   //                           <Link to="/seekerjobrestor" className="cl-danger mrg-5" data-toggle="tooltip" onClick={() => deleteJobHandler(item?._id)} > <i className="fa fa-trash-o" /> </Link>
  //   //                         </td>
  //   //                       </tr>
  //   //                     ))
  //   //                   }

  //   //                 </tbody>
  //   //               </table>
  //   //               <div className="utf_flexbox_area padd-10">
  //   //                 <ul className="pagination">
  //   //                   <li className="page-item">
  //   //                     {" "}
  //   //                     <a className="page-link" href="#" aria-label="Previous">
  //   //                       {" "}
  //   //                       <span aria-hidden="true">«</span>{" "}
  //   //                       <span className="sr-only">Previous</span>{" "}
  //   //                     </a>{" "}
  //   //                   </li>
  //   //                   <li className="page-item active">
  //   //                     <a className="page-link" href="#">
  //   //                       1
  //   //                     </a>
  //   //                   </li>
  //   //                   <li className="page-item">
  //   //                     <a className="page-link" href="#">
  //   //                       2
  //   //                     </a>
  //   //                   </li>
  //   //                   <li className="page-item">
  //   //                     <a className="page-link" href="#">
  //   //                       3
  //   //                     </a>
  //   //                   </li>
  //   //                   <li className="page-item">
  //   //                     {" "}
  //   //                     <a className="page-link" href="#" aria-label="Next">
  //   //                       {" "}
  //   //                       <span aria-hidden="true">»</span>{" "}
  //   //                       <span className="sr-only">Next</span>{" "}
  //   //                     </a>{" "}
  //   //                   </li>
  //   //                 </ul>
  //   //               </div>
  //   //             </div>
  //   //           </div>
  //   //         </section>
  //   //         {/* ====================== End Manage Company ======  ========== */}
  //   //       </>
  //   //       <Seekerfooter />
  //   //     </div >}
  //   //   </>

  //   // )

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  //   return (
  //     <>
  //       {isLoading ? <Loader /> : <div>
  //         <>
  //           < SeekHeader />
  //           <Modal
  //             open={open} onClose={onCloseModal} center
  //           >
  //             <div
  //               style={{
  //                 display: "flex",
  //                 justifyContent: "space-between",
  //                 alignItems: "center",
  //               }}
  //             >
  //               <span>
  //                 <h3>Are You Sure Want To Delete? </h3>
  //               </span>
  //             </div>

  //             <div>
  //               <div
  //                 style={{
  //                   display: "flex",
  //                   justifyContent: "flex-end",
  //                   margin: "0 10px 0 10px",
  //                 }}
  //               >
  //                 <span>
  //                   <button className="btn btn-m theme-btn3"
  //                     onClick={() => {
  //                       deleteJobHandler();
  //                       onCloseModal()
  //                     }}

  //                   >
  //                     {" "}
  //                     <i className="glyphicon glyphicon-ok" />
  //                   </button>
  //                   &nbsp;
  //                   <button className="btn btn-m theme-btn2"
  //                     onClick={() => {
  //                       onCloseModal();
  //                     }}>
  //                     {" "}
  //                     <i className=" ti-close" />
  //                   </button>
  //                 </span>
  //               </div>
  //             </div>
  //           </Modal>


  //           { /* ======================= Page Title ===================== */}

  //           <div className="page-title">
  //             <div className="container">
  //               <div className="page-caption">
  //                 <h2><Typewriter
  //                   options={{
  //                     autoStart: true,
  //                     loop: true,
  //                   }}
  //                   onInit={(typewriter) => {
  //                     typewriter
  //                       .typeString("Recruiter Job Post Restore")
  //                       .pauseFor(2000)
  //                       .start()
  //                   }}

  //                 /></h2>
  //                 <p>
  //                   <Link to="/recruiterhome" title="Home">
  //                     Home
  //                   </Link>{" "}
  //                   <i className="ti-angle-double-right" /> <Link to="/manage" title="Home">
  //                     Recruiter Profile
  //                   </Link>{" "}

  //                   <i className="ti-angle-double-right" /> Recruiter Job Post Restore
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //           {/* ======================= End Page Title ===================== */}


  //           {/* ======================== Manage Job ========================= */}
  //           <section className="utf_manage_jobs_area padd-top-80 padd-bot-80">
  //             <div className="container">
  //               <div className="table-responsive">
  //                 <table className="table table-lg table-hover">
  //                   <thead>
  //                     <tr>
  //                       <th>Job Title</th>
  //                       <th>Trashed Date</th>
  //                       <th>Action</th>
  //                     </tr>
  //                   </thead>
  //                   <tbody>

  //                   </tbody>
  //                 </table>
  //                 {/*<div className="utf_flexbox_area padd-10">
  //                                 <ul className="pagination">
  //                                     <li className="page-item">
  //                                         {" "}
  //                                         <a className="page-link" href="#" aria-label="Previous">
  //                                             {" "}
  //                                             <span aria-hidden="true">«</span>{" "}
  //                                             <span className="sr-only">Previous</span>{" "}
  //                                         </a>{" "}
  //                                     </li>
  //                                     <li className="page-item active">
  //                                         <a className="page-link" href="#">
  //                                             1
  //                                         </a>
  //                                     </li>
  //                                     <li className="page-item">
  //                                         <a className="page-link" href="#">
  //                                             2
  //                                         </a>
  //                                     </li>
  //                                     <li className="page-item">
  //                                         <a className="page-link" href="#">
  //                                             3
  //                                         </a>
  //                                     </li>
  //                                     <li className="page-item">
  //                                         {" "}
  //                                         <a className="page-link" href="#" aria-label="Next">
  //                                             {" "}
  //                                             <span aria-hidden="true">»</span>{" "}
  //                                             <span className="sr-only">Next</span>{" "}
  //                                         </a>{" "}
  //                                     </li>
  //                                 </ul>
  //                             </div>*/}
  //               </div>
  //             </div>
  //           </section>
  //           {/* ====================== End Manage Company ======  ========== */}
  //         </>
  //         <Seekerfooter />
  //       </div>}
  //     </>

  //   )
  // }

  // export default Seekerjobrestor


  // import React, { useState, useEffect, useNavigate } from 'react'
  // import { Link, useParams } from 'react-router-dom'
  // import Load from '../Load';
  // import Seekerfooter from './Seekerfooter';
  // import { toast } from "react-toastify";
  // import SeekHeader from './SeekHeader';
  // import { configure } from '@testing-library/react';
  // function Seekerjobrestor() {
  //   useEffect(() => {
  //     calldata()
  //   }, [])
  //   const [accesstoken] = useState(localStorage.getItem('seekerToken'))
  //   const [seeker, setSeeker] = useState([]);
  //   const calldata = async () => {
  //     const configOption = {
  //       methodP: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         'Authorization': `Bearer ${accesstoken}`
  //       }
  //     };
  //     const data = await fetch("http://localhost:5000/jobrestore", configOption);
  //     const result = await data.json();
  //     setSeeker(result)
  //     console.log(result);
  //   }
  //   const deleteJobHandler = async (id) => {
  //     console.log(id)
  //     const conf = window.confirm('Do you want to Delete Apply job')

  //     if (conf) {
  //       const configOption = {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //           'Authorization': `Bearer ${accesstoken}`
  //         }
  //       };
  //       const data = await fetch(`http://localhost:5000/seekerapplydel/${id}`, configOption);
  //       const result = await data.json()
  //       console.log("====>", result)
  //       if (result.status === 201) {
  //         toast.success("Your Application Delete")
  //         calldata();
  //       }
  //     }
  //   }
  return (
    <>
      {isLoading ? <Loader /> : <div>
        <>
          < SeekHeader />
          { /* ======================= Page Title ===================== */}

          <div className="page-title">
            <div className="container">
              <div className="page-caption">
                <h2>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Seeker Apply Job Restore")
                        .pauseFor(2000)
                        .start()
                    }}

                  /></h2>
                <p>
                  <Link to="/home" title="Home">
                    Home
                  </Link>{" "}
                  <i className="ti-angle-double-right" /> <Link to="/seekerprofile" title="Home">
                    Seeker Profile
                  </Link>{" "}

                  <i className="ti-angle-double-right" /> Seeker Jobs Restore
                </p>
              </div>
            </div>
          </div>
          {/* ======================= End Page Title ===================== */}


          {/* ======================== Manage Job ========================= */}
          <section className="utf_manage_jobs_area padd-top-80 padd-bot-80">
            <div className="container">
              <div className="table-responsive">
                <table className="table table-lg table-hover">
                  <thead>
                    <tr>
                      <th>Recruiter Name</th>
                      <th>Trash Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      seeker.map((item) => (
                        <tr>
                          <td><i className="ti-user" />{item?.rec_id?.cmp_name}</td>
                          <td>{moment(item.updatedAt).format("DD/MM/YYYY")}</td>
                          <td>
                            {/*<Link to={`updatejob/${item._id}`} className="cl-success mrg-5" > <i className="fa fa-edit" /> </Link>*/}
                            <button
                              className="cl-success mrg-5 fa fa-edit"
                              data-toggle="tooltip"
                              data-original-title="Update"
                              onClick={() => restoreHandle(item._id)}
                            ></button>
                            <Link to="/seekerjobrestor" className="cl-danger mrg-5" data-toggle="tooltip" onClick={() => deleteJobHandler(item._id)} > <i className="fa fa-trash-o" /> </Link>
                          </td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>
                {seeker.length > 20 ? <div className="utf_flexbox_area padd-10">
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
                </div> : ''}
              </div>
            </div>
          </section>
          {/* ====================== End Manage Company ======  ========== */}
        </>
        <Seekerfooter />
      </div>}
    </>

  )
}
export default Seekerjobrestor