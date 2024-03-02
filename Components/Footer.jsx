"use client"
import { footerData } from '@/apis/apis';
import React,{useState, useEffect} from 'react';
import { FaAngleDoubleRight , FaFacebookF , FaYoutube ,  FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { PiMapPinBold } from "react-icons/pi";
import Image from 'next/image';

export default function Footer() {
    const [state, setState] = useState([])
    const allData = async() => {
        const {data} = await footerData();
        if(data.length > 0)
        return setState(...data)
      }
    

      useEffect(() => {
        allData()
      },[])

    return (
        <>
            <footer className="eduvibe-footer-one edu-footer footer-style-default">
                <div className="footer-top">
                    <div className="container eduvibe-animated-shape">
                        <div className="row g-5">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="edu-footer-widget">
                                    <div className="logo">
                                        <a href="https://jtcindia.org/index.php">
                                            <img className="logo-light" src="../assets/images/logo/logoFooter.webp" alt="Site Logo" />
                                        </a>
                                    </div>
                                    <p className="description">{state && state.about}</p>
                                    <ul className="social-share">
                                        <li><a href={state && state.facebook} target="_blank"><FaFacebookF/></a></li>
                                        <li><a href={state && state.youtube} target="_blank"><FaYoutube/></a></li>
                                        <li><a href={state && state.linkedin} target="_blank"><FaLinkedinIn />
                                            </a></li>
                                        <li><a href={state && state.twitter} target="_blank"><FaXTwitter/></a>
                                        </li>
                                        <li><a href={state && state.instagram} target="_blank"><FaInstagram /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                                <div className="edu-footer-widget explore-widget">
                                    <h5 className="widget-title">Explore</h5>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li><a href="https://www.jtcindia.org"><FaAngleDoubleRight /> Home</a></li>
                                            <li><a href="https://www.jtcindia.org/about_us.php"><FaAngleDoubleRight /> About Us</a></li>
                                            <li><a href="https://www.jtcindia.org/tutorials/index.php"><FaAngleDoubleRight /> Tutorials</a></li>
                                            <li><a href="https://www.jtcindia.org/courses.php"><FaAngleDoubleRight /> Courses</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="edu-footer-widget quick-link-widget">
                                    <h5 className="widget-title">Useful Links</h5>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li><a href="https://jtcindia.org/contact_us.php"><FaAngleDoubleRight /> Contact Us</a></li>
                                            <li><a className="popup-btn" data-popup="joinNow" ><FaAngleDoubleRight /> Join Us</a></li>
                                            <li><a className="popup-btn" data-popup="hirefrom" ><FaAngleDoubleRight /> Hire from Us</a></li>
                                            <li><a href="https://jtcindia.org/termsAndCondition.php" target="_blank"><FaAngleDoubleRight /> Terms & Condition</a></li>
                                            <li><a href="https://jtcindia.org/privacyPolicy.php" target="_blank"><FaAngleDoubleRight />  Privacy Policy</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="edu-footer-widget">
                                    <h5 className="widget-title">Contact Info</h5>
                                    <div className="inner">
                                        <div className="widget-information">
                                            <ul className="information-list">
                                                <li><PiMapPinBold style={{height:"15px",width:"34px"}}/> {state && state.contact}
                                                </li>
                                                <li><IoCall/><a href="tel:+919990699111"> {state && state.phone}</a>
                                                </li>
                                                <li><MdMailOutline/><a target="_blank"
                                                    href="mailto:info@jtcindia.org"> {state && state.email}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="shape-dot-wrapper shape-wrapper d-md-block d-none">
                            <div className="shape-image shape-image-1">
                                <Image src="../assets/images/shapes/shape-21-01.png" alt="Shape Thumb" width={143} height={130}/>
                            </div>
                            <div className="shape-image shape-image-2">
                                <Image src="../assets/images/shapes/shape-35.png" alt="Shape Thumb" width={122} height={123}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area copyright-default">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <p>Copyright &copy; {new Date().getFullYear()} <a href="https://jtcindia.org/index.php">{state && state.name}</a>. All Rights Reserved
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </footer>
        </>
    )
}
