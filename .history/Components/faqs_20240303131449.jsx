"use client"
import React from 'react';
import { useEffect, useRef } from 'react';
import Image from "next/image";
import Accordion from 'react-bootstrap/Accordion';
import "./faq.css";
import Buttonicon from "./../public/assets/images/icons/connect-icon.svg"

const Faqs = () => {
    const faqClicked = (event) => {
        console.log('Element ID:', event.target.id);
    }
    return (
        <>
            <div className="edu-accordion-area eduvibe-faq-page accordion-shape-1 edu-section-gap bg-color-white">
				<div className="wrapper">
					<div className="container eduvibe-animated-shape">
						<div className="row">
							<div className="col-lg-12">
								<div className="section-title white-title sal-animate text-center" data-sal-delay="150"
									data-sal="slide-up" data-sal-duration="800">
									<span className="pre-title">Get General Answers</span>
									<h3 className="title tg-svg">FAQ <span className="position-relative color-primary"><span
										className="svg-icon" id="svg-2"><svg width="100%" height="100%" viewBox="0 0 145 25"
											fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652"
												stroke="currentcolor" strokeWidth="4"
											></path>
											<path d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786"
												stroke="currentcolor" strokeWidth="2"
											></path>
										</svg></span>Questions</span></h3>
								</div>
							</div>
						</div>



						<div className="tab-content" id="eduTabContent">
							<div className="tab-pane fade show active" id="edutabone" role="tabpanel"
								aria-labelledby="edutabone-tab">
								<div className="row g-5 mt--20">
										
                                    <div className='col-md-8'>
                                        <div className="accordion-style-2 acc-section">
                                            <div className="accordion custom">
                                                <div className="accordion-item">
                                                    <input type="checkbox" id="toggle1" className="accordion-toggle" />
                                                    <label for="toggle1" id="faqOne" onClick={faqClicked} eventKey="0" className="accordion-title">
                                                        <h2 id="faqOne" className="accordion-header accordion-button">Accordion Item #1</h2>
                                                    </label>
                                                    <div className="accordion-collapse">
                                                        <div className="accordion-body">
                                                            UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <input type="checkbox" id="toggle2" className="accordion-toggle" />
                                                    <label for="toggle2" id="faqTwo" onClick={faqClicked} eventKey="0" className="accordion-title">
                                                        <h2 id="faqTwo" className="accordion-header accordion-button">Accordion Item #2</h2>
                                                    </label>
                                                    <div className="accordion-collapse">
                                                        <div className="accordion-body">
                                                            UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <input type="checkbox" id="toggle3" className="accordion-toggle" />
                                                    <label for="toggle3" id="faqThree" onClick={faqClicked} eventKey="0" className="accordion-title">
                                                        <h2 id="faqThree" className="accordion-header accordion-button">Accordion Item #3</h2>
                                                    </label>
                                                    <div className="accordion-collapse">
                                                        <div className="accordion-body">
                                                            UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <input type="checkbox" id="toggle4" className="accordion-toggle" />
                                                    <label for="toggle4" id="faqFour" onClick={faqClicked} eventKey="0" className="accordion-title">
                                                        <h2 id="faqFour" className="accordion-header accordion-button">Accordion Item #4</h2>
                                                    </label>
                                                    <div className="accordion-collapse">
                                                        <div className="accordion-body">
                                                            UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <input type="checkbox" id="toggle5" className="accordion-toggle" />
                                                    <label for="toggle5" id="faqFive" onClick={faqClicked} eventKey="0" className="accordion-title">
                                                        <h2 id="faqFive" className="accordion-header accordion-button">Accordion Item #5</h2>
                                                    </label>
                                                    <div className="accordion-collapse">
                                                        <div className="accordion-body">
                                                            UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                
                                            </div>
                                        </div>
									</div>

											<div className='col-md-4'>
												<div className="col-flex connectus">
                                                    <h3>Having any Queries?</h3>
                                                    <div className="fig">
                                                        <Image src={Buttonicon} className='hello-call' alt="hello call us" />
                                                    </div>
                                                    <span>Connect with us</span>
                                                    <span>+1 202-918-2132</span>
                                                </div>
											</div>
										
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </>
        
    )
};

export default Faqs;