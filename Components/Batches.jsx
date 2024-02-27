import React from 'react'
import { FaRegClock , FaArrowRight} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

const Batches = () => {
  return (
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
  )
}

export default Batches
