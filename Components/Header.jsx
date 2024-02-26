"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { IoCall } from "react-icons/io5";
import { RiChat1Line } from "react-icons/ri";
import { FaGripLines } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Test from './test';
import "./Header.css";

export default function Header() {
    const router = useRouter();
    const [show, setShow] = useState(false)
    const handelShow = () => {
        setShow(true)
    }
   
  return (
  
      <header className="edu-header header-style-2 disable-transparent header-sticky row-flex space-between-row align-items-center-row">
            <div className="row align-items-center w-100">
                <div className="col-lg-6 col-xl-2 col-md-6 col-6">
                        <Link href="/">
                    <div className="logo">
                            <img className="logo-light" src="/assets/images/logo/logo.webp" alt="JTC LOGO" />
                        
                     </div>
                        </Link>
                </div>

                <div className="col-lg-6 d-none d-xl-block">
                    <nav className="mainmenu-nav">
                        <ul className="mainmenu">
                            <Link href="/">
                            <li className="has-droupdown" >
                                Home

                                </li>
                            </Link>

                            <Link href="/about">
                            <li className="has-droupdown" >
                               About Us

                                </li>
                            </Link>
                            <Link href="/courses">
                            <li className="has-droupdown" >
                                Courses

                            </li>
                            </Link>
                            <Link href="/tutorial">
                            <li className="has-droupdown" >
                                Tutorial

                                </li>
                            </Link>
							<li className="has-droupdown">Hire from Us</li>
							<li className="has-droupdown">Join Us</li>
                                <Link href="/blog">
                            <li className="has-droupdown" >
                                Blog

                                </li>
                                </Link>
                        </ul>
                    </nav>
                </div>

                <div className="col-lg-6 col-xl-4 col-md-6 col-6">
                    <div className="header-right d-flex justify-content-end">
                        <div className="header-menu-bar">
                            <div className="call-icon d-none d-md-block">
                                <a href="tel:09990699111" className="edu-btn btn-medium left-icon btn-white">
                                    <IoCall /> +91-999-0699-111
                                </a>
                            </div>
                            <div className="quote-icon quote-user d-block d-md-none ml--15 ml_sm--5">
                                <a className="white-box-icon popup-btn" href="tel:09990699111"><IoCall /> </a>
                            </div>
                            <div  data-popup="enqNow" className="edu-btn btn-medium left-icon btn-white popup-btn quote-icon quote-user d-none d-md-block ml--15" onClick={handelShow}>
                            <RiChat1Line/> Enquire Now
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

  )
}
