import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Tnc from './tnc';


const HireFromUs = ({  Hireshow, setHireShow }) => {
        const hireclose = async () => {
            setHireShow(false)
        }
  return (
    <>
        <Modal show={Hireshow} onHide={() => hireclose()}>

            <Modal.Header closeButton>
            <h6 className="mb-30">Partner with Us for Hiring</h6>
            </Modal.Header>
            <Modal.Body>
            <div class="popup-content">
                <div class="container checkout-page-style" style={{padding:0}}>
                    <div class="login-form-box">
                        <form class="login-form" onsubmit="event.preventDefault(); sendMail('registrationForm1'); reset(); return false;" id="registrationForm1">
                            <div class="input-box mb--20">
                                <input type="text" name="name2" class="name2" id="name2" placeholder="Enter your name" required/>
                            </div>
                            <div class="input-box mb--20">
                                <input type="tel" id="phone2" name="phone2" class="phone-input" placeholder="Enter your Mobile"
                                    required/>
                            </div>
                            <div class="input-box mb--20">
                                <input type="text" name="company_name" id="company_name" class="comName"
                                    placeholder="Enter your Company Name" required/>
                            </div>
                            <div class="input-box mb--20">
                                <input type="text" name="designation" id="designation" class="designation"
                                    placeholder="Enter your Designation" required/>
                            </div>
                            <div class="input-box mb--20">
                                <select name="hiring_profile" id="hiring_profile" class="hiring_profile" required>
                                    <option value="">Select Hiring Profile</option>
                                    <option value="Java Full Stack Developer">Java Full Stack Developer</option>
                                    <option value="Front End Developer">Front End Developer</option>
                                    <option value="Quality Analyst">Quality Analyst</option>
                                </select>
                            </div>
                            <Tnc id = {"checkbox-2"}></Tnc>
                            <button class="rn-btn edu-btn w-100 mb--20" type="submit">
                                <span>Hire Now</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            </Modal.Body>

            </Modal>
    </>
  )
}   

export default HireFromUs
