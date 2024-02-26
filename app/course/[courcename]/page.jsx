"use client"
import Testimonials from '@/Components/Testimonials';
import Faq from '@/Components/faq';
import React from 'react';
import { Accordion } from 'react-bootstrap-accordion';
import { FaRegClock , FaArrowRight} from "react-icons/fa";
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

				<div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
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
				</div>
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

					<div class="col-xl-4 col-lg-5">
						<div class="eduvibe-sidebar course-details-sidebar">
							<div class="inner">
								<div class="eduvibe-widget">
									<div class="video-area">
										<div class="thumbnail video-popup-wrapper">
											<img class="radius-small w-100"
												src="../assets/images/video-bg/course-02.jpeg" alt="Course Images" />
											<a href="https://www.youtube.com/watch?v=JqAtn7iwhgM"
												class="video-play-btn position-to-top video-popup-activation">
												<span class="play-icon course-details-video-popup"></span>
											</a>
										</div>
									</div>
									<div class="eduvibe-widget-details mt--35">
										<div class="widget-content">
											<ul>
												<li>Comprehensive training in Java programming language.</li>

												<li>Covers front-end and back-end web development frameworks like
													Angular,
													Spring, and Hibernate.</li>

												<li>Essential topics covered include database management, RESTful APIs,
													and
													DevOps tools.</li>

												<li>Hands-on experience gained by working on real-world projects.</li>

												<li>Course includes certification upon completion.</li>


											</ul>

											<div class="read-more-btn mt--45">
												<a class="edu-btn btn-bg-alt w-100 text-center"
													href="#downloadSyllabus">Download Brochure</a>
											</div>

											<div class="read-more-btn mt--15">
												<a class="edu-btn w-100 text-center" href="#upcomingBatches">Enroll
													Now</a>
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
							<div class="col-md-7">
								<div class="edu-card card-type-7 radius-small">
									<div class="inner">
										<div class="course-content">
											<div class="edu-accordion-02">
												<Accordion title='Core Java'>
													<div class="card-body">
															<div class="module">
																<h4>JDBC </h4>
																<div class="list_mod">
																	<p>Introduction of JDBC </p>
																	<p>JDBC Drivers </p>
																	<p>JDBC Statements</p>
																	<p>Batch Updates</p>
																	<p>Result Set</p>
																	<p>Row Set</p>
																</div>
															</div>
															<div class="module">
																<h4>Servlet </h4>
																<div class="list_mod">
																	<p>Introduction of Servlet </p>
																	<p>Introduction of Servlet</p>
																	<p>Web Server | Web Client | Web Container | Http
																		&amp; Https |
																		TCP &amp; IP | DNS </p>
																	<p>Web Server setup </p>
																	<p>Servlet API</p>
																	<p>Servlet Example using Web.xml</p>
																	<p>Servlet Example using Annotations</p>
																	<p>Servlet Life Cycle </p>
																	<p>Servlet Parameters</p>
																	<p>Request Dispatcher</p>
																	<p>Servlet Thread Models</p>
																	<p>HttpServletRequest &amp; HttpServletResponse.</p>
																	<p>Session Management </p>
																	<p>Exploring HttpSession</p>
																	<p>Servlet Scopes</p>
																	<p>Servlet Filter &amp; Filter Chaining</p>
																	<p>Listeners</p>
																</div>
															</div>
															<div class="module">
																<h4>JSP </h4>
																<div class="list_mod">
																	<p>Introduction of JSP </p>
																	<p>JSP Life-Cycle &amp; JSP Life-Cycle Methods</p>
																	<p>JSP Implecit Objects</p>
																	<p>JSP Scripting formats</p>
																	<p>JSP Directives</p>
																	<p>JSP Standard Actions</p>
																	<p>JSP Scopes</p>
																	<p>JSP EL Expression</p>
																	<p>JSTL Tags</p>
																	<p>Custom Tags</p>
																</div>
															</div>
														</div>
													</Accordion>
													<Accordion title='Advance Java'>
													<div class="card-body">
															<div class="module">
																<h4>JDBC </h4>
																<div class="list_mod">
																	<p>Introduction of JDBC </p>
																	<p>JDBC Drivers </p>
																	<p>JDBC Statements</p>
																	<p>Batch Updates</p>
																	<p>Result Set</p>
																	<p>Row Set</p>
																</div>
															</div>
															<div class="module">
																<h4>Servlet </h4>
																<div class="list_mod">
																	<p>Introduction of Servlet </p>
																	<p>Introduction of Servlet</p>
																	<p>Web Server | Web Client | Web Container | Http
																		&amp; Https |
																		TCP &amp; IP | DNS </p>
																	<p>Web Server setup </p>
																	<p>Servlet API</p>
																	<p>Servlet Example using Web.xml</p>
																	<p>Servlet Example using Annotations</p>
																	<p>Servlet Life Cycle </p>
																	<p>Servlet Parameters</p>
																	<p>Request Dispatcher</p>
																	<p>Servlet Thread Models</p>
																	<p>HttpServletRequest &amp; HttpServletResponse.</p>
																	<p>Session Management </p>
																	<p>Exploring HttpSession</p>
																	<p>Servlet Scopes</p>
																	<p>Servlet Filter &amp; Filter Chaining</p>
																	<p>Listeners</p>
																</div>
															</div>
															<div class="module">
																<h4>JSP </h4>
																<div class="list_mod">
																	<p>Introduction of JSP </p>
																	<p>JSP Life-Cycle &amp; JSP Life-Cycle Methods</p>
																	<p>JSP Implecit Objects</p>
																	<p>JSP Scripting formats</p>
																	<p>JSP Directives</p>
																	<p>JSP Standard Actions</p>
																	<p>JSP Scopes</p>
																	<p>JSP EL Expression</p>
																	<p>JSTL Tags</p>
																	<p>Custom Tags</p>
																</div>
															</div>
														</div>
													</Accordion>

													<Accordion title='Hibernate'>
														<div class="card-body">
															<div class="module">
																<h4>Hibernate </h4>
																<div class="list_mod">
																	<p>Introduction of Hibernate</p>
																	<p>Difference between JDBC and Hibernate</p>
																	<p>Hibernate Features</p>
																	<p>First Example of Hibernate using hbm.xml file</p>
																	<p>First Example of Hibernate using annotations</p>
																	<p>Hibernate Inheritance Mapping</p>
																	<p>Table Per Class Mapping</p>
																	<p>Table Per Concrete Class mapping</p>
																	<p>Association Mapping</p>
																	<p>One-to-One Uni-directional Mapping</p>
																	<p>One-to-One Bi-directional Mapping</p>
																	<p>Many-to-Many Mapping</p>
																	<p>Version Mapping</p>
																	<p>Timestamp Mapping</p>
																	<p>Hibernate Example on DAO Pattern</p>
																	<p>Hibernate Query Language SQL | HQL | QBC | Native
																		Query |
																		Named Query</p>
																	<p>Polymorphic Query</p>
																	<p>Positional Parameters &amp; Named Parameters </p>
																	<p>Simple Primary Key </p>
																	<p>Custom Primary Key</p>
																	<p>Composite Primary Key</p>
																	<p>Introduction of Transaction Management </p>
																	<p>ACID Property</p>
																	<p>Transaction Concurrency Problem &amp; Solutions
																	</p>
																	<p>Types of Transactions.</p>
																	<p>Hibernate Connection Management</p>
																	<p>JDBC Transaction</p>
																	<p>JTA Transaction</p>
																	<p>CMT Transaction</p>
																	<p>Hibernate Architecture </p>
																	<p>Exploring SessionFactory</p>
																	<p>Object States</p>
																	<p>Introduction of Hibernate Cache </p>
																	<p>Different types of Hibernate Cache </p>
																	<p>Hibernate Cache Architecture</p>
																</div>
															</div>
														</div>
														</Accordion>

													<Accordion title='Spring'>
														<div class="card-body">
															<div class="module">
																<h4>JSP </h4>
																<div class="list_mod">
																	<p>About Spring 5.x Training</p>
																	<p>Spring 5.x Course Prerequisite</p>
																	<p>Spring 5.x Training Course Objective</p>
																	<p>Spring 5.x Training Course Duration</p>
																	<p>Spring 5.x Training Overview</p>
																	<p>Spring Introduction</p>
																	<p>Spring Core Module</p>
																	<p>Spring Core Module with Annotations</p>
																	<p>Spring Core Module with 100% Code/Java Config
																		Approach.</p>
																	<p>Spring Boot Core</p>
																	<p>Spring JDBC/DAO</p>
																	<p>Spring AOP Module</p>
																	<p>Spring Transaction Management</p>
																	<p>Spring MVC</p>
																	<p>Spring Security</p>
																	<p>Spring ORM</p>
																	<p>Spring Data and Spring Data JPA</p>
																	<p>Spring Batch</p>
																	<p>Spring Mail</p>
																	<p>Introduction to Spring MicroServices</p>
																	<p>How to Explain Project Architectures</p>
																</div>
															</div>
														</div>
														</Accordion>
													<Accordion title='Springboot'>
														<div class="card-body">
															<div class="module">
																<h4>Spring Boot </h4>
																<div class="list_mod">
																	<p>Spring Boot introduction</p>
																	<p>Spring boot - Bootstrapping</p>
																	<p>Spring boot - Tomcat Development </p>
																	<p>Spring boot - Build System</p>
																	<p>Spring boot - Code Structure</p>
																	<p>Spring boot - Spring beans and dependency
																		injection</p>
																	<p>Spring boot - Runners</p>
																	<p>Spring boot - Application Properties</p>
																	<p>Spring boot - Logging </p>
																	<p>Spring boot - Building Restful Web Service</p>
																	<p>Spring boot - Exception Handling</p>
																	<p>Spring boot - Interceptor</p>
																	<p>Spring boot - Servlet Filter</p>
																	<p>Spring boot - Rest Template</p>
																	<p>Spring boot - File Handling</p>
																	<p>Spring boot - Service Components</p>
																	<p>Spring boot - Consuming Restful Web Services</p>
																	<p>Spring boot - Cors Support</p>
																	<p>Spring boot - Internationalization </p>
																	<p>Spring boot - Scheduling</p>
																	<p>Spring boot - Enabling Https</p>
																	<p>Spring boot - Eureka Server</p>
																	<p>Spring boot - Service Registration With Eureka
																	</p>
																	<p>Spring boot - Cloud Configuration Server</p>
																	<p>Spring boot - Cloud Configuration Client</p>
																	<p>Spring boot - Actuator</p>
																	<p>Spring boot - Admin Server</p>
																	<p>Spring boot - Admin Client</p>
																	<p>Spring boot - Enable Swagger2</p>
																	<p>Spring boot - Creating Docker Image</p>
																	<p>Spring boot - Tracing Micro Service Logs</p>
																	<p>Spring boot - Flying Database</p>
																	<p>Spring boot - Web Socket</p>
																	<p>Spring boot - Batch Service</p>
																	<p>Spring boot - Spring for Apache Kafka</p>
																	<p>Spring boot - Database handling</p>
																	<p>Spring boot - Securing Web Application</p>
																	<p>Spring boot - OAuth2 with JWT</p>
																</div>
															</div>
														</div>
														</Accordion>

											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4" id="downloadSyllabus">
								<div class="edu-card card-type-7 radius-small">
									<div class="inner">
										<div class="container checkout-page-style" style={{padding:"0"}}>
											<div class="login-form-box">
												<h6 class="mb-30">Download Curriculum</h6>
												<form class="login-form" onsubmit="DownloadSyllabusjava(); reset(); return false;" id="downloadSyllabus_java">
													<div class="input-box mb--20">
														<input type="text" placeholder="Name" name="name7" id="name7" required/>
													</div>
													<div class="input-box mb--20">
														<input type="tel" id="phone7" class="phone-input" name="phone"
															placeholder="Mobile Number" required/>
													</div>
													<div class="comment-form-consent input-box mb--20">
													<label><input id="checkbox-7" type="checkbox" required/></label>
														<label for="checkbox-7"> I have reviewed all <a
																href="termsandcondition.html" target="_blank"> Terms and
																Conditions</a>.</label>
													</div>
													<button class="rn-btn edu-btn w-100 mb--20" type="submit">
														<span>Download Curriculum</span>
													</button>
												</form>
												<div class="text-center" id="message"></div>
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

		<Testimonials/>
		<Faq/>
    </>
  )
}

export default Page
