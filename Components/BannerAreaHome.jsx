import React from 'react'
import sal from 'sal.js'

function BannerAreaHome() {
    sal();
  return (
    <>
        {/* Start Banner Area */}
        <div class="slider-area banner-style-1 bg-white height-650 d-flex align-items-center">
            <div class="container eduvibe-animated-shape">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-12 col-xl-6 my-4">
                        <div class="inner">
                            <div class="content">
                                <span class="pre-title" id="changingPreTitle">Your Future Starts Now</span>
                                <h1 class="title" id="changingTitle">Transforming Lives Through Education.</h1>
                                 {/* <p class="description" data-sal-delay="250" data-sal="slide-up" data-sal-duration="800">Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy the process.</p> */}
                                <div class="read-more-btn">
                                    <a class="edu-btn" href="courses.php">Get Started Today <i class="icon-arrow-right-line-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-xl-6 banner-right-content">
                        <div class="row g-5">
                            <div class="col-lg-9 col-md-6 col-sm-6 offset-lg-3">
                               
                                <div class="edu-card card-type-6 radius-small" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                    <div class="inner">
                                        <div class="container checkout-page-style"  style={{padding:0}}>
                                            <div class="login-form-box">
                                                <h3 class="mb-30">Get in Touch</h3>
                                                <form class="login-form" id="downloadSyllabus" onsubmit="sendMailEnquiry(); reset(); return false;">
                                                    <div class="input-box mb--20">
                                                        <input type="text" placeholder="Name" Name="name6" id="name6" required />
                                                    </div>
                                                    <div class="input-box mb--20">
                                                        <input type="tel" id="phone6" class="phone-input" name="phone6" placeholder="Mobile Number" required />
                                                    </div>
                                                    <div class="input-box mb--20">
                                                        <select name="courses3" id="courses3" class="courses valid" aria-invalid="false" required >
                                                            <option value="">Select Course</option>
                                                            <option value="Java">Java Full Stack</option>
                                                            <option value="Front End">Front End</option>
                                                        </select>
                                                    </div>
                                                    <div class="comment-form-consent input-box mb--20">
                                                    <label><input id="checkbox-6" type="checkbox" required/></label>
														<label for="checkbox-6"> I have reviewed all <a
																href="termsandcondition.html" target="_blank"> Terms and
																Conditions</a>.</label>
                                                    </div>
                                                    <button class="rn-btn edu-btn w-100 mb--20" type="submit">
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
                <div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div class="shape shape-1"><img src="assets/images/shapes/shape-01.png" alt="Shape Thumb" /></div>
                    <div class="shape shape-2"><img src="assets/images/shapes/shape-02.png" alt="Shape Thumb" /></div>
                    <div class="shape shape-3"><img src="assets/images/shapes/shape-03.png" alt="Shape Thumb" /></div>
                    <div class="shape shape-4"><img src="assets/images/shapes/shape-04.png" alt="Shape Thumb" /></div>
                    <div class="shape shape-5"><img src="assets/images/shapes/shape-05.png" alt="Shape Thumb" /></div>
                    <div class="shape shape-6"><img src="assets/images/shapes/shape-05-05.png" alt="Shape Thumb" /></div>
                </div>
                <div class="shape-round"><img src="assets/images/banner/banner-01/shape-27.png" alt="Shape Images" /></div>
            </div>
        </div>

         {/* End Banner Area  */}
    
    </>
  )
}

export default BannerAreaHome
