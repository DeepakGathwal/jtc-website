import React from 'react'
import { FaArrowRight} from "react-icons/fa6";

// ES6 modules



function BannerAreaHome() {
    
  return (
    <>
        {/* Start Banner Area */}
        <div className="slider-area banner-style-1 bg-white height-650 d-flex align-items-center" >
            <div className="container eduvibe-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-12 col-xl-6 my-4">
                        <div className="inner">
                            <div className="content">
                                <span className="pre-title" id="changingPreTitle">Your Future Starts Now</span>
                                <h1 className="title" id="changingTitle">Transforming Lives Through Education.</h1>
                                 
                                <div className="read-more-btn">
                                    <a className="edu-btn" href="courses.php">Get Started Today <FaArrowRight/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-xl-6 banner-right-content">
                        <div className="row g-5">
                            <div className="col-lg-9 col-md-6 col-sm-6 offset-lg-3">
                               
                                <div className="edu-card card-type-6 radius-small" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                    <div className="inner">
                                        <div className="container checkout-page-style"  style={{padding:0}}>
                                            <div className="login-form-box">
                                                <h3 className="mb-30">Get in Touch</h3>
                                                <form className="login-form" id="downloadSyllabus" onsubmit="sendMailEnquiry(); reset(); return false;">
                                                    <div className="input-box mb--20">
                                                        <input type="text" placeholder="Name" Name="name6" id="name6" required />
                                                    </div>
                                                    <div className="input-box mb--20">
                                                        <input type="tel" id="phone6" className="phone-input" name="phone6" placeholder="Mobile Number" required />
                                                    </div>
                                                    <div className="input-box mb--20">
                                                        <select name="courses3" id="courses3" className="courses valid" aria-invalid="false" required >
                                                            <option value="">Select Course</option>
                                                            <option value="Java">Java Full Stack</option>
                                                            <option value="Front End">Front End</option>
                                                        </select>
                                                    </div>
                                                    <div className="comment-form-consent input-box mb--20">
                                                    <label><input id="checkbox-6" type="checkbox" required/></label>
														<label for="checkbox-6"> I have reviewed all <a
																href="termsandcondition.html" target="_blank"> Terms and
																Conditions</a>.</label>
                                                    </div>
                                                    <button className="rn-btn edu-btn w-100 mb--20" type="submit">
                                                        <span >Enquire Now</span>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape shape-1"><img src="/assets/images/shapes/shape-01.png" alt="Shape Thumb" /></div>
                    <div className="shape shape-2"><img src="/assets/images/shapes/shape-02.png" alt="Shape Thumb" /></div>
                    <div className="shape shape-3"><img src="/assets/images/shapes/shape-03.png" alt="Shape Thumb" /></div>
                    <div className="shape shape-4"><img src="/assets/images/shapes/shape-04.png" alt="Shape Thumb" /></div>
                    <div className="shape shape-5"><img src="/assets/images/shapes/shape-05.png" alt="Shape Thumb" /></div>
                    <div className="shape shape-6"><img src="/assets/images/shapes/shape-05-05.png" alt="Shape Thumb" /></div>
                </div>
                <div className="shape-round"><img src="assets/images/banner/banner-01/shape-27.png" alt="Shape Images" /></div>
            </div>
        </div>

         {/* End Banner Area  */}
    
    </>
  )
}

export default BannerAreaHome
