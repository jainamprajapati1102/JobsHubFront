
// // import { useState } from "react";
// // import { useNavigate, Link } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import 'react-toastify/dist/ReactToastify.css';
// // import RecHeader from './RecHeader'
// // import Recruiterfooter from './Recruiterfooter'
// // import loadjs from "loadjs";
// // import { Button } from "react-bootstrap";
// // import useRazorpay from "react-razorpay";
// // const Payment = () => {
// //     const [amount] = useState({ amount: 1000 })
// //     const navigate = useNavigate();
// //     const [accesstoken] = useState(localStorage.getItem("recruiterToken"));

// //     // const inputHandler = async (e, amt) => {
// //     //     setAmount({
// //     //         ...amount,
// //     //         [e.target.name]: e.target.value
// //     //     })
// //     // }

// //     const paymentHandler = async () => {
// //         // e.preventDefault();  
// //         const requestOptions = {
// //             method: "POST",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify(amount),
// //         };
// //         const response = await fetch("http://localhost:5000/order", requestOptions)
// //         const result = await response.json();
// //         console.log(result.data.amount)
// //         razerpayopenHandle(result.data)
// //     }


// //     const razerpayopenHandle = (data) => {
// //         var options = {
// //             key: "rzp_test_9nfVtZEUhhp81B",
// //             amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
// //             currency: data.currency,
// //             name: "JOB'S HUB",
// //             description: "Test Transaction",
// //             image: "assets/img/blwhole-payment.png",
// //             order_id: data.id,
// //             notes: {
// //                 "address": "JOB'S HUB payment"
// //             },
// //             theme: {
// //                 "color": "#009ee5"
// //             },
// //             handler: async (response) => {
// //                 const requestOptions1 = {
// //                     method: "POST",
// //                     headers: {
// //                         "Content-Type": "application/json",
// //                         'Authorization': `Bearer ${accesstoken}`,
// //                     },
// //                     body: JSON.stringify(response),
// //                 };
// //                 const res = await fetch('http://localhost:5000/verify', requestOptions1)
// //                 const result = await res.json();
// //                 if (result.status === 200) {
// //                     toast.success("payment success");
// //                     navigate('/manageprofile')
// //                 }
// //                 else {
// //                     toast.error('payment failed please try again later')
// //                     navigate('/payment')
// //                 }
// //             },
// //         }
// //         const rzp = new window.Razorpay(options)
// //         rzp.open();
// //     }
// //     return (
// //         <>
// //             <loadjs />
// //             <RecHeader />
// //             <div className="page-title">
// //                 <div className="container">
// //                     <div className="page-caption">
// //                         <h2>Payment</h2>
// //                         <p>
// //                             <Link to="/home" title="Home">
// //                                 Home
// //                             </Link>{" "}
// //                             <i className="ti-angle-double-right" /> Payment
// //                         </p>
// //                     </div>
// //                 </div>
// //             </div>
// //             <>
// //                 {/* <button onClick={paymentHandler}>Continue to Payment</button>*/}

// //                 <div className="price-table-wrapper">
// //                     <div className="pricing-table featured-table col-md-3">
// //                         <h2 className="pricing-table__heade">- GOLD -</h2>
// //                         <h3 className="pricing-table__price" >2000</h3>
// //                         <Button

// //                             style={{ backgroundColor: "#D3AE36" }}
// //                             className="pricing-table__button"

// //                             onClick={(e) => {
// //                                 // inputHandler(2000);
// //                                 paymentHandler()
// //                             }}
// //                         >
// //                             Buy Now
// //                         </Button>
// //                         <ul className="pricing-table__list">
// //                             <li>6 Months Validity</li>
// //                             <li>30 Job Post</li>
// //                             <li>3000 Resume Access</li>
// //                             <li>Only Company Working Time</li>
// //                         </ul>
// //                     </div>
// //                     <div className="pricing-table col-md-3">
// //                         <h2 className="pricing-table__heade">- PLATINUM -</h2>
// //                         <h3 className="pricing-table__price" >4000</h3>
// //                         <Link
// //                             target="_blank"
// //                             className="pricing-table__button"
// //                             to=""
// //                         >
// //                             Buy Now
// //                         </Link>
// //                         <ul className="pricing-table__list">
// //                             <li>1 Year Validity</li>
// //                             <li>60 Job Post</li>
// //                             <li>Unlimited Resume Access</li>
// //                             <li>24 hour support</li>
// //                         </ul>

