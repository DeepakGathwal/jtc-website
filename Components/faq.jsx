"use client"
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
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
								<div class="row g-5 align-items-center mt--20">
									<div class="accordion-style-1">
										<Accordion>
											<div className='col-md-6'>
												<Accordion.Item eventKey="0">
													<Accordion.Header>Accordion Item #1</Accordion.Header>
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
												<Accordion.Item eventKey="1">
													<Accordion.Header>Accordion Item #2</Accordion.Header>
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
											</div>
											<div className='col-md-6'>
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
											</div>
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
