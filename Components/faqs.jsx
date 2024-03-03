"use client"
import React,{useState, useEffect} from 'react';
import Image from "next/image";
import Accordion from 'react-bootstrap/Accordion';
import { courseFaqs } from '@/apis/apis';
import "./faq.css";
import { IoCall } from "react-icons/io5";


const Faqs = ({coursename}) => {
    const [state, setState] = useState([])

	const allFaqs = async() => {
		const {data} = await courseFaqs(coursename)
		if(data.length > 0)
		return setState(data)
	}

	useEffect(() => {
	allFaqs()
	},[coursename])
    const faqClicked = (event) => {
        console.log('Element ID:', event.target.id);
    }
    return (
        <>
            <div class="edu-accordion-area eduvibe-faq-page accordion-shape-1 edu-section-gap bg-color-white">
				<div class="wrapper">
					<div class="container eduvibe-animated-shape">
						<div class="row">
							<div class="col-lg-12">
								<div class="section-title white-title sal-animate text-center" data-sal-delay="150"
									data-sal="slide-up" data-sal-duration="800">
									<span class="pre-title">Get General Answers</span>
									<h3 class="title tg-svg">FAQ <span class="position-relative color-primary"><span
										class="svg-icon" id="svg-2"><svg width="100%" height="100%" viewBox="0 0 145 25"
											fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652"
												stroke="currentcolor" stroke-width="4"
											></path>
											<path d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786"
												stroke="currentcolor" stroke-width="2"
											></path>
										</svg></span>Questions</span></h3>
								</div>
							</div>
						</div>



						<div class="tab-content" id="eduTabContent">
							<div class="tab-pane fade show active" id="edutabone" role="tabpanel"
								aria-labelledby="edutabone-tab">
								<div class="row g-5 mt--20">
										
											<div className='col-md-8'>
									<div class="accordion-style-2 acc-section">
                                                <Accordion>
                                                {state && state.map((el, i) =>(
												<Accordion.Item eventKey={el.id}>
													<Accordion.Header>{el.point}</Accordion.Header>
													<Accordion.Body>{el.description}
													</Accordion.Body>
												</Accordion.Item>
										
											))}
                                                </Accordion>
											</div>
									</div>
											<div className='col-md-4'>
												<div className="col-flex connectus">
                                                    <h3>Having any Queries?</h3>
                                                    <div className="fig">
                                                        <Image src="../assets/images/icons/connect-icon.svg" className='hello-call' alt="hello call us" width={20} height={20} />
                                                    </div>
                                                    <p>Connect with us</p>
                                                    <a href="tel:09990699111" >
                                                        <IoCall /> +91-999-0699-111
                                                    </a>
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