import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Load from '../Load';
import Recruiterfooter from './Recruiterfooter';
import { toast } from "react-toastify";
import RecHeader from './RecHeader';
import Typewriter from 'typewriter-effect'
import Loader from '../Loader';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import moment from 'moment';
import nodata from "../img/nodata.png"
function ManageJob() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate an API call with a delay of 3 seconds
    getOwnJobpostData();

    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
  }, []);
  const navigate = useNavigate();
  const [accesstoken] = useState(localStorage.getItem('recruiterToken'));



  const [jobData, setJobData] = useState([])

  const requestoption = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${accesstoken}`
    }
  }

  //  ********** get own jobpost data  ************** //
  const getOwnJobpostData = async () => {
    const response = await fetch('https://jobshubback-19af.onrender.com/getownjobpost', requestoption)
    const result = await response.json();
    setJobData(result)
  }
  const [jobtrash, setJobtrash] = useState();
  const trashfun = (item) => {
    setJobtrash({
      ...jobtrash, recid: item
    })
  }

  const updatejo = (id) => {
    navigate('/updatejob', { state: id })
  }


  //  ************* delete job  **************** //
  const deleteJobHandler = async () => {
    const response = await fetch(`https://jobshubback-19af.onrender.com/restorejobpost/${jobtrash.recid}`, {
      method: 'put'
    });
    const result = await response.json();
    if (result.status === 200) {
      toast.success("Job Trash Success");
      getOwnJobpostData();
    }
  }



  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      {isLoading ? <Loader /> : <div>
        <>
          < RecHeader />
          <Modal
            open={open} onClose={onCloseModal} center
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                <h3>Are You Sure Want To Trash? </h3>
              </span>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  margin: "0 10px 0 10px",
                }}
              >
                <span>
                  <button className="btn btn-m theme-btn3"
                    onClick={() => {
                      deleteJobHandler();
                      onCloseModal()
                    }}

                  >
                    {" "}
                    <i className="glyphicon glyphicon-ok" />
                  </button>
                  &nbsp;
                  <button className="btn btn-m theme-btn2"
                    onClick={() => {
                      onCloseModal();
                    }}>
                    {" "}
                    <i className=" ti-close" />
                  </button>
                </span>
              </div>
            </div>
          </Modal>
          { /* ======================= Page Title ===================== */}

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
                      .typeString("Manage Jobs")
                      .pauseFor(2000)
                      .start()
                  }}

                /></h2>
                <p>
                  <Link to="/recruiterhome" title="Home">
                    Home
                  </Link>{" "}
                  <i className="ti-angle-double-right" /> Manage Jobs
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
                      <th>Title</th>
                      <th>Posted</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {jobData.length > 0 ?
                    <tbody>
                      {
                        jobData.map((item) => (
                          <tr>
                            <td>
                              <a href="">
                                {" "}

                                {item.jobtitle}
                              </a>
                            </td>
                            <td>
                              <i className="ti-calander" />  {moment(item?.createdAt).format("DD/MM/YYYY")}
                            </td>

                            <td>
                              <button onClick={() => { updatejo(item._id) }} className="cl-success mrg-5 fa fa-edit" >  </button>

                              <button
                                onClick={() => { onOpenModal(); trashfun(item._id) }}

                                className="cl-danger mrg-5 fa fa-trash-o"
                                data-toggle="tooltip"
                                data-original-title="Delete"
                              >
                              </button>
                            </td>
                          </tr>
                        ))
                      }

                    </tbody>
                    :
                    (
                      <td colSpan="5" style={{ textAlign: "center" }}>
                        <img src={nodata} style={{ width: "400px" }} />
                      </td>
                    )
                  }
                </table>

                {

                  jobData?.length > 10 ? <div className="utf_flexbox_area padd-10">
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
                  </div> : ""
                }

              </div>
            </div>
          </section>
          {/* ====================== End Manage Company ======  ========== */}
        </>
        <Recruiterfooter />
      </div>}
    </>

  )
}

export default ManageJob