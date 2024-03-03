"use client"
import React,{useState, useEffect} from 'react'
import { courseFaqs } from '@/apis/apis';
import Accordion from 'react-bootstrap/Accordion';

const Faq = ({coursename}) => {

	const [state, setState] = useState([])

	const allFaqs = async() => {
		const {data} = await courseFaqs(coursename)
		if(data.length > 0)
		return setState(data)
	}

	useEffect(() => {
	allFaqs()
	},[coursename])
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
								<div className="row g-5 align-items-center mt--20">
									<div className="accordion-style-1">
										<Accordion>
											{state && state.map((el, i) =>(
											<div key={i} className='col-md-6'>
											
												<Accordion.Item eventKey={el.id}>
													<Accordion.Header>{el.point}</Accordion.Header>
													<Accordion.Body>{el.description}
													</Accordion.Body>
												</Accordion.Item>
											</div>

											))}
											{/* <div className='col-md-6'>
												<Accordion.Item eventKey="2">
													<Accordion.Header>Accordion Item #3</Accordion.Header>
													<Accordion.Body>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
														eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
														minim veniam, quis nostrud exercitation ullamco laboris nisi ut
														aliquip ex ea commodo consequat. Duis aute irure dolor in
														reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
														pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
														culpa qui officia deserunt mollit anim id est laborum.
													</Accordion.Body>
												</Accordion.Item>
												<Accordion.Item eventKey="3">
													<Accordion.Header>Accordion Item #4</Accordion.Header>
													<Accordion.Body>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
														eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
														minim veniam, quis nostrud exercitation ullamco laboris nisi ut
														aliquip ex ea commodo consequat. Duis aute irure dolor in
														reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
														pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
														culpa qui officia deserunt mollit anim id est laborum.
													</Accordion.Body>
												</Accordion.Item>
											</div> */}
										</Accordion>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</>
			)
}

			export default Faq
