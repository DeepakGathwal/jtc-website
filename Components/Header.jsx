"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'; 
import { IoCall } from "react-icons/io5";
import { RiChat1Line } from "react-icons/ri";
import { FaGripLines } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Test from './test';
import "./Header.css";
import Javascriptlogo from "../public/assets/images/icons/Javascript-logo.svg";
import WebDevIcon from "../public/assets/images/icons/webdev-icon.svg";
import SalesForceIcon from "../public/assets/images/icons/webdev-icon.svg";

export default function Header() {
    const router = useRouter();
    const [show, setShow] = useState(false)
    const handelShow = () => {
        setShow(true)
    }
   
    // State to manage which tab is active
    const [activeTab, setActiveTab] = useState('tabOne');

    // Event handler for tab mouse enter
    const handleTabMouseEnter = (tabId) => {
        setActiveTab(tabId);
    };

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
                            <li className="has-droupdown"  onClick={() => router.push("/")}>Home</li>
                            <li className="has-droupdown" onClick={() => router.push("/about")}>
                               About Us
                                </li>
                            <li className="has-droupdown">Courses
                                <div className="mega-menu row-flex">
                                    <div className="column-flex course-hover">
                                        <ul>
                                            <li id="tabOne" onMouseEnter={() => handleTabMouseEnter('tabOne')}><Link href="/dashboard">Assured Job Courses</Link></li>
                                            <li id="tabTwo" onMouseEnter={() => handleTabMouseEnter('tabTwo')}><Link href="/dashboard">Featured Courses</Link></li>
                                            <li id="tabThree" onMouseEnter={() => handleTabMouseEnter('tabThree')}><Link href="/dashboard">Recomended Courses</Link></li>
                                            <li id="tabFour" onMouseEnter={() => handleTabMouseEnter('tabFour')}><Link href="/dashboard">Course Categories</Link></li>
                                            <li id="tabFive" onMouseEnter={() => handleTabMouseEnter('tabFive')}><Link href="/dashboard">Course Tutorials</Link></li>
                                        </ul>
                                    </div>
                                    <div className="row-flex hover-results" id="contentOne" style={{ display: activeTab === 'tabOne' ? 'flex' : 'none' }}>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Full Stack Java Developer</h3>
                                                <div className="details">
                                                    <span className="info">Assured Placements</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Java Certification Training</h3>
                                                <div className="details">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={WebDevIcon} alt="Javascript" className="courseIcon" />
                                                <h3>Java Certification Training</h3>
                                                <div className="details">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={SalesForceIcon} alt="Javascript" className="courseIcon" />
                                                <h3>Salesforce</h3>
                                                <div className="details">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row-flex hover-results" id="contentTwo" style={{ display: activeTab === 'tabTwo' ? 'flex' : 'none' }}>
                                        <div className="course-card">
                                                <Link href="/dashboard" className="cardlinks column-flex">
                                                    <Image src={WebDevIcon} alt="Javascript" className="courseIcon" />
                                                    <h3>Java Certification Training</h3>
                                                    <div className="details">
                                                        <span className="info">Class Starts 19 Feb</span>
                                                        <span className="time">9 months</span>
                                                    </div>
                                                </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={SalesForceIcon} alt="Javascript" className="courseIcon" />
                                                <h3>Salesforce</h3>
                                                <div className="details">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Full Stack Java Developer</h3>
                                                <div className="details">
                                                    <span className="info">Assured Placements</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Java Certification Training</h3>
                                                <div className="details">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row-flex hover-results" id="contentOne" style={{ display: activeTab === 'tabThree' ? 'flex' : 'none' }}>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Java Certification Training</h3>
                                                <div className="details">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Full Stack Java Developer</h3>
                                                <div className="details">
                                                    <span className="info">Assured Placements</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={WebDevIcon} alt="Javascript" className="courseIcon" />
                                                <h3>Java Certification Training</h3>
                                                <div className="details">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={SalesForceIcon} alt="Javascript" className="courseIcon" />
                                                <h3>Salesforce</h3>
                                                <div className="details">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row-flex hover-results" id="contentOne" style={{ display: activeTab === 'tabFour' ? 'flex' : 'none' }}>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={WebDevIcon} alt="Javascript" className="courseIcon" />
                                                <h3>Java Certification Training</h3>
                                                <div className="details">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Full Stack Java Developer</h3>
                                                <div className="details">
                                                    <span className="info">Assured Placements</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Java Certification Training</h3>
                                                <div className="details">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={SalesForceIcon} alt="Javascript" className="courseIcon" />
                                                <h3>Salesforce</h3>
                                                <div className="details">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row-flex hover-results" id="contentOne" style={{ display: activeTab === 'tabFive' ? 'flex' : 'none' }}>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={WebDevIcon} alt="Javascript" className="courseIcon" />
                                                <h3>Java Certification Training</h3>
                                                <div className="details">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Full Stack Java Developer</h3>
                                                <div className="details">
                                                    <span className="info">Assured Placements</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Java Certification Training</h3>
                                                <div className="details">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={SalesForceIcon} alt="Javascript" className="courseIcon" />
                                                <h3>Salesforce</h3>
                                                <div className="details">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="has-droupdown"  onClick={() => router.push("/tutorial")}>Tutorial</li>
							<li className="has-droupdown">Hire from Us</li>
							<li className="has-droupdown">Join Us</li>
                            <li className="has-droupdown"  onClick={() => router.push("/blog")}>Blog</li>
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
