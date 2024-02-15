import { executeQuery } from '@/conn/db';
import React from 'react'

const About = ({response}) => {

  const data = JSON.parse(response)
  return (
    // <div>
    //   <h1>I am About</h1>
    //   {data.map((el) => (
    //    <>
    //     <h1>{el.point}</h1>
    //     <h1>{el.description}</h1>
    //    </>
    //   ))}
    // </div> 

    <>
     <div class="main-wrapper">
      
        
        <div class="edu-breadcrumb-area breadcrumb-style-1 ptb--60 ptb_md--40 ptb_sm--40 bg-image">
            <div class="container eduvibe-animated-shape">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-inner text-start">
                            <div class="page-title">
                                <h3 class="title">About Us</h3>
                            </div>
                            <nav class="edu-breadcrumb-nav">
                                <ol class="edu-breadcrumb d-flex justify-content-start liststyle">
                                    <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                                    <li class="separator"><i class="ri-arrow-drop-right-line"></i></li>
                                    <li class="breadcrumb-item active" aria-current="page">About Us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                        <div class="shape-image shape-image-1">
                            <img src="assets/images/shapes/shape-11-07.png" alt="Shape Thumb" />
                        </div>
                        <div class="shape-image shape-image-2">
                            <img src="assets/images/shapes/shape-01-02.png" alt="Shape Thumb" />
                        </div>
                        <div class="shape-image shape-image-3">
                            <img src="assets/images/shapes/shape-03.png" alt="Shape Thumb" />
                        </div>
                        <div class="shape-image shape-image-4">
                            <img src="assets/images/shapes/shape-13-12.png" alt="Shape Thumb" />
                        </div>
                        <div class="shape-image shape-image-5">
                            <img src="assets/images/shapes/shape-36.png" alt="Shape Thumb" />
                        </div>
                        <div class="shape-image shape-image-6">
                            <img src="assets/images/shapes/shape-05-07.png" alt="Shape Thumb" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div id="about-us" class="edu-about-area about-style-1 edu-section-gap">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-6">
                        <div class="about-image-gallery">
                            <img class="image-1" src="assets/images/icons/aboutuspost.webp" alt="About Main Thumb" />
                            <div class="image-2"><img src="assets/images/about/about-09/about-image-02.jpg" alt="About Parallax Thumb" /></div>
                            <div class="badge-inner"><img class="image-3" src="assets/images/about/about-09/badge.png" alt="About Circle Thumb" /></div>
                            <div class="shape-image shape-image-1"><img src="assets/images/shapes/shape-04-01.png" alt="Shape Thumb" /></div>
                        </div>
                    </div>
                    <div class="col-lg-6 mob_Abt_Txt">
                        <div class="inner">
                            <div class="section-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span class="pre-title">About Us</span>
                        <h3 class="title">Creating A Community Of Life Long Learners</h3>
                            </div>   
                            {data && data.map((el) => (
                            <>
                              <h3 className="title">{el.point}</h3>
                              <p className="description" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">{el.description}</p>
                            </>
                            ))}
                            <div class="shape shape-6 about-parallax-2 d-xl-block d-none">
                                <img src="assets/images/shapes/shape-07.png" alt="Shape Thumb" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="eduvibe-home-two-counter edu-counterup-area counterup-wrapper-1 edu-section-gapBottom bg-white">
         
            <div class="container eduvibe-animated-shape">
                <div class="row gy-5 align-items-center">
                    
                    <div class="col-lg-6">
                        <div class="choose-us-2">
                            <div class="inner">
                                <div class="section-title text-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                    <span class="pre-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Worldwide Our Achievement</span>
                                    <h3 class="title tg-svg">Why <span class="position-relative color-primary"><span class="svg-icon" id="svg-5"><svg width="100%" height="100%" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652" stroke="currentcolor" stroke-width="4" 
// style={{stroke_dasharray: 146, 148, stroke_dashoffset: 0}}
></path>
<path d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786" stroke="currentcolor" stroke-width="2" 
// style="stroke-dasharray: 106, 108; stroke-dashoffset: 0;"
></path>
</svg></span>Choose</span> Us</h3>
                                </div>
                                <ul class="jtcWhy">
									<li>Assured placements</li>
									<li>Over 12 years of training experience</li>
									<li>Time-bound skilling programs</li>
									<li>Industry demanded skilling courses</li>
									<li>Veteran faculty with industry experience</li>
									<li>Flexible course timings and learning options</li>
									<li>Multiple batches and slots</li>
									<li>Batch timings suited for students/working candidates</li>
									<li>Offline as well as online tutoring</li>
								</ul>
                            </div>
                        </div>
                    </div>
					<div class="col-lg-6">
                        <div class="row g-5 pr--75 pr_md--0 pr_sm--0">
                       
                            <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div class="edu-counterup">
                                    <div class="inner">
                                        <div class="icon">
                                            <img src="assets/images/icons/onlineCourses.png" alt="Icons Images"/>
                                        </div>
                                        <div class="content">
                                            <h3 class="counter"><span class="odometer" data-count="12">00</span>+
                                            </h3>
                                            <span>Year ESTD.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                            <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div class="edu-counterup">
                                    <div class="inner">
                                        <div class="icon">
                                            <img src="assets/images/icons/instructor.png" alt="Icons Images"/>
                                        </div>
                                        <div class="content">
                                            <h3 class="counter"><span class="odometer" data-count="50">00</span>+
                                            </h3>
                                            <span>Courses</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                            <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div class="edu-counterup">
                                    <div class="inner">
                                        <div class="icon">
                                            <img src="assets/images/icons/certification.png" alt="Icons Images"/>
                                        </div>
                                        <div class="content">
                                            <h3 class="counter"><span class="odometer" data-count="2000">00</span>+
                                            </h3>
                                            <span>Students</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      
                            <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div class="edu-counterup">
                                    <div class="inner">
                                        <div class="icon">
                                            <img src="assets/images/icons/members.png" alt="Icons Images"/>
                                        </div>
                                        <div class="content">
                                            <h3 class="counter"><span class="odometer" data-count="50">00</span>+
                                            </h3>

                                            <span>Companies</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                        </div>
                    </div>
                </div>

                <div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div class="shape-image shape-image-1">
                        <img src="assets/images/shapes/shape-04-01.png" alt="Shape Thumb" />
                    </div>
                    <div class="shape-image shape-image-2">
                        <img src="assets/images/shapes/shape-11.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        
        </div>
<div class="eduvibe-home-five-course slider-dots edu-course-area edu-section-gap bg-image">
            <div class="container eduvibe-animated-shape">
                <div class="row g-5">
                    <div class="col-lg-6 col-md-6">
                        <div class="section-title text-start" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <span class="pre-title">Companies</span>
                            
							<h3 class="title tg-svg">JTC <span class="position-relative color-primary"><span class="svg-icon" id="svg-3"><svg width="100%" height="100%" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652" stroke="currentcolor" stroke-width="4" 
// style="stroke-dasharray: 146, 148; stroke-dashoffset: 0;"
></path>
<path d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786" stroke="currentcolor" stroke-width="2" 
// style="stroke-dasharray: 106, 108; stroke-dashoffset: 0;"
></path>
</svg></span>Candidate</span> Placed</h3>
                        </div>
                    </div>
                    
                </div>
                <div class="row g-5 mt--10">
                    <div class="col-lg-12">
                        <div class="slick-activation-wrapper course-activation-3 edu-slick-button">

                            <div class="single-slick-card">
                                <div class="edu-card card-type-5 radius-small">
                                    <div class="inner">
                                       <img src="assets/images/icons/cognizant.png" alt=""/>
                                        
                                    </div>
                                </div>
                            </div>
                       
                            <div class="single-slick-card">
                                <div class="edu-card card-type-5 radius-small">
                                    <div class="inner">
                                     <img src="assets/images/icons/infosys.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                         
                            <div class="single-slick-card">
                                <div class="edu-card card-type-5 radius-small">
                                    <div class="inner">
                                       <img src="assets/images/icons/capgemini.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                           
                            <div class="single-slick-card">
                                <div class="edu-card card-type-5 radius-small">
                                     <div class="inner">
                                       <img src="assets/images/icons/iris.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                         
                            <div class="single-slick-card">
                                <div class="edu-card card-type-5 radius-small">
                                     <div class="inner">
                                       <img src="assets/images/icons/dxc.png" alt=""/>
                                    </div>
                                </div>
                            </div>
               
                            <div class="single-slick-card">
                                <div class="edu-card card-type-5 radius-small">
                                     <div class="inner">
                                       <img src="assets/images/icons/wipro.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>

                <div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div class="shape-image shape-image-1">
                        <img src="assets/images/shapes/shape-13-10.png" alt="Shape Thumb" />
                    </div>
                    <div class="shape-image shape-image-2">
                        <img src="assets/images/shapes/shape-04-03.png" alt="Shape Thumb" />
                    </div>
                    <div class="shape-image shape-image-3">
                        <img src="assets/images/shapes/shape-15-03.png" alt="Shape Thumb" />
                    </div>
                    <div class="shape-image shape-image-4">
                        <img src="assets/images/shapes/shape-03-07.png" alt="Shape Thumb" />
                    </div>
                </div>

            </div>
        </div>
      
    </div>
    </>
  )
}

export async function getServerSideProps() {
  // Make API calls concurrently
  const query =  `Select * from jtc_about_points`
  const data = await executeQuery(query)
  let response ;
  if(data.length > 0){
    response = JSON.stringify(data)
}else response
  // Parse the JSON responses
 
 
  return {
    props: {
      response
    }
  };
}


export default About