// //                     </div>

// //                     <div className="pricing-table col-md-3">
// //                         <h2 className="pricing-table__heade">- SILVER -</h2>
// //                         <h3 className="pricing-table__price" style={{ color: "#848482" }}>1000</h3>
// //                         <Link
// //                             target="_blank"
// //                             className="slv pricing-table__button"
// //                             to=""
// //                         >
// //                             Buy Now
// //                         </Link>
// //                         <ul className="pricing-table__list">
// //                             <li>3 Months Validity</li>
// //                             <li>15 Job Post</li>
// //                             <li>1500 Resume Access</li>
// //                             <li>No Support</li>
// //                         </ul>
// //                     </div>
// //                 </div>
// //             </>
// //             <Recruiterfooter />
// //         </>

// //     )
// // }

// // export default Payment

// //  varshil code

// // import React, { useState } from 'react'
// // import { Link, useNavigate } from 'react-router-dom'
// // import Load from "../Load";
// // import RecHeader from "./RecHeader";
// // import Recruiterfooter from "./Recruiterfooter";
// // import useRazorpay from "react-razorpay";
// // import { toast } from "react-toastify";
// // import 'react-toastify/dist/ReactToastify.css';
// // import Typewriter from 'typewriter-effect'
// // function Payment() {
// //     const Razorpay = useRazorpay();
// //     const [accesstoken] = useState(localStorage.getItem("recruiterToken"));
// //     const navigate = useNavigate();
// //     // const submitFunction = () => {
// //     //  form Validation
// //     const [amount] = useState({ amount: 1000 })

// //     // const inputHandler = async (e, amt) => {
// //     //     setAmount({
// //     //         ...amount,
// //     //         [e.target.name]: e.target.value
// //     //     })
// //     // }

// //     const paymentHandler = async () => {
// //         // e.preventDefault();  
// //         const requestOptions = {
// //             method: "POST",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify(amount),
// //         };
// //         const response = await fetch("http://localhost:5000/order", requestOptions)
// //         const result = await response.json();
// //         console.log(result.data.amount)
// //         console.log(result.data)
// //         razerpayopenHandle(result.data)
// //     }


// //     const razerpayopenHandle = (data) => {
// //         var options = {
// //             key: "rzp_test_9nfVtZEUhhp81B",
// //             amount: Number(data.amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
// //             currency: data.currency,
// //             name: "JOB'S HUB",
// //             description: "Test Transaction",
// //             image: "C:/Users/HP/OneDrive/Desktop/jobshub/public/assets/img/blwhole-payment.png.jpg",
// //             order_id: data.id,
// //             notes: {
// //                 "address": "JOB'S HUB payment"
// //             },
// //             theme: {
// //                 "color": "#009ee5"
// //             },
// //             handler: async (response) => {
// //                 const requestOptions1 = {
// //                     method: "POST",
// //                     headers: {
// //                         "Content-Type": "application/json",
// //                         'Authorization': `Bearer ${accesstoken}`,
// //                     },
// //                     body: JSON.stringify(response),
// //                 };
// //                 const res = await fetch('http://localhost:5000/verify', requestOptions1)
// //                 const result = await res.json();
// //                 if (result.status === 200) {
// //                     toast.success("payment success");
// //                     navigate('/manageprofile')
// //                 }
// //                 else {
// //                     toast.error('payment failed please try again later')
// //                     navigate('/payment')
// //                 }
// //             },
// //         }
// //         const rzp = new window.Razorpay(options)
// //         rzp.open();
// //     }

