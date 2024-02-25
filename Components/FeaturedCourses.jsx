import React , {useRef, useState, useEffect} from 'react'
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { homeCources } from '@/apis/apis';

export default function FeaturedCourses() {
    const [state, setState] = useState([])
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
    var settings = {
        autoplay: false,
        className :"center",
        dots: false,
        caseEase : "linear",
        autoplaySpeed : 1000,
        prevArrow:null,
        infinite: true,
        speed: 2000,
        slidesToShow: 4 ,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, 
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, 
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }, 
        ]
      };

      const allData = async() =>{
        const {data} = await homeCources()
        if(data.length > 0)
        return setState(data)
    }

    
    useEffect(() => {
      allData()
    },[])
  return (
    <>

   <div className="eduvibe-home-five-cats edu-about-area about-style-5 edu-section-gap  bg-color-white">
            <div className="container eduvibe-animated-shape">
                <div className="row g-5">
                    <div className="col-lg-6 col-md-6 order-1">
                        <div className="section-title white-title text-start">
                            <span className="pre-title">Unique Courses</span>
							<h3 className="title tg-svg">Our Featured <span className="position-relative color-primary"><span className="svg-icon" id="svg-4"><svg width="100%" height="100%" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652" stroke="currentcolor" strokeWidth="4"></path>
<path d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786" stroke="currentcolor" strokeWidth="2"></path>
</svg></span>Courses</span></h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 mt--60 mb_dec--20 slick-activation-wrapper service-activation-item5 edu-slick-arrow-top order-3">
                    <div style={{ textAlign: "center" }}>
        <button className="slide-arrow prev-arrow" onClick={previous}>
        <FaArrowLeft/></button>
        <button className="slide-arrow next-arrow" onClick={next}><FaArrowRight />
        </button>
      </div>
                        {/* <!-- Start Single Service  --> */}
                        <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>
            {state && state.map((el) => (
            <div className="single-slick-card">
                            <div className="service-card service-card-8 shape-bg-1">
                                <div className="inner">
                                    <div className="icon">
                                        <a href="java-fullstack.php">
                                            <img src={el.icon} alt={el.name}/>
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h6 className="title"><a href="java-fullstack.php">{el.name}</a></h6>
                                        
                                    </div>
                                    <div className="hover-action">
                                        <a className="read-more-btn" href="java-fullstack.php"><FaArrowRight /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

            ))}
                        {/* <!-- End Single Service  --> */}

                        {/* <!-- Start Single Service  --> */}
                        {/* <div className="single-slick-card">
                            <div className="service-card service-card-8 shape-bg-2">
                                <div className="inner">
                                    <div className="icon">
                                        <a href="web-development.php">
                                            <img src="assets/images/icons/webDesign.png" alt="Web Development"/>
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h6 className="title"><a href="web-development.php">Web Development</a></h6>
                                       
                                    </div>
                                    <div className="hover-action">
                                        <a className="read-more-btn" href="web-development.php"><FaArrowRight /></a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <!-- End Single Service  -->

                        <!-- Start Single Service  --> */}
                        {/* <div className="single-slick-card">
                            <div className="service-card service-card-8 shape-bg-3">
                            <div className="inner">
                                    <div className="icon">
                                        <a href="page_error.php">
                                            <img src="assets/images/icons/automation.png" alt="Automation Testing"/>
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h6 className="title"><a href="page_error.php">Automation Testing</a></h6>
                                        
                                    </div>
                                    <div className="hover-action">
                                        <a className="read-more-btn" href="page_error.php"><FaArrowRight /></a>
                                    </div>
                                </div>
                                
                            </div>
                        </div> */}
                        {/* <!-- End Single Service  -->

                        <!-- Start Single Service  --> */}
                        {/* <div className="single-slick-card">
                            <div className="service-card service-card-8 shape-bg-4">
                                <div className="inner">
                                    <div className="icon">
                                        <a href="page_error.php">
                                            <img src="assets/images/icons/salesForce.png" alt="Salesforce"/>
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h6 className="title"><a href="page_error.php">Salesforce</a></h6>
                                       
                                    </div>
                                    <div className="hover-action">
                                        <a className="read-more-btn" href="page_error.php"><FaArrowRight /></a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <!-- End Single Service  -->

                        <!-- Start Single Service  --> */}
                        {/* <div className="single-slick-card">
                            <div className="service-card service-card-8 shape-bg-5">
                                <div className="inner">
                                    <div className="icon">
                                        <a href="page_error.php">
                                            <img src="assets/images/icons/python.png" alt="Python"/>
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h6 className="title"><a href="page_error.php">Python</a></h6>
                                        
                                    </div>
                                    <div className="hover-action">
                                        <a className="read-more-btn" href="page_error.php"><FaArrowRight /></a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <!-- End Single Service  -->

                        <!-- Start Single Service  --> */}
                        {/* <div className="single-slick-card">
                            <div className="service-card service-card-8 shape-bg-3">
                                <div className="inner">
                                    <div className="icon">
                                        <a href="page_error.php">
                                            <img src="assets/images/icons/database.png" alt="Database"/>
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h6 className="title"><a href="page_error.php">Database</a></h6>
                                        
                                    </div>
                                    <div className="hover-action">
                                        <a className="read-more-btn" href="page_error.php"><FaArrowRight /></a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
    </Slider>
                        {/* <!-- End Single Service  --> */}
                    </div>
                </div>
                <div className="row">
                        <div className="col-lg-12">
                            <div className="load-more-btn mt--60 text-center aling-items-center">
                                <a className="edu-btn" href="courses.php">View All Courses <FaArrowRight /></a>
                            </div>
                        </div>
                    </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="assets/images/shapes/shape-07.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="assets/images/shapes/shape-03-05.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="assets/images/shapes/shape-04-06.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
           
        </div> 
    
    </>
  )
}
