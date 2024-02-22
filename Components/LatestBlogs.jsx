import React,{useState, useEffect} from 'react'
import { blogs } from '@/apis/apis';
import { FaArrowRight } from "react-icons/fa6";
import { SiOpenbadges } from "react-icons/si";
import { SlCalender } from "react-icons/sl";


function LatestBlogs() {
    const [state, setState] = useState([])
    const allData = async() => {
        const data = await blogs();
        console.log(data.data);
        if(data.success) setState(data.data)
      }

      useEffect(() => {
        allData()
      },[])
  return (
    <>
      
      <div className="eduvibe-home-two-blog edu-blog-area edu-section-gap bg-image">
            <div className="wrapper">
                <div className="container eduvibe-animated-shape">
                    <div className="row g-5">
                        <div className="col-lg-6 col-md-6">
                            <div className="section-title text-start" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title">Always Smart to Read Blogs</span>
                                <h3 className="title tg-svg">Latest <span className="position-relative color-primary"><span className="svg-icon" id="svg-3"><svg width="100%" height="100%" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652" stroke="currentcolor" strokeWidth="4" ></path>
                                <path d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786" stroke="currentcolor" strokeWidth="2" ></path>
                                </svg></span>Blog</span></h3>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                        <div class="view-more-btn text-end">
                            <a class="edu-btn" href="blog/index.php">
                                Browse All Blogs  <FaArrowRight />
                            </a>
                        </div>
                    </div>
                    </div>
                    <div className="row g-5 mt--30">
                        {state.length > 0 && state.map((el) => (
                          
                            <>
                             <div className="col-lg-4 col-md-6 col-12">
                         <div className="edu-blog blog-type-2 bg-white radius-small"> 
                                <div className="inner">
                                    <div className="thumbnail">
                                         <img src={el.icon} alt={el.name}/>
                                    </div>
                                    <div class="content">
                                        <div class="status-group">
                                         <SiOpenbadges /> {el.category}
                                        </div>
                                        <h5 class="title">{el.name}</h5>
                                        <div class="blog-card-bottom">
                                            <ul class="blog-meta">
                                                <li><SlCalender /> {el.addedAt}</li>
                                            </ul>
                                            <div class="read-more-btn">
                                                Read More <FaArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                              </div>
                               </>
                        ))}
                        </div>
                       


                    <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                        <div className="shape-image shape-image-1">
                            <img src="assets/images/shapes/shape-13-06.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-3">
                            <img src="assets/images/shapes/shape-13-05.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-4">
                            <img src="assets/images/shapes/shape-25.png" alt="Shape Thumb" />
                        </div>
                    </div>

                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-2">
                        <img src="assets/images/shapes/shape-24.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default LatestBlogs
