import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';
import RecHeader from '../recruiterComponent/RecHeader';
import Seekerfooter from './Seekerfooter';
import Typewriter from 'typewriter-effect'
import Loader from '../Loader';
import SeekHeader from './SeekHeader';
function Apply() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate an API call with a delay of 3 seconds
    setTimeout(() => {
      setData("Some data");
      setIsLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    callProfile()
  }, [])

  const location = useLocation();

  const navigate = useNavigate();
  const [apply, setApply] = useState({ js_name: '', js_email: '', js_mno: '', resume: '' });
  const [accesstoken] = useState(localStorage.getItem('seekerToken'))
  const inputHandle = (e) => {
    setApply({

      ...apply,
      [e.target.name]: e.target.type == 'file' ? e.target.files[0] : e.target.value
    })
  }

  const [cv, setCv] = useState();
  const resumeHanlde = (event, val) => {
    setCv({
      ...cv,
      resume: event.target.files[0].name
    })
  }

  const callProfile = async (e) => {
    try {
      const token = JSON.stringify(localStorage.getItem('seekerToken'));
      const res = await fetch('https://jobshubback-19af.onrender.com/getseeker', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "includes",
          'Authorization': `Bearer ${accesstoken}`,
        }
      });
      const data = await res.json();
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
      navigate('/seekerlogin')
    }
  }

  const applyFrom = async (e) => {
    try {
      const data = new FormData();
      const id = location.state
      data.append('js_name', apply.js_name);
      data.append('js_email', apply.js_email);
      data.append('js_mno', apply.js_mno);
      data.append('resume', apply.resume);
      const confiOption = {
        method: "post",
        headers: {
          credentials: "includes",
          'Authorization': `Bearer ${accesstoken}`,
        },
        body: data,
      };

      const response = await fetch(`https://jobshubback-19af.onrender.com/applyjob/${id}`, confiOption);
      const result = await response.json();
      if (result.status === 201) {
        toast.success('Job Apply ');
        navigate('/jobhistory')
      } else {
        toast.error('Job Not Apply ')
      }
    } catch (error) {
    }
    // e.preventDefault();


  }
  return (
    <>
      {isLoading ? <Loader /> : <div>
        <>
          <SeekHeader />
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
                      .typeString("Apply Job")
                      .pauseFor(2000)
                      .start()
                  }}
                /></h2>
                <p>
                  <a href="#" title="Home">
                    Home
                  </a>{" "}
                  <i className="ti-angle-double-right" /> Apply Job
                </p>
              </div>
            </div>
          </div>
          {/* ======================= End Page Title ===================== */}
          {/* ================ Apply Job ======================= */}
          <section className="padd-top-80 padd-bot-80">
            <div className="container">
              <div style={{ padding: "0 15%" }}>
                <div className="profile_detail_block">
                  <div className="text-center mrg-bot-20">
                    <h4 className="mrg-0">Front End Designer</h4>
                    <span>{apply?.js_address}</span>
                  </div>
                  <form>
                    <div className="col-md-6 col-sm-6">
                      <label>Name</label>
                      <input type="text" className="form-control" placeholder="Name" value={apply.js_name} name="js_name" onChange={inputHandle} />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <label>Email</label>
                      <input
                        type="email"
                        name='jsemail'
                        className="form-control"
                        placeholder="Email"
                        value={apply.js_email}
                        onChange={inputHandle}
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <label>Phone</label>
                      <input type="text" className="form-control" placeholder="js_mno" name="js_mno" value={apply.js_mno} onChange={inputHandle} />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <label>Upload CV</label>
                      <div className="custom-file-upload">
                        <input type="file" id="file" name="resume" multiple="" onChange={inputHandle} />
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div className="col-md-12">
                      <label>Pase CV</label>
                      <textarea
                        className="form-control height-120"
                        placeholder="Pase CV"
                        name='pasecv'
                        onChange={inputHandle}
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="button" className="btn theme-btn btn-m full-width" onClick={applyFrom}>
                        Save
                      </button>
                    </div>
                    <div className="clearfix" />
                  </form>
                </div>
              </div>
            </div>
          </section>
          <Seekerfooter />
        </>
      </div>}
    </>
  )
}

export default Apply
