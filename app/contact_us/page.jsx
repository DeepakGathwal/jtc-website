import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoMailOpenOutline } from "react-icons/io5";
import { HiOutlineMapPin } from "react-icons/hi2";
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <div className="edu-breadcrumb-area breadcrumb-style-1 bg-image">
			<div className="container-fluid eduvibe-animated-shape">
				<div className="row">
                    <div className="breadcrumb-inner text-start">
                        <Image width={1500} height={200} src='/assets/images/bg/breadcrumb-bg.jpg' alt='' className='breadCrumb_banner' />
                        <div className="page-title">
                            <h3 className="title">Contact Us</h3>
                        </div>
					</div>
				</div>
			</div>
		</div>
        <div class="edu-contact-us-area eduvibe-contact-us edu-section-gap bg-color-white">
            <div class="container eduvibe-animated-shape">
                <div class="row g-5">
                    <div class="col-lg-12">
                        <div class="section-title text-center">
                            <span class="pre-title">Need Help?</span>
                            <h3 class="title">Get In Touch With us</h3>
                        </div>
                    </div>
                </div>
                <div class="row g-5 mt--20">
                    <div class="col-lg-6">
                        <div class="contact-info pr--70 pr_lg--0 pr_md--0 pr_sm--0">
                            <div class="row g-5">
                                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="contact-address-card-1 website">
                                        <div class="inner">
                                            <div class="icon">
                                                <CiGlobe />
                                            </div>
                                            <div class="content">
                                                <h6 class="title">Our Website</h6>
                                                <p><a href="https://jtcindia.org/" target="_blank">www.jtcindia.org</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-12" >
                                    <div class="contact-address-card-1 phone">
                                        <div class="inner">
                                            <div class="icon">
                                                <TfiHeadphoneAlt/>
                                            </div>
                                            <div class="content">
                                                <h6 class="title">Call Us On</h6>
                                                <p><a href="tel:+91 9990699111">+91-999-0699-111</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-12" >
                                    <div class="contact-address-card-1 email">
                                        <div class="inner">
                                            <div class="icon">
                                                <IoMailOpenOutline/>
                                            </div>
                                            <div class="content">
                                                <h6 class="title">Email Us</h6>
                                                <p><a href="mailto:info@jtcindia.org" target="_blank">info@jtcindia.org</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-12" >
                                    <div class="contact-address-card-1 location">
                                        <div class="inner">
                                            <div class="icon">
                                                <HiOutlineMapPin/>
                                            </div>
                                            <div class="content">
                                                <h6 class="title">Our Location</h6>
                                                <p>D-44, Second Floor, 93.5 Red FM,
D-Block, Sector 2,Noida UP 201301</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <Image width={563} height={375} class="mt--20" src="assets/images/banner/contact_us.jpg" alt="" />
                    </div>
                </div>

                <div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div class="shape-image scene shape-image-1">
                        <span data-depth="-2.2">
                            <Image width={87} height={116} src="assets/images/shapes/shape-04-01.png" alt="Shape Thumb" />
                        </span>
                    </div>
                    <div class="shape-image shape-image-2">
                        <Image width={67} height={74} src="assets/images/shapes/shape-02-08.png" alt="Shape Thumb" />
                    </div>
                    <div class="shape-image shape-image-3">
                        <Image width={54} height={59} src="assets/images/shapes/shape-15.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
        <div class="google-map alignwide">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437.9496104138394!2d77.31459944157322!3d28.581865370894988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45ee4238225%3A0xd231857770c7ce2e!2sJTC%20India!5e0!3m2!1sen!2sin!4v1702124209521!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
  )
}

export default Page
