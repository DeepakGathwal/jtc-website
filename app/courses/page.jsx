"use client"
import React,{useState, useEffect} from 'react';
import "../globals.css"
import "./orbit.css";
import { FaArrowRight } from "react-icons/fa6";
import "./hero.css";
import FeaturedCourses from '@/Components/FeaturedCourses';
import { allCourceTypes } from '@/apis/apis';



function Index() {
    const [state, setState] = useState([])
    const allData = async() => {
        const {data} = await allCourceTypes();
        return setState(data)
      }
    

      useEffect(() => {
        allData()
      },[])
  return (
    <>
        <div className="hero-section">
            <div className="container">
                <div className="row-flex hero-pad space-between-row">
                    <div className="herocta align-items-center-column column-flex col-flex-start">
                        <div className="top-subhead">
                        World className Placement Oriented Programs
                        </div>
                        <div className="hero-heading">
                        Accelerate Your Career Growth  <br />
                        & <strong>Upskill Your CV</strong>
                        </div>
                        <div className="read-more-btn">
                            <a href="#recommendedcourses" className="edu-btn btn-mb">Explore Our Recommended Courses <i className="icon-arrow-right-line-right"></i></a>
                        </div>
                    </div>
                    <div className="herofig d-xl-block d-none">
                        <div className="orbitfig">
                            <div className="centerlogo">
                                <img src="assets/images/orbitimage/logo.webp" alt="" className="logo" />
                            </div>
                            <div className="first-orbit">
                                <span className="firstItem"></span>
                                <span className="secondItem"></span>
                                <span className="thirdItem"><img src="assets/images/orbitimage/automation.svg" alt="" className="smaller-icon" /></span>
                            </div>
                            <div className="second-orbit">
                                <span className="firstItem"></span>
                                <span className="secondItem"></span>
                                <span className="thirdItem"><img src="assets/images/orbitimage/webdevelopment.svg" alt="" className="mid-icon" /></span>
                                <span className="fourthItem"><img src="assets/images/orbitimage/saleforce.svg" alt="" className="mid-icon" /></span>
                            </div>
                            <div className="third-orbit">
                                <span className="firstItem"></span>
                                <span className="secondItem"></span>
                                <span className="thirdItem"><img src="assets/images/orbitimage/react.svg" alt="" className="large-icon" /></span>
                                <span className="fourthItem"><img src="assets/images/orbitimage/javascript.svg" alt="" className="large-icon" /></span>
                                <span className="fifthItem"><img src="assets/images/orbitimage/kubernotes.svg" alt="" className="large-icon" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="eduvibe-home-five-cats edu-about-area about-style-5 edu-section-gapTop bg-color-white pb--40">
            <div className="container eduvibe-animated-shape">
                {/* <div className="row g-5">
                    <div className="col-lg-12">
                    <div className="section-title white-title">
                           
                           <h3 className="title tg-svg">Assured <span className="position-relative color-primary"><span className="svg-icon" id="svg-1"><svg width="100%" height="100%" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652" stroke="currentcolor" strokeWidth="4"></path>
<path d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786" stroke="currentcolor" strokeWidth="2" ></path>
</svg></span>Job Courses</span></h3>
                       </div>
                    </div>
                </div> */}

                <div className="row row--15">
                    {/* <div className="mt--60 mb_dec--20 d-flex"> */}
                        <FeaturedCourses/>
                  

                     
                    {/* </div> */}
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="assets/images/shapes/shape-07.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="assets/images/shapes/shape-03-05.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image__3">
                        <img src="assets/images/shapes/shape-04-06.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Index