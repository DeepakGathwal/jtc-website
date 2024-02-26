import React, { useState, useEffect } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { homeCources, joinUsForm } from '@/apis/apis';
import Link from 'next/link'


// ES6 modules
export default function BannerAreaHome() {
    const [state, setState] = useState([])
    const [field, setField] = useState({
        name : "", phone : " " , cource : "", email : ""
    })

    const allData = async () => {
        const data = await homeCources()
        if (data.success) setState(data.data)
    }

   
  const handelChange = (e) => {
    setField({ ...field, [e.target.name]: e.target.value })
  }

    useEffect(() => {
        allData()
    }, [])


    const handelSubmit = async(e) => {
        e.preventDefault()
        const data = await joinUsForm(field)
        setField("")
        if(data.success == true) return alert(data.message)
        else return alert(data.message)
    }

    return (
        <>
            {/* Start Banner Area */}
            <div className="slider-area banner-style-1 bg-white height-650 d-flex align-items-center" >
                <div className="container eduvibe-animated-shape">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-12 col-xl-6 my-4">
                            <div className="inner">
                                <div className="content">
                                    <span className="pre-title" id="changingPreTitle">Your Future Starts Now</span>
                                    <h1 className="title" id="changingTitle">Transforming Lives Through Education.</h1>

                                    <div className="read-more-btn">
                                        <a className="edu-btn" href="courses.php">Get Started Today <FaArrowRight /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-6 banner-right-content">
                            <div className="row g-5">
                                <div className="col-lg-9 col-md-6 col-sm-6 offset-lg-3">

                                    <div className="edu-card card-type-6 radius-small">
                                        <div className="inner">
                                            <div className="container checkout-page-style" style={{ padding: 0 }}>
                                                <div className="login-form-box">
                                                    <h3 className="mb-30">Get in Touch</h3>
                                                    <form className="login-form" id="downloadSyllabus" onSubmit={handelSubmit}>
                                                        <div className="input-box mb--20">
                                                            <input type="text" placeholder="Name" name="name" id="name6" required onChange={handelChange} value={field.name}/>
                                                        </div>
                                                        <div className="input-box mb--20">
                                                            <input type="number"  min="10" id="phone" className="phone-input" name="phone" placeholder="Mobile Number" required onChange={handelChange} value={field.phone}/>
                                                        </div>
                                                        {/* <div className="input-box mb--20">
                                                            <input type="email"   id="phone" className="phone-input" name="email" placeholder="@email.com" required onChange={handelChange} value={field.email}/>
                                                        </div> */}
                                                        <div className="input-box mb--20">
                                                            <select name="cource" id="courses3"  className="courses valid" aria-invalid="false" value={field.cource} required onChange={handelChange}>
                                                                <option disabled>Select Course</option>
                                                                {state && state.map((el) => (
                                                                    <option value={el.name}>{el.name}</option>

                                                                ))}

                                                            </select>
                                                        </div>
                                                        <div className="comment-form-consent input-box mb--20">
                                                            <label><input id="checkbox-6" type="checkbox" required className='termChecked'/></label>
                                                            <label htmlFor="checkbox-6"> I have reviewed all <Link href="/termsandcondition">  Terms and Conditions</Link>.</label>
                                                        </div>
                                                        <button className="rn-btn edu-btn w-100 mb--20" type="submit">
                                                            <span >Enquire Now</span>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                        <div className="shape shape-1"><img src="/assets/images/shapes/shape-01.png" alt="Shape Thumb" /></div>
                        <div className="shape shape-2"><img src="/assets/images/shapes/shape-02.png" alt="Shape Thumb" /></div>
                        <div className="shape shape-3"><img src="/assets/images/shapes/shape-03.png" alt="Shape Thumb" /></div>
                        <div className="shape shape-4"><img src="/assets/images/shapes/shape-04.png" alt="Shape Thumb" /></div>
                        <div className="shape shape-5"><img src="/assets/images/shapes/shape-05.png" alt="Shape Thumb" /></div>
                        <div className="shape shape-6"><img src="/assets/images/shapes/shape-05-05.png" alt="Shape Thumb" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
