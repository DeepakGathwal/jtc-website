"use client"
import React, { useEffect, useState } from 'react';
import Batches from '@/Components/Batches';
import SyllybusDownload from '@/Components/SyllybusDownload';
import Testimonials from '@/Components/Testimonials';
import CourceCategory from '@/Components/courceCategory';
import CourceVideo from '@/Components/courceVideo';
import { useParams } from 'next/navigation'
import { courseData } from '@/apis/apis';
import CourceJoinPoint from '@/Components/courceJoinPoint';
import { FaRegClock } from "react-icons/fa";
import { IoLocationOutline } from 'react-icons/io5';
import { SlCalender } from 'react-icons/sl';
import { FaArrowRight } from 'react-icons/fa6';
import Faq from '@/Components/faq';


const Page = () => {
	const router = useParams()
	const [state, setState] = useState([])
	const {courcename} = router
	const allCourseData = async() => {
		const {data} = await courseData(courcename)
		if(data.length > 0)
		return setState(...data)
	}

	useEffect(() => {
	allCourseData()
	},[courcename])

  return (
    <>

		<div className="edu-breadcrumb-area breadcrumb-style-1 ptb--60 ptb_md--40 ptb_sm--40 bg-image">
			<div className="container eduvibe-animated-shape">
				<div className="row">
					<div className="col-lg-12">
						<div className="breadcrumb-inner text-start">
							<div className="page-title">
								<h3 className="title" id="c_name">{state && state.name}</h3>
							</div>
						</div>
					</div>
				</div>

				{/* <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
					<div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
						<div className="shape-image shape-image-1">
							<img src="../assets/images/shapes/shape-11-07.png" alt="Shape Thumb" />
						</div>
						<div className="shape-image shape-image-2">
							<img src="../assets/images/shapes/shape-01-02.png" alt="Shape Thumb" />
						</div>
						<div className="shape-image shape-image-3">
							<img src="../assets/images/shapes/shape-03.png" alt="Shape Thumb" />
						</div>
						<div className="shape-image shape-image-4">
							<img src="../assets/images/shapes/shape-13-12.png" alt="Shape Thumb" />
						</div>
						<div className="shape-image shape-image-5">
							<img src="../assets/images/shapes/shape-36.png" alt="Shape Thumb" />
						</div>
						<div className="shape-image shape-image-6">
							<img src="../assets/images/shapes/shape-05-07.png" alt="Shape Thumb" />
						</div>
					</div>
				</div> */}
			</div>
		</div>
		<div className="edu-course-details-area edu-section-gap bg-color-white">
			<div className="container">
				<div className="row g-5">
					<div className="col-xl-8 col-lg-7">
						<div className="course-details-content">
							<div className="course-details-card">
								<div className="course-content">
									<div className="section-title white-title sal-animate">

										<h3 className="title tg-svg">Course <span
												className="position-relative color-primary"><span className="svg-icon"
													id="svg-2"><svg width="100%" height="100%" viewBox="0 0 145 25"
														fill="none" xmlns="http://www.w3.org/2000/svg">
														<path
															d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652"
															stroke="currentcolor" stroke-width="4"
															>
														</path>
														<path
															d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786"
															stroke="currentcolor" stroke-width="2"
															>
														</path>
													</svg></span> Overview</span></h3>
									</div>
									<p>{state && state.description}</p>
									<CourceJoinPoint courcename ={courcename}/>
								</div>
							</div>
						</div>
					</div>

					<div className="col-xl-4 col-lg-5">
						<div className="eduvibe-sidebar course-details-sidebar">
							<div className="inner">
								<div className="eduvibe-widget">
									<div className="video-area">
										<div className="thumbnail video-popup-wrapper">
											<embed type="video/webm" src={state && state.video_link} width={320} height={200}/>
										</div>
									</div>
									<CourceVideo courcename ={courcename}/>
								</div>
							</div>
						</div>
					</div> 

				</div>
			</div>
		</div>

		<div className="eduvibe-home-two-counter edu-counterup-area counterup-wrapper-1 edu-section-gap bg-color-white">
			<div className="container eduvibe-animated-shape">
				<div className="section-title white-title sal-animate">

					<h3 className="title tg-svg" >Course <span className="position-relative color-primary"><span
								className="svg-icon" id="svg-2"><svg width="100%" height="100%" viewBox="0 0 145 25"
									fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652"
										stroke="currentcolor" stroke-width="4"
										></path>
									<path d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786"
										stroke="currentcolor" stroke-width="2"
										></path>
								</svg></span> Curriculum</span></h3>
				</div>
				<div className="course-details-card mt--40">

					<div className="container">
						<div className="row justify-content-between">
							<CourceCategory courcename ={courcename}/>
						<SyllybusDownload/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="edu-elements-area edu-section-gap edu-section-gapTop bg-color-white">
            <div class="container">
				<div class="row" id="upcomingBatches">
					<div class="section-title white-title">
						<h3 class="title tg-svg pb--40">JTC Upcoming <span class="position-relative color-primary"><span
									class="svg-icon" id="svg-2"><svg width="100%" height="100%" viewBox="0 0 145 25"
										fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652"
											stroke="currentcolor" stroke-width="4"
											></path>
										<path d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786"
											stroke="currentcolor" stroke-width="2"
											></path>
									</svg></span>Batches</span> </h3>
					</div>
				</div>
                <div class="row g-5 justify-content-center">
                    <div class="col-lg-12">
                        <div class="row cursornodrop">
							<div class="col-lg-2">
								<div class="edu-event event-list1 radius-small">
									<div class="inner">
									<div class="badge">Sold Out</div>
										<div class="batchdate">
											<div class="txtdate w-100">
												<h5 class="title">03<sup>rd</sup></h5>
											</div>
											<div class="w-100">
												<p class="text-center mr-9">Feb 24</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-10">
								<div class="edu-event event-list radius-small">
									<div class="inner">
										<div class="content">
											<div class="content-left">
												<h5 class="title">Java Full Stack</h5>
												<ul class="event-meta">
													<li ><FaRegClock className='clr-org'/> 10:00 AM to 12:00 PM</li>
													<li><IoLocationOutline className='clr-org'/>offline/online</li>
													<li><SlCalender className='clr-org'/>Weekday</li>
												</ul>
											</div>
											<div class="read-more-btn">
												<a class="edu-btn ptrevnt" >Enroll Now <FaArrowRight /></a>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
                    </div>
                    <div class="col-lg-12" >
                        <div class="row section-hover">
							<div class="col-lg-2">
								<div class="edu-event event-list1 radius-small">
									<div class="inner">
										<div class="badge">Filling Fast</div>
										<div class="batchdate" id="ID4">
											<div class="txtdate w-100">
												<h5 class="title">19<sup>th </sup></h5>
												
											</div>
											<div class="w-100">
												<p class="text-center mr-9"> Feb 24</p>
											</div>
										</div>
									</div>	
								</div>
							</div>
							<div class="col-lg-10">
								<div class="edu-event event-list radius-small">
									<div class="inner">
										<div class="content">
											<div class="content-left">
												<h5 class="title">Java Full Stack</h5>
												<ul class="event-meta">
													<li id="ID5"><FaRegClock className='clr-org'/> 07:00 PM to 08:30 PM</li>
													<li><IoLocationOutline className='clr-org'/>offline/online</li>
													<li id="ID6"><SlCalender className='clr-org'/>Weekday</li>
												</ul>
											</div>
											<div class="read-more-btn">
												<a class="edu-btn popup-btn" data-popup="myModal1" href="javascript:;" onClick="getBatches(2)">Enroll Now <FaArrowRight /></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
                    </div>
                    <div class="col-lg-12" >
                        <div class="row section-hover">
							<div class="col-lg-2">
								<div class="edu-event event-list1 radius-small">
									<div class="inner">
										<div class="batchdate" id="ID7">
											<div class="txtdate w-100">
												<h5 class="title">26<sup>th</sup></h5>
											</div>
											<div class="w-100">
												<p class="text-center mr-9">Feb 24</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-10">
								<div class="edu-event event-list radius-small">
									<div class="inner">
										<div class="content">
											<div class="content-left">
												<h5 class="title">Java Full Stack</h5>
												<ul class="event-meta">
													<li id="ID8"><FaRegClock className='clr-org'/> 02:00 PM to 04:00 PM</li>
													<li><IoLocationOutline className='clr-org'/>offline/online</li>
													<li id="ID9"><SlCalender className='clr-org'/>Weekday</li>
												</ul>
											</div>
											<div class="read-more-btn">
												<a class="edu-btn popup-btn" data-popup="myModal1" href="javascript:;" onClick="getBatches(3)">Enroll Now <FaArrowRight /></a>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
                    </div>
                    <div class="col-lg-12" >
                        <div class="row section-hover">
							<div class="col-lg-2">
								<div class="edu-event event-list1 radius-small">
									<div class="inner">
												{/* <img src="assets/images/event/event-01/event-01.jpg" alt="Event Images">  */}
									<div class="batchdate" id="ID10">
											<div class="txtdate w-100">
												<h5 class="title">09<sup>th</sup></h5>
											</div>
											<div class="w-100">
												<p class="text-center mr-9">Mar 24</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-10">
								<div class="edu-event event-list radius-small">
									<div class="inner">
										<div class="content">
											<div class="content-left">
												<h5 class="title">Java Full Stack</h5>
												<ul class="event-meta">
													<li id="ID11"><FaRegClock className='clr-org'/> 03:00 PM to 06:00 PM</li>
													<li><IoLocationOutline className='clr-org'/>offline/online</li>
													<li id="ID12"><SlCalender className='clr-org'/>Weekend</li>
												</ul>
											</div>
											<div class="read-more-btn">
												<a class="edu-btn popup-btn" data-popup="myModal1" href="javascript:;" onClick="getBatches(4)">Enroll Now <FaArrowRight /></a>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
                    </div>
                    <div class="col-lg-12" >
                        <div class="row section-hover">
							<div class="col-lg-2">
								<div class="edu-event event-list1 radius-small">
									<div class="inner">
										<div class="batchdate" id="ID13">
											<div class="txtdate w-100">
												<h5 class="title">11<sup>th</sup></h5>
											</div>
											<div class="w-100">
												<p class="text-center mr-9">Mar 24</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-10">
								<div class="edu-event event-list radius-small">
									<div class="inner">
										<div class="content">
											<div class="content-left">
												<h5 class="title">Java Full Stack</h5>
												<ul class="event-meta">
													<li id="ID14"><FaRegClock className='clr-org'/> 04:00 PM to 06:00 PM</li>
													<li><IoLocationOutline className='clr-org'/>offline/online</li>
													<li id="ID15"><SlCalender className='clr-org'/>Weekday</li>
												</ul>
											</div>
											<div class="read-more-btn">
												<a class="edu-btn popup-btn" data-popup="myModal1" href="javascript:;" onClick="getBatches(5)">Enroll Now <FaArrowRight /></a>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
                    </div>
                    <div class="col-lg-12" >
                        <div class="row section-hover">
							<div class="col-lg-2">
								<div class="edu-event event-list1 radius-small">
									<div class="inner">
										<div class="batchdate" id="ID16">
											<div class="txtdate w-100">
												<h5 class="title">18<sup>th</sup></h5>
											</div>
											<div class="w-100">
												<p class="text-center mr-9">Mar 24</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-10">
								<div class="edu-event event-list radius-small">
									<div class="inner">
										<div class="content">
											<div class="content-left">
												<h5 class="title">Java Full Stack</h5>
												<ul class="event-meta">
													<li id="ID17"><FaRegClock className='clr-org'/> 10:00 AM to 12:00 PM</li>
													<li><IoLocationOutline className='clr-org'/>offline/online</li>
													<li id="ID18"><SlCalender className='clr-org'/>Weekday</li>
												</ul>
											</div>
											<div class="read-more-btn">
												<a class="edu-btn popup-btn" data-popup="myModal1" href="javascript:;" onClick="getBatches(6)">Enroll Now <FaArrowRight /></a>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
                    </div>
					<div class="col-lg-12" >
                        <div class="row section-hover">
							<div class="col-lg-2">
								<div class="edu-event event-list1 radius-small">
									<div class="inner">
										<div class="batchdate" id="ID19">
											<div class="txtdate w-100">
												<h5 class="title">08<sup>th</sup></h5>
											</div>
											<div class="w-100">
												<p class="text-center mr-9">Apr 24</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-10">
								<div class="edu-event event-list radius-small">
									<div class="inner">
										<div class="content">
											<div class="content-left">
												<h5 class="title">Java Full Stack</h5>
												<ul class="event-meta">
													<li id="ID20"><FaRegClock className='clr-org'/> 07:00 PM to 08:30 PM</li>
													<li><IoLocationOutline className='clr-org'/>offline/online</li>
													<li id="ID21"><SlCalender className='clr-org'/>Weekday</li>
												</ul>
											</div>
											<div class="read-more-btn">
												<a class="edu-btn popup-btn" data-popup="myModal1" href="javascript:;" onClick="getBatches(7)">Enroll Now <FaArrowRight /></a>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
                    </div>
					<div class="col-lg-12" >
                        <div class="row section-hover">
							<div class="col-lg-2">
								<div class="edu-event event-list1 radius-small">
									<div class="inner">
										<div class="batchdate" id="ID1">
											<div class="txtdate w-100">
												<h5 class="title">29<sup>th</sup></h5>
											</div>
											<div class="w-100">
												<p class="text-center mr-9">Apr 24</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-10">
								<div class="edu-event event-list radius-small">
									<div class="inner">
										<div class="content">
											<div class="content-left">
												<h5 class="title">Java Full Stack</h5>
												<ul class="event-meta">
													<li id="ID2"> <FaRegClock className='clr-org'/>  02:00 PM to 04:00 PM</li>
													<li><IoLocationOutline className='clr-org'/>offline/online</li>
													<li id="ID3"><SlCalender className='clr-org'/>Weekday</li>
												</ul>
											</div>
											<div class="read-more-btn">
												<a class="edu-btn popup-btn" data-popup="myModal1" href="javascript:;" onClick="getBatches(1)">Enroll Now <FaArrowRight /></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
                    </div>
                </div>
            </div>
        </div>

		<Testimonials/>
		<Faq/>
    </>
  )
}

export default Page