// //     return (
// //         <>
// //             <Load />
// //             <RecHeader />
// //             <>
// //                 <link
// //                     href="https://fonts.googleapis.com/css?family=Lato:400,300,700,100"
// //                     rel="stylesheet"
// //                     type="text/css"
// //                 />


// //                 {/* ======================= Page Title ===================== */}
// //                 <div className="page-title">
// //                     <div className="container">
// //                         <div className="page-caption">
// //                             <h2><Typewriter
// //                                 options={{
// //                                     autoStart: true,
// //                                     loop: true,
// //                                 }}
// //                                 onInit={(typewriter) => {
// //                                     typewriter
// //                                         .typeString("Subscription")
// //                                         .pauseFor(2000)
// //                                         .start()
// //                                 }}

// //                             /></h2>
// //                             <p>
// //                                 <Link to="/recruiterhome" title="Home">
// //                                     Home
// //                                 </Link>{" "}
// //                                 <i className="ti-angle-double-right" /> Subscription
// //                             </p>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 {/* ======================= End Page Title ===================== */}
// //                 <a target="blank" href="http://www.digimadmedia.com"></a>
// //                 <div className="price-table-wrapper">
// //                     <a target="blank" href="http://www.digimadmedia.com"></a>
// //                     <div className="pricing-table">
// //                         <a target="blank" href="http://www.digimadmedia.com">
// //                             <h2 className="pricing-table__header">- PLATINUM -</h2>
// //                             <h3 className="pricing-table__price">4000 <span style={{ fontFamily: "sans-serif" }}>&#8377; </span></h3>
// //                         </a>
// //                         <button
// //                             target="_blank"

// //                             to=""
// //                             id='buy'
// //                             onClick={() => paymentHandler()}
// //                             style={{ display: "none" }}
// //                         >
// //                             Buy Now
// //                         </button>
// //                         <label for='buy' className="pricing-table__button">Buy Now</label>
// //                         <ul className="pricing-table__list">
// //                             <li>1 Year Validity</li>
// //                             <li>60 Job Post</li>
// //                             <li>Unlimited Resume Access</li>
// //                             <li>24 hour support</li>
// //                         </ul>
// //                     </div>
// //                     <div className="pricing-table featured-table">
// //                         <h2 className="pricing-table__header">- GOLD -</h2>
// //                         <h3 className="pricing-table__price" style={{ color: "#dab842" }}>2000 <span style={{ fontFamily: "sans-serif" }}>&#8377; </span></h3>
// //                         <button
// //                             target="_blank"

// //                             to=""
// //                             id='buy'
// //                             onClick={() => paymentHandler()}
// //                             style={{ display: "none", color: "#c9a42b" }}
// //                         >
// //                             Buy Now
// //                         </button>
// //                         <label for='buy' className="pricing-table__button_gld">Buy Now</label>
// //                         <ul className="pricing-table__list">
// //                             <li>6 Months Validity</li>
// //                             <li>30 Job Post</li>
// //                             <li>3000 Resume Access</li>
// //                             <li>Only Company Working Time</li>
// //                         </ul>
// //                     </div>
// //                     <div className="pricing-table">
// //                         <h2 className="pricing-table__header">- SILVER -</h2>
// //                         <h3 className="pricing-table__price" style={{ color: "#7e888e" }}>1000 <span style={{ fontFamily: "sans-serif" }}>&#8377; </span></h3>

// //                         <button
// //                             target="_blank"
// //                             to=""
// //                             id='buy'
// //                             onClick={() => paymentHandler()}
// //                             style={{ display: "none" }}
// //                         >
// //                             Buy Now
// //                         </button>
// //                         <label for='buy' className="pricing-table__button_slv">Buy Now</label>
// //                         <ul className="pricing-table__list">
// //                             <li>3 Months Validity</li>
// //                             <li>15 Job Post</li>
// //                             <li>1500 Resume Access</li>
// //                             <li>No Support</li>
// //                         </ul>
// //                     </div>
// //                 </div>


// //                 <Recruiterfooter />
// //             </>
// //         </>
// //     );
// // }

