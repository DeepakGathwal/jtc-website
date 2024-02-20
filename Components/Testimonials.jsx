import React , {useRef} from 'react';
import Slider from "react-slick";

function Testimonials() {

    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, 
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, 
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      };
  return (
    <>
      
      <div className="eedu-testimonial-area eduvibe-home-two-testimonial bg-color-white testimonial-card-box-bg edu-section-gap position-relative bg-image">
            <div className="container eduvibe-animated-shape">
                <div className="row g-5">
                    <div className="col-lg-12">
                    <div className="section-title text-left mb--20 mt--20" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                    <span className="pre-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Testimonials</span>
                                    <h3 className="title tg-svg">Our Student <span className="position-relative color-primary"><span className="svg-icon" id="svg-5"><svg width="100%" height="100%" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652" stroke="currentcolor" strokeWidth="4" ></path>
                                    <path d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786" stroke="currentcolor" strokeWidth="2" ></path>
                                    </svg></span>Feedback</span> </h3>
                                </div>
                    </div>
                </div>

                <div className="edu-testimonial-activation testimonial-item-3 mt--40 edu-slick-button">
                <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>
                    <div className="testimonial-card-box">
                        <div className="inner">
                            <div className="client-info">
                                <div className="thumbnail">
                                    <img src="assets/images/icons/abhishek.webp" alt="Client Images"/>
                                </div>
                                <div className="content">
                                    <h6 className="title">Abhishek Raj</h6>
                                </div>
                            </div>
                            <p className="description">“ I become nothing to something when I joined JTC and placed on time Many many thanx to all JTC members specially Som Sir, Vivek sir, Alia Mam where I always guided by best tutor and if
anyone wants to join JTC” <a href="https://g.co/kgs/NhbHuz" target="_blank">Read More...</a></p>
                        </div>
                    </div>
                    <div className="testimonial-card-box">
                        <div className="inner">
                            <div className="client-info">
                                <div className="thumbnail">
                                    <img src="assets/images/icons/amit.webp" alt="Client Images"/>
                                </div>
                                <div className="content">
                                    <h6 className="title">Amit Sharma</h6>
                                </div>
                            </div>
                            <p className="description">“ Hi, I would like to start my journey from the beginning,,, I have done my B.E in IT branch in 2014 and then through campus I joined Accenture. But there I got a project of production support i.e L2 support where I have to work days ”  <a href="https://g.co/kgs/HRw7jX" target="_blank">Read More...</a></p>
                        </div>
                    </div>
                    <div className="testimonial-card-box">
                        <div className="inner">
                            <div className="client-info">
                                <div className="thumbnail">
                                    <img src="assets/images/icons/manju.webp" alt="Client Images"/>
                                </div>
                                <div className="content">
                                    <h6 className="title">Manju Patidar</h6>
                                </div>
                            </div>
                            <p className="description">“ HI, I am Manju. Today I'm going to tell you journary  of my life with jtc.
I have done mca in 2011 after that i did  job in vodafone as
a RelationshipManager for a HNI customer.after that i  married & busy in my new lifestyle, how.” <a href="https://g.co/kgs/dmPQhC" target="_blank">Read More...</a></p>
                        </div>
                    </div>
                    <div className="testimonial-card-box">
                        <div className="inner">
                            <div className="client-info">
                                <div className="thumbnail">
                                    <img src="assets/images/icons/raj.webp" alt="Client Images"/>
                                </div>
                                <div className="content">
                                    <h6 className="title">Raj Arya</h6>
                                </div>
                            </div>
                            <p className="description">“It's been a great journey from a 2016 ECE graduate with 4 years of experience in telecom sector to a software engineer in one of the top mnc's in India.It's hard to put in words the role which JTC INDIA has played ” <a href="https://g.co/kgs/G5fiSK" target="_blank">Read More...</a></p>
                        </div>
                    </div>
                    <div className="testimonial-card-box">
                        <div className="inner">
                            <div className="client-info">
                                <div className="thumbnail">
                                    <img src="assets/images/icons/prabhat.webp" alt="Client Images"/>
                                </div>
                                <div className="content">
                                    <h6 className="title">Prabhat Kumar</h6>
                                </div>
                            </div>
                            <p className="description">“My experience with JTC India is very good . You will never find anywhere the kind of material they provide you here for learning .Faculties are good and experienced. Before joining JTC India I was doing private job” <a href="https://g.co/kgs/ea9XLY" target="_blank">Read More...</a></p>
                        </div>
                    </div>
                    <div className="testimonial-card-box">
                        <div className="inner">
                            <div className="client-info">
                                <div className="thumbnail">
                                    <img src="assets/images/icons/diwakar.webp" alt="Client Images"/>
                                </div>
                                <div className="content">
                                    <h6 className="title">Diwakar Tiwari</h6>
                                </div>
                            </div>
                            <p className="description">Completing JTC's Java Full Stack Developer program marked a turning point in my career. The program's holistic curriculum, spanning front-end essentials like HTML ,CSS ,JavaScript to back-end frameworks such as Spring,  <a href="https://g.co/kgs/FSSjgYw" target="_blank">Read More...</a></p>
                        </div>
                    </div>
                    <div className="testimonial-card-box">
                        <div className="inner">
                            <div className="client-info">
                                <div className="thumbnail">
                                    <img src="assets/images/icons/lucky.webp" alt="Client Images"/>
                                </div>
                                <div className="content">
                                    <h6 className="title">Lucky upadhyay</h6>
                                </div>
                            </div>
                            <p className="description">I recently completed coaching at JTC India, and I must say it was a transformative experience. The content provided was not only efficient but also tailored to the needs of the students. The instructors demonstrated <a href="https://g.co/kgs/gVFvwQm" target="_blank">Read More...</a></p>
                        </div>
                    </div>
                </Slider>

                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="assets/images/shapes/shape-23.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="assets/images/shapes/shape-14-02.png" alt="Shape Thumb" />
                    </div>
                </div>

            </div>
        </div>

    </>
  )
}

export default Testimonials
