"use client"
import Batches from '@/Components/Batches';
import SyllybusDownload from '@/Components/SyllybusDownload';
import Testimonials from '@/Components/Testimonials';
import CourceCategory from '@/Components/courceCategory';
import CourceVideo from '@/Components/courceVideo';
import Faq from '@/Components/faq';
import React from 'react';
import { FaRegClock , FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";


const Page = () => {
  return (
    <>

<div class="edu-breadcrumb-area breadcrumb-style-1 ptb--60 ptb_md--40 ptb_sm--40 bg-image">
			<div class="container eduvibe-animated-shape">
				<div class="row">
					<div class="col-lg-12">
						<div class="breadcrumb-inner text-start">
							<div class="page-title">
								<h3 class="title" id="c_name">Full Stack Java Development</h3>
							</div>
						</div>
					</div>
				</div>

				{/* <div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
					<div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
						<div class="shape-image shape-image-1">
							<img src="../assets/images/shapes/shape-11-07.png" alt="Shape Thumb" />
						</div>
						<div class="shape-image shape-image-2">
							<img src="../assets/images/shapes/shape-01-02.png" alt="Shape Thumb" />
						</div>
						<div class="shape-image shape-image-3">
							<img src="../assets/images/shapes/shape-03.png" alt="Shape Thumb" />
						</div>
						<div class="shape-image shape-image-4">
							<img src="../assets/images/shapes/shape-13-12.png" alt="Shape Thumb" />
						</div>
						<div class="shape-image shape-image-5">
							<img src="../assets/images/shapes/shape-36.png" alt="Shape Thumb" />
						</div>
						<div class="shape-image shape-image-6">
							<img src="../assets/images/shapes/shape-05-07.png" alt="Shape Thumb" />
						</div>
					</div>
				</div> */}
			</div>
		</div>
		<div class="edu-course-details-area edu-section-gap bg-color-white">
			<div class="container">
				<div class="row g-5">
					<div class="col-xl-8 col-lg-7">
						<div class="course-details-content">
							<div class="course-details-card">
								<div class="course-content">
									<div class="section-title white-title sal-animate">

										<h3 class="title tg-svg">Course <span
												class="position-relative color-primary"><span class="svg-icon"
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
									<p>The Java Full Stack Developer Course offered by JTC provides comprehensive
										training
										in Java programming language, along with front-end and back-end web development
										frameworks like Angular, Spring, and Hibernate. The course covers essential
										topics
										like database management, RESTful APIs, and DevOps tools. Students also gain
										hands-on experience by working on real-world projects and get certified upon
										completion.</p>
									<div class="section-title text-left sal-animate">
										<span class="pre-title sal-animate" >Why to</span>
										<h3 class="title tg-svg">Join This <span
												class="position-relative color-primary"><span class="svg-icon"
													id="svg-5"><svg width="100%" height="100%" viewBox="0 0 145 25"
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
													</svg></span> Course</span> </h3>
									</div>
									<div class="learnCourse">
										<div class="details_boxs">
											<div class="detail_icons">
												<img src="../assets/images/icons/box_traning_1.webp" alt=""/>
											</div>
											<div class="details_cont">
												<p>Student from any stream can join and become a certified Java
													Professional
												</p>
											</div>
										</div>

										<div class="details_boxs">
											<div class="detail_icons">
												<img src="../assets/images/icons/box_traning_2.webp" alt=""/>
											</div>
											<div class="details_cont">
												<p>Java Full Stack certification valued by all sectors</p>
											</div>
										</div>

										<div class="details_boxs">
											<div class="detail_icons">
												<img src="../assets/images/icons/box_traning_3.webp" alt=""/>
											</div>
											<div class="details_cont">
												<p>Assured placement with high salary package and career growth</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<CourceVideo/>
				</div>
			</div>
		</div>

		<div class="eduvibe-home-two-counter edu-counterup-area counterup-wrapper-1 edu-section-gap bg-color-white">
			<div class="container eduvibe-animated-shape">
				<div class="section-title white-title sal-animate">

					<h3 class="title tg-svg" >Course <span class="position-relative color-primary"><span
								class="svg-icon" id="svg-2"><svg width="100%" height="100%" viewBox="0 0 145 25"
									fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652"
										stroke="currentcolor" stroke-width="4"
										></path>
									<path d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786"
										stroke="currentcolor" stroke-width="2"
										></path>
								</svg></span> Curriculum</span></h3>
				</div>
				<div class="course-details-card mt--40">
					<div class="container">
						<div class="row justify-content-between">
							<CourceCategory/>
							

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
											{/* <img src="assets/images/event/event-01/event-01.jpg" alt="Event Images"> */}
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
												{/* <img src="assets/images/event/event-01/event-01.jpg" alt="Event Images">  */}
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

		{/* <Testimonials/> */}
		<Faq/>
    </>
  )
}

export default Page