// // export default Payment;


// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import 'react-toastify/dist/ReactToastify.css';

// // const Payment = () => {
// //     const [amount] = useState({ amount: 1000 })
// //     const navigate = useNavigate();
// //     const [accesstoken] = useState(localStorage.getItem("recruiterToken"));

// //     const paymentHandler = async () => {
// //         // e.preventDefault();  
// //         const requestOptions = {
// //             method: "POST",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify(amount),
// //         };
// //         const response = await fetch("http://localhost:5000/order", requestOptions)
// //         const result = await response.json();
// //         console.log(result.data.amount)
// //         razerpayopenHandle(result.data)
// //     }


// //     const razerpayopenHandle = (data) => {
// //         console.log("amount======>", data.amount)

// //         var options = {
// //             key: "rzp_test_9nfVtZEUhhp81B",
// //             amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
// //             currency: data.currency,
// //             name: "JOB'S HUB",
// //             description: "Test Transaction",
// //             image: "assets/img/blwhole-payment.png",
// //             order_id: data.id,
// //             notes: {
// //                 "address": "JOB'S HUB payment"
// //             },
// //             theme: {
// //                 "color": "#009ee5"
// //             },
// //             handler: async (response) => {
// //                 const requestOptions1 = {
// //                     method: "POST",
// //                     headers: {
// //                         "Content-Type": "application/json",
// //                         'Authorization': `Bearer ${accesstoken}`,
// //                     },
// //                     body: JSON.stringify(response),
// //                 };

// //                 const res = await fetch('http://localhost:5000/verify', requestOptions1)
// //                 const result = await res.json();

// //                 if (result.status === 200) {
// //                     toast.success("payment success");
// //                     navigate('/manageprofile')
// //                 }
// //                 else {
// //                     toast.error('payment failed please try again later')
// //                     navigate('/payment')
// //                 }
// //             },
// //         }
// //         const rzp = new window.Razorpay(options)
// //         rzp.open();
// //     }

// //     return (
// //         <>
// //             <button onClick={paymentHandler}>Continue to Payment</button>
// //         </>

// //     )
// // }

// // export default Payment


// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import Load from "../Load";
// import RecHeader from "./RecHeader";
// import Recruiterfooter from "./Recruiterfooter";
// // import useRazorpay from "react-razorpay";
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import Typewriter from 'typewriter-effect';

// function Payment() {

//     const [accesstoken] = useState(localStorage.getItem("recruiterToken"));
//     const navigate = useNavigate();
//     // const submitFunction = () => {
//     //  form Validation
//     // const [amount] = useState({ amount: 1000 })
//     // const [amount, setamount] = useState()
//     // console.log("mount--->", amount)

//     // const inputHandler = async (e, amt) => {
//     //     setAmount({
//     //         ...amount,
//     //         [e.target.name]: e.target.value
//     //     })
//     // }



//     const paymentHandler = async (amount, packagename) => {
//         let _data = { amount: amount, packagename: packagename }
//         console.log("data===>", _data)
//         console.log("amount===>", amount)
//         console.log("package===>", packagename)


//         // e.preventDefault();  
//         const requestOptions = {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(_data),
//         };
//         const response = await fetch("http://localhost:5000/order", requestOptions)
//         const result = await response.json();
//         console.log("---->", result.data)
//         razerpayopenHandle(result.data, packagename)
//     }



//     const razerpayopenHandle = (data, packagename) => {
//         console.log("packagename---->", packagename)
//         var options = {
//             key: "rzp_test_9nfVtZEUhhp81B",
//             amount: Number(data.amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//             currency: data.currency,
//             name: "JOB'S HUB",
//             description: "Test Transaction",
//             image: "assets/img/blwhole-payment.png",
//             order_id: data.id,
//             notes: {
//                 "address": "JOB'S HUB payment"
//             },
//             theme: {
//                 "color": "#009ee5"
//             },
//             handler: async (response) => {
//                 console.log("response--->", response)
//                 const requestOptions1 = {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                         'Authorization': `Bearer ${accesstoken}`,
//                     },
//                     body: JSON.stringify({ ...response, packagename }),
//                 };
//                 const res = await fetch('http://localhost:5000/verify', requestOptions1)
//                 const result = await res.json();
//                 if (result.status === 200) {
//                     toast.success("payment success");
//                     navigate('/manageprofile')
//                 }
//                 else {
//                     toast.error('payment failed please try again later')
//                     navigate('/payment')
//                 }
//             },
//         }
//         const rzp = new window.Razorpay(options)
//         rzp.open();
//     }

