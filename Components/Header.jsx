import React, { useState } from 'react'
import { IoCall } from "react-icons/io5";
import { RiChat1Line } from "react-icons/ri";
import Link from 'next/link';
import { FaGripLines } from "react-icons/fa";
import Test from './test';

export default function Header() {
    const [show, setShow] = useState(false)
    const handelShow = () => {
        setShow(true)
    }
   
  return (
    <>
   
      <header className="edu-header header-style-2 disable-transparent header-sticky">
            <div className="row align-items-center">
                <div className="col-lg-6 col-xl-2 col-md-6 col-6">
                    <div className="logo">
                        <a href="https://www.jtcindia.org">
                            <img className="logo-light" src="/assets/images/logo/logo.webp" alt="JTC LOGO" />
                        </a>
                    </div>
                </div>

                <div className="col-lg-6 d-none d-xl-block">
                    <nav className="mainmenu-nav">
                        <ul className="mainmenu">
                            <li className="has-droupdown"><a href="https://www.jtcindia.org">Home</a></li>
                            <li className="has-droupdown" >
                                <Link href="/about">
                                About Us
                                </Link>
                                </li>
                            <li className="has-droupdown"><a href="h =ttps://www.jtcindia.org/courses.php">Courses</a>
                              
                            </li>
                            <li className="has-droupdown"><a href="https://www.jtcindia.org/tutorials/index.php">Tutorial</a></li>
							<li className="has-droupdown "><a className="popup-btn" data-popup="hirefrom" href="javascript:;">Hire from Us</a></li>
							<li className="has-droupdown"><a className="popup-btn" data-popup="joinNow" href="javascript:;" >Join Us</a></li>
                            <li className="has-droupdown"><a href="https://www.jtcindia.org/blog">Blog</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="col-lg-6 col-xl-4 col-md-6 col-6">
                    <div className="header-right d-flex justify-content-end">
                        <div className="header-menu-bar">
                            <div className="call-icon d-none d-md-block">
                                <a href="tel:09990699111" className="edu-btn btn-medium left-icon btn-white">
<IoCall /> +91-999-0699-111</a>
                            </div>
                            <div className="quote-icon quote-user d-block d-md-none ml--15 ml_sm--5">
                                <a className="white-box-icon popup-btn" href="tel:09990699111"><IoCall /> </a>
                            </div>
                            <div className="quote-icon quote-user d-none d-md-block ml--15" onClick={handelShow}>
                                <a className="edu-btn btn-medium left-icon btn-white popup-btn" data-popup="enqNow" href="javascript:;"><RiChat1Line/> Enquire Now</a>
                            </div>

                            <div className="quote-icon quote-user d-block d-md-none ml--15 ml_sm--5">
                                <a className="white-box-icon popup-btn" data-popup="enqNow" href="javascript:;"><RiChat1Line/> </a>
                            </div>
                            <Test show={show} setShow={setShow}/>

                            <div className="mobile-menu-bar ml--15 ml_sm--5 d-block d-xl-none">
                                <div className="hamberger">
                                    <button className="white-box-icon hamberger-button">
                                        <FaGripLines/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
            </div>
        </header>


    
    </>
  )
}
