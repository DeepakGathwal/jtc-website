import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link'
import Tnc from './tnc';

const Test = ({ show, setShow }) => {
  const handelClose = async () => {
    setShow(false)
  }
  return (
    <>
      <Modal show={show} onHide={() => handelClose()}>

        <Modal.Header closeButton>
          <h3 className="mb-30">Get in Touch</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="popup-content">
            <section className="contact">
              <div className="content">
                <div className="form">
                  <div className="container checkout-page-style" style={{ padding: '0' }}>
                    <div className="login-form-box">
                      <form className="login-form" onSubmit="event.preventDefault(); sendMail('contactForm'); reset(); return false;"
                        method="post">
                        <div className="input-box mb--20">
                          <input type="text" placeholder="Name" name="name1" id="name1" required />
                        </div>
                        <div className="input-box mb--20">
                          <input type="tel" id="phone1" className="phone-input" name="phone1"
                            placeholder="Mobile Number" required />
                        </div>
                        <div className="input-box mb--20">
                          <select name="courses" id="courses" className="courses valid" required
                            aria-invalid="false">
                            <option value="">Select Course</option>
                            <option value="Java">Java Full Stack</option>
                            <option value="Front End">Front End</option>

                          </select>
                        </div>
                        <Tnc id = {"checkbox-1"}/>
                        <button className="rn-btn edu-btn w-100 mb--20" type="submit">
                          <span>Enquire Now</span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

        </Modal.Body>

      </Modal>



    </>
  )
}

export default Test