//     return (
//         <>
//             <Load />
//             <RecHeader />
//             <>
//                 <link
//                     href="https://fonts.googleapis.com/css?family=Lato:400,300,700,100"
//                     rel="stylesheet"
//                     type="text/css"
//                 />


//                 {/* ======================= Page Title ===================== */}
//                 <div className="page-title">
//                     <div className="container">
//                         <div className="page-caption">
//                             <h2><Typewriter
//                                 options={{
//                                     autoStart: true,
//                                     loop: true,
//                                 }}
//                                 onInit={(typewriter) => {
//                                     typewriter
//                                         .typeString("Subscription")
//                                         .pauseFor(2000)
//                                         .start()
//                                 }}

//                             /></h2>
//                             <p>
//                                 <Link to="/recruiterhome" title="Home">
//                                     Home
//                                 </Link>{" "}
//                                 <i className="ti-angle-double-right" /> Subscription
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 {/* ======================= End Page Title ===================== */}
//                 <a target="blank" href="http://www.digimadmedia.com"></a>
//                 <div className="price-table-wrapper">
//                     {/* <a target="blank" href="http://www.digimadmedia.com"></a> */}
//                     <div className="pricing-table">
//                         {/* <a target="blank" href="http://www.digimadmedia.com"> </a> */}
//                         <h2 className="pricing-table__header">- PLATINUM -</h2>
//                         <h3 className="pricing-table__price">4000 <span style={{ fontFamily: "sans-serif" }}>&#8377; </span></h3>
//                         <button id='buy' className="pricing-table__button" onClick={() => paymentHandler(4000, "PLATINUM")}>platinum</button>

//                         {/* <button
//                             // target="_blank"
//                             // to=""
//                             // id='buy'
//                             onClick={() => paymentHandler(4000)}
//                             style={{ display: "none" }}
//                         >
//                             Buy Now
//                         </button> */}
//                         {/* <label for='buy' className="pricing-table__button">Buy Now</label> */}
//                         <ul className="pricing-table__list">
//                             <li>1 Year Validity</li>
//                             <li>60 Job Post</li>
//                             <li>Unlimited Resume Access</li>
//                             <li>24 hour support</li>
//                         </ul>
//                     </div>


//                     <div className="pricing-table featured-table">
//                         <h2 className="pricing-table__header">- GOLD -</h2>
//                         <h3 className="pricing-table__price" style={{ color: "#dab842" }}>2000 <span style={{ fontFamily: "sans-serif" }}>&#8377; </span></h3>
//                         <button className="pricing-table__button_gld" onClick={() => paymentHandler(2000, "GOLD")}>gold</button>
//                         {/* <button
//                             // target="_blank"
//                             // to=""
//                             id='buy'
//                             onClick={() => paymentHandler(2000)}
//                             style={{ display: "none", color: "#c9a42b" }}
//                         >
//                             Buy Now
//                         </button> */}
//                         {/* <label for='buy' className="pricing-table__button_gld">Buy Now</label> */}
//                         <ul className="pricing-table__list">
//                             <li>6 Months Validity</li>
//                             <li>30 Job Post</li>
//                             <li>3000 Resume Access</li>
//                             <li>Only Company Working Time</li>
//                         </ul>
//                     </div>


//                     <div className="pricing-table">
//                         <h2 className="pricing-table__header">- SILVER -</h2>
//                         <h3 className="pricing-table__price" style={{ color: "#7e888e" }}>1000 <span style={{ fontFamily: "sans-serif" }}>&#8377; </span></h3>
//                         <button id='buy' className="pricing-table__button_slv" onClick={() => paymentHandler(1000, "SILVER")}>silver</button>
//                         {/* <button
//                             // target="_blank"
//                             // to=""
//                             id='buy'
//                             onClick={() => paymentHandler(1000)}
//                             style={{ display: "none" }}
//                         >
//                             Buy Now
//                         </button> */}
//                         {/* <label for='buy' className="pricing-table__button_slv">Buy Now</label> */}
//                         <ul className="pricing-table__list">
//                             <li>3 Months Validity</li>
//                             <li>15 Job Post</li>
//                             <li>1500 Resume Access</li>
//                             <li>No Support</li>
//                         </ul>
//                     </div>
//                 </div>


//                 <Recruiterfooter />
//             </>
//         </>
//     );
// }

// export default Payment;








// Prince new code 30/3  for payment according job post 
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// const Payment = () => {
//     const [amount] = useState({ amount: 1000 })
//     const navigate = useNavigate();
//     const [accesstoken] = useState(localStorage.getItem("recruiterToken"));

//     const paymentHandler = async () => {
//         // e.preventDefault();  
//         const requestOptions = {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(amount),
//         };
//         const response = await fetch("http://localhost:5000/order", requestOptions)
//         const result = await response.json();
//         console.log(result.data.amount)
//         razerpayopenHandle(result.data)
//     }


//     const razerpayopenHandle = (data) => {
//         console.log("amount======>", data.amount)

//         var options = {
//             key: "rzp_test_9nfVtZEUhhp81B",
//             amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//             currency: data.currency,
//             name: "JOB'S HUB",
//             description: "Test Transaction",
//             image: "assets/img/blwhole-payment.png",
//             order_id: data.id,
//             notes: {
//                 "address": "JOB'S HUB payment"
//             },
//             theme: {
//                 "color": "#009ee5"
//             },
//             handler: async (response) => {
//                 const requestOptions1 = {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                         'Authorization': `Bearer ${accesstoken}`,
//                     },
//                     body: JSON.stringify(response),
//                 };

//                 const res = await fetch('http://localhost:5000/verify', requestOptions1)
//                 const result = await res.json();

//                 if (result.status === 200) {
//                     toast.success("payment success");
//                     navigate('/manageprofile')
//                 }
//                 else {
//                     toast.error('payment failed please try again later')
//                     navigate('/payment')
//                 }
//             },
//         }
//         const rzp = new window.Razorpay(options)
//         rzp.open();
//     }

//     return (
//         <>
//             <button onClick={paymentHandler}>Continue to Payment</button>
//         </>

//     )
// }

// export default Payment


import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Load from "../Load";
import RecHeader from "./RecHeader";
import Recruiterfooter from "./Recruiterfooter";
import useRazorpay from "react-razorpay";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Typewriter from 'typewriter-effect';
import Loader from '../Loader';
function Payment() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // simulate an API call with a delay of 3 seconds
        setTimeout(() => {
            setData("Some data");
            setIsLoading(false);
        }, 1000);
    }, []);
    const [accesstoken] = useState(localStorage.getItem("recruiterToken"));
    const navigate = useNavigate();
    // const submitFunction = () => {
    //  form Validation
    // const [amount] = useState({ amount: 1000 })
    // const [amount, setamount] = useState()
    // console.log("mount--->", amount)

    // const inputHandler = async (e, amt) => {
    //     setAmount({
    //         ...amount,
    //         [e.target.name]: e.target.value
    //     })
    // }



    const paymentHandler = async (amount, packagename) => {
        let _data = { amount, packagename }
        console.log("data===>", _data)
        console.log("amount===>", amount)
        console.log("package===>", packagename)


        // e.preventDefault();  
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(_data),
        };
        const response = await fetch("http://localhost:5000/order", requestOptions)
        const result = await response.json();
        console.log("---->", result.data)
        razerpayopenHandle(result.data, packagename, amount)
    }



    const razerpayopenHandle = (data, packagename, amount) => {
        console.log("packagename---->", packagename)
        console.log("data===>", amount)
        var options = {
            key: "rzp_test_9nfVtZEUhhp81B",
            amount: Number(amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: data.currency,
            name: "JOB'S HUB",
            description: "Test Transaction",
            image: "assets/img/blwhole-payment.png.jpg",
            order_id: data.id,
            notes: {
                "address": "JOB'S HUB payment"
            },
            theme: {
                "color": "#009ee5"
            },
            handler: async (response) => {
                console.log("response--->", response)
                const requestOptions1 = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${accesstoken}`,
                    },
                    body: JSON.stringify({ ...response, packagename }),
                };
                const res = await fetch('http://localhost:5000/verify', requestOptions1)
                const result = await res.json();
                if (result.status === 200) {
                    toast.success("payment success");
                    navigate('/recruiterhome')
                }
                else {
                    toast.error('payment failed please try again later')
                    navigate('/payment')
                }
            },
        }
        const rzp = new window.Razorpay(options)
        rzp.open();
    }

    return (
        <>
            {isLoading ? <Loader /> : <div>
                <Load />
                <RecHeader />
                <>
                    <link
                        href="https://fonts.googleapis.com/css?family=Lato:400,300,700,100"
                        rel="stylesheet"
                        type="text/css"
                    />


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
                                            .typeString("Subscription")
                                            .pauseFor(2000)
                                            .start()
                                    }}

                                /></h2>
                                <p>
                                    <Link to="/recruiterhome" title="Home">
                                        Home
                                    </Link>{" "}
                                    <i className="ti-angle-double-right" /> Subscription
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ======================= End Page Title ===================== */}
                    <a target="blank" href="http://www.digimadmedia.com"></a>
                    <div className="price-table-wrapper">
                        {/* <a target="blank" href="http://www.digimadmedia.com"></a> */}
                        <div className="pricing-table">
                            {/* <a target="blank" href="http://www.digimadmedia.com"> </a> */}
                            <h2 className="pricing-table__header">- PLATINUM -</h2>
                            <h3 className="pricing-table__price">4000 <span style={{ fontFamily: "sans-serif" }}>&#8377; </span></h3>
                            <button id='buy' style={{ border: "none", width: "100%" }} className="pricing-table__button" onClick={() => paymentHandler(4000, "PLATINUM")}>PLATINUM</button>


                            <ul className="pricing-table__list">
                                <li>4 Job Post</li>
                                <li>Unlimited Resume Access</li>
                                <li>24 hour support</li>
                            </ul>
                        </div>


                        <div className="pricing-table featured-table">
                            <h2 className="pricing-table__header">- GOLD -</h2>
                            <h3 className="pricing-table__price" style={{ color: "#dab842" }}>2000 <span style={{ fontFamily: "sans-serif" }}>&#8377; </span></h3>
                            <button className="pricing-table__button_gld" style={{ border: "none", width: "100%" }} onClick={() => paymentHandler(2000, "GOLD")}>GOLD</button>

                            <ul className="pricing-table__list">

                                <li>2 Job Post</li>
                                <li>Unlimited Resume Access</li>
                                <li>Only Company Working Time</li>
                            </ul>
                        </div>


                        <div className="pricing-table">
                            <h2 className="pricing-table__header">- SILVER -</h2>
                            <h3 className="pricing-table__price" style={{ color: "#7e888e" }}>1000 <span style={{ fontFamily: "sans-serif" }}>&#8377; </span></h3>
                            <button id='buy' className="pricing-table__button_slv" style={{ border: "none", width: "100%" }} onClick={() => paymentHandler(1000, "SILVER")}>SILVER</button>

                            <ul className="pricing-table__list">

                                <li>1 Job Post</li>
                                <li>Unlimited Resume Access</li>
                                <li>No Support</li>
                            </ul>
                        </div>
                    </div>


                    <Recruiterfooter />
                </>
            </div>}
        </>
    );
}

export default Payment;