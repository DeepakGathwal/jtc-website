"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import "../globals.css"
import "./orbit.css";
import { FaArrowRight } from "react-icons/fa6";
import "./hero.css";
import FeaturedCourses from '@/Components/FeaturedCourses';



function Index() {

    const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    const viewAllCat = document.querySelector('.view_all_cat');
    const catBoxHolder = document.querySelector('.cat_box_holder');

    const handleClick = () => {
      setShowCategories(prevState => !prevState);
    };

    viewAllCat.addEventListener('click', handleClick);

    return () => {
      viewAllCat.removeEventListener('click', handleClick);
    };
  }, []);
    
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
                            <button className="edu-btn btn-mb">Explore Our Recommended Courses <FaArrowRight/></button>
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
        
        <div class="eduvibe-home-five-cats edu-about-area about-style-5 edu-section-gapTop bg-color-white pb--40">
            <div class="container eduvibe-animated-shape">
                <div class="row g-5">
                    <div class="col-lg-12">
                    <div class="section-title white-title">
                           
                           <h3 class="title tg-svg">Assured <span class="position-relative color-primary"><span class="svg-icon" id="svg-1"><svg width="100%" height="100%" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652" stroke="currentcolor" stroke-width="4"></path>
                            <path d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786" stroke="currentcolor" stroke-width="2" ></path>
                            </svg></span>Job Courses</span></h3>
                       </div>
                    </div>
                </div>

                <div class="row row--15">
                    <div class="mt--60 mb_dec--20 d-flex">
                        <FeaturedCourses/>
                        <div class="single-slick-card col-md-3">
                            <div class="service-card service-card-8 shape-bg-1">
                                <div class="inner">
                                    <div class="icon">
                                        {/*  */}
                                            <img src="assets/images/icons/java.png" alt="Java Full Stack"/>
                                        {/*  */}
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Java Full Stack</h6>
                                        
                                    </div>
                                    <div class="hover-action">
                                        <FaArrowRight className='read-more-btn'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-slick-card col-md-3">
                            <div class="service-card service-card-8 shape-bg-2">
                            <div class="inner">
                                    <div class="icon">
                                        
                                            <img src="assets/images/icons/webDesign.png" alt="Web Development"/>
                                        
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Web Development</h6>
                                       
                                    </div>
                                    <div class="hover-action">
                                        <FaArrowRight className='read-more-btn'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-slick-card col-md-3">
                            <div class="service-card service-card-8 shape-bg-3">
                            <div class="inner">
                                    <div class="icon">
                                        
                                            <img src="assets/images/icons/automation.png" alt="Automation Testing"/>
                                        
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Automation Testing</h6>
                                        
                                    </div>
                                    <div class="hover-action">
                                        <FaArrowRight className='read-more-btn'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-slick-card col-md-3">
                            <div class="service-card service-card-8 shape-bg-4">
                                <div class="inner">
                                    <div class="icon">
                                        
                                            <img src="assets/images/icons/salesForce.png" alt="Salesforce"/>
                                        
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Salesforce</h6>
                                       
                                    </div>
                                    <div class="hover-action">
                                        <FaArrowRight className='read-more-btn'/>
                                    </div>
                                </div>
                            </div>
                        </div> 

                     
                    </div>
                </div>

                <div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div class="shape-image shape-image-1">
                        <img src="assets/images/shapes/shape-07.png" alt="Shape Thumb" />
                    </div>
                    <div class="shape-image shape-image-2">
                        <img src="assets/images/shapes/shape-03-05.png" alt="Shape Thumb" />
                    </div>
                    <div class="shape-image shape-image__3">
                        <img src="assets/images/shapes/shape-04-06.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>

        <div class="eduvibe-home-five-cats edu-about-area about-style-5 edu-section-gapTop bg-color-white pb--40"
            id="recommendedcourses">
            <div class="container eduvibe-animated-shape">
                <div class="row g-5">
                    <div class="col-lg-12">
                        <div class="section-title white-title">

                            <h3 class="title tg-svg">Recommended Courses <span
                                    class="position-relative color-primary"><span class="svg-icon" id="svg-2"><svg
                                            width="100%" height="100%" viewBox="0 0 145 25" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652"
                                                stroke="currentcolor" stroke-width="4"
                                               ></path>
                                            <path d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786"
                                                stroke="currentcolor" stroke-width="2"
                                                ></path>
                                        </svg></span>(Freshers)</span> </h3>
                        </div>

                    </div>
                </div>

                <div class="row row--15">
                    <div class="mt--60 mb_dec--20 d-flex">
                        <div class="single-slick-card col-md-3">
                            <div class="service-card service-card-8 shape-bg-1">
                                <div class="inner">
                                    <div class="icon">
                                        
                                            <img src="assets/images/icons/java.png" alt="Java Full Stack"/>
                                        
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Java Full Stack</h6>

                                    </div>
                                    <div class="hover-action">
                                        <FaArrowRight className='read-more-btn'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-slick-card col-md-3">
                            <div class="service-card service-card-8 shape-bg-2">
                                <div class="inner">
                                    <div class="icon">
                                        
                                            <img src="assets/images/icons/webDesign.png" alt="Web Development"/>
                                        
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Web Development</h6>

                                    </div>
                                    <div class="hover-action">
                                        <FaArrowRight className='read-more-btn'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-slick-card col-md-3">
                            <div class="service-card service-card-8 shape-bg-3">
                                <div class="inner">
                                    <div class="icon">
                                        
                                            <img src="assets/images/icons/reactjs.png" alt="Automation Testing"/>
                                        
                                    </div>
                                    <div class="content">
                                        <h6 class="title">ReactJS</h6>

                                    </div>
                                    <div class="hover-action">
                                        <FaArrowRight className='read-more-btn'/>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="single-slick-card col-md-3">
                            <div class="service-card service-card-8 shape-bg-4">
                                <div class="inner">
                                    <div class="icon">
                                        
                                            <img src="assets/images/icons/springboot.png" alt="springboot"/>
                                        
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Spring Boot</h6>

                                    </div>
                                    <div class="hover-action">
                                        <FaArrowRight className='read-more-btn'/>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div class="shape-image shape-image-1">
                        <img src="assets/images/shapes/shape-07.png" alt="Shape Thumb" />
                    </div>

                    <div class="shape-image shape-image-9">
                        <img src="assets/images/shapes/shape-03-05.png" alt="Shape Thumb" />
                    </div>

                    <div class="shape-image shape-image_dots">
                        <img src="assets/images/shapes/shape-04-06.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>


        <div class="container">
            <div class="row g-5">
                <div class="col-lg-12 pt--40 pb--40">
                    <div class="section-title white-title" >

                        <h3 class="title tg-svg">Courses <span class="position-relative color-primary"><span
                                    class="svg-icon" id="svg-3"><svg width="100%" height="100%" viewBox="0 0 145 25"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652"
                                            stroke="currentcolor" stroke-width="4"
                                            ></path>
                                        <path d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786"
                                            stroke="currentcolor" stroke-width="2"
                                            ></path>
                                    </svg></span>Categories</span></h3>
                    </div>
                </div>
            </div>
            <div class="row row--15 mb--40">
                <div class="col-md-2">
                        <div class="tutor_box">
                            <img src="assets/images/icons/tutorial_icon/java.png" alt=""/>
                            <p>Java</p>
                        </div>
                </div>
                <div class="col-md-2">
                        <div class="tutor_box">
                            <img src="assets/images/icons/tutorial_icon/python.png" alt=""/>
                            <p>Python</p>
                        </div>
                </div>
                <div class="col-md-2">
                        <div class="tutor_box jtc_box">
                            <img src="assets/images/icons/tutorial_icon/php.png" alt=""/>
                            <p>PHP</p>
                        </div>
                </div>
                <div class="col-md-2">
                        <div class="tutor_box">
                            <img src="assets/images/icons/tutorial_icon/datastructure.png" alt=""/>
                            <div class="d-flex fit">
                                <p>Data Structure</p>
                            </div>
                        </div>
                </div>
                <div class="col-md-2">
                        <div class="tutor_box">
                            <img src="assets/images/icons/tutorial_icon/cloudcomputing.png" alt=""/>
                            <div class="d-flex fit">
                                <p>Cloud Computing</p>
                            </div>
                        </div>
                </div>
                <div class="col-md-2">
                        <div class="tutor_box">
                            <img src="assets/images/icons/tutorial_icon/digitalmarketing.png" alt=""/>
                            <div class="d-flex fit">
                                <p>Digital Marketing</p>
                            </div>
                        </div>
                </div>

            </div>
            <div className="cat_box_holder" style={{ display: showCategories ? 'block' : 'none' }}>
            <div class="row row--15 mb--40 cat_box_holder ">
                <div class="d-flex">
                    <div class="col-md-2">
                            <div class="tutor_box jtc_box">
                                <img src="assets/images/icons/tutorial_icon/jdbv.png" alt=""/>
                                <p>Database</p>
                            </div>
                    </div>
                    <div class="col-md-2">
                            <div class="tutor_box">
                                <img src="assets/images/icons/tutorial_icon/springboot.png" alt=""/>
                                <p>Spring Boot</p>
                            </div>
                    </div>
                </div>
            </div>
            </div>
            {/* <div class="view_all_cat">View All Categories
            </div> */}
            <div className="view_all_cat"><span>View All Categories</span></div>
        </div>
    </>
  )
}

export default Index