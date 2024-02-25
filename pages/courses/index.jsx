import Header from '@/Components/Header';
import React from 'react';
import "../../app/globals.css";
import "./orbit.css";
import "./hero.css"


function Index() {
  return (
    <>
        <Header/>
        <div className="hero-section">
            <div className="container">
                <div className="row-flex hero-pad space-between-row">
                    <div className="herocta align-items-center-column column-flex col-flex-start">
                        <div className="top-subhead">
                        World className Placement Oriented Programs
                        </div>
                        <div className="hero-heading">
                        Accelerate Your Career Growth  & <strong>Upskill Your CV</strong>
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
        
    </>
  )
}

export default Index